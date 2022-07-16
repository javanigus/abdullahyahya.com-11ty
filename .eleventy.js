const path = require("path");
const Image = require("@11ty/eleventy-img");
const responsiveData = require("./_data/responsive.json");
const containersData = require("./_data/containers.json");
const maxWidthData = require("./_data/max_width.json");
const bufferData = require("./_data/buffer.json")
const SCREENS = responsiveData.SCREEN_WIDTHES;

// Utils function

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function getWidthStack(page) {
  if (!page.screenWidthStack) {
    page.screenWidthStack = [];
  }
  return page.screenWidthStack;
}

function pushOnWidthStack(page, params) {
  let stack = getWidthStack(page);
  stack.push(params);
}

function popFromWidthStack(page) {
  let stack = getWidthStack(page);
  if (stack.length) {
      stack.length--;
  }
}

function pushMaxWidthOnWidthStack(page, maxWidth) {
  pushOnWidthStack(page, {maxWidth: maxWidth});
}

function pushAdaptiveOnWidthStack(page, coefficients) {
  pushOnWidthStack(page, { adaptive: coefficients });
}

function pushGapOnWidthStack(page, unusedSpaceWidth) {
  if(typeof(unusedSpaceWidth) === 'object') {
    let obj = JSON.parse(JSON.stringify(unusedSpaceWidth)); 
    for (let key in obj) {
      if(key === 'padding') {
        obj[key] *= 2;
      } else if (key === 'phone' || key === 'tablet' || key === 'laptop' || key === 'desktop') {
        obj[key]["padding"] *= 2;
      }
    }
    pushOnWidthStack(page, {gap: obj});
  }
}

// responsive shortcodes

function container(params, tag, addClass = '') {
  if(!tag) {
    tag = 'div';
  }

  if(!addClass) {
    addClass = ''
  } else {
    addClass = ' ' + addClass
  }

  pushAdaptiveOnWidthStack(this.page, containersData[params]);
  return `<${tag} class="container-${params}${addClass}">`;
}

function end_container(tag) {
  if(!tag) {
    tag = 'div';
  }
  popFromWidthStack(this.page);
  return `</${tag}>`;
}

function buffer(params, tag, addClass) {
  let bufferType = '';

  if(!tag) {
    tag = 'div'
  }
  
  if(!params) {
    pushGapOnWidthStack(this.page, bufferData.default);
    bufferType = 'buffer-default';
  } else {
    pushGapOnWidthStack(this.page, bufferData[params]);
    bufferType = 'buffer-' + params;
  }

  if(addClass) {
    bufferType += ` ${addClass}`;
  }

  return `<${tag} class="${bufferType}">`;
}

function end_buffer(tag) {
  if(!tag) {
    tag = 'div'
  }

  popFromWidthStack(this.page);
  return `</${tag}>`;
}

function responsive(content, tag, addClass) {
  if(!tag) {
    tag = 'div';
  }

  if(!addClass) {
    addClass = ''
  } else {
    addClass = ' ' + addClass
  }

  return `<${tag} class="responsive${addClass}">${content}</${tag}>`
}

function max_width(params, addClass) {
  if(!params) {
    pushMaxWidthOnWidthStack(this.page, maxWidthData["default"].max_width);
    pushGapOnWidthStack(this.page,  maxWidthData["default"].gap);
    maxWidthType = 'max-width-default';
  } else {
    pushMaxWidthOnWidthStack(this.page, maxWidthData[params].max_width);
    pushGapOnWidthStack(this.page,  maxWidthData[params].gap);
    maxWidthType = 'max-width-' + params;
  }

  if(!addClass) {
    addClass = ''
  } else {
    addClass = ' ' + addClass
  }

  return `<div class="${maxWidthType}${params}${addClass}">`;
}

function end_max_width() {
  popFromWidthStack(this.page); // padding
  popFromWidthStack(this.page); // max-width
  return `</div>`;
}

// Picture

function calcWidthes(media, operations) {
  let localWidthes = SCREENS.slice();
  let maxWidthArray = operations.filter(op => op.maxWidth);
  let maxWidth = localWidthes[localWidthes.length - 1];

  if(maxWidthArray.length > 0 && maxWidthArray.length <= 1) {
    maxWidth = maxWidthArray[0].maxWidth;
  } else if ( maxWidthArray.length > 1){
    maxWidth = maxWidthArray.reduce(function(res, obj) {
      return (obj.maxWidth < res.maxWidth) ? obj.maxWidth : res.maxWidth;
    });
  }

  if(maxWidth) {
    let i = 0;
    while (i < operations.length) {
      if(Object.keys(operations[i])[0] === 'gap') {
        maxWidth += operations[i].gap.padding;
      }
      if(Object.keys(operations[i])[0] === 'maxWidth') {
        if(i === 0) {
          for(let i = 0; i < localWidthes.length; i++) {
            if(localWidthes[i] >= maxWidth) {
              localWidthes[i] = maxWidth;
              localWidthes = localWidthes.slice(0, i+1);
            }
          }
        }
        break;
      }
      i++;
    }
  }

  let mediaRange = 0;

  for(width of localWidthes) {
    if(width < 768) {
      mediaRange++;
    }
  }

  let localWidthesProcessed = localWidthes.slice();

  for(let i = 0; i < localWidthesProcessed.length; i++) {
    for(let op of operations) {    
      if(op.gap) {

        let gap = 0;
        if(typeof(op.gap) === 'object') {
          if(localWidthes[i] < media.phone) {
            gap = op.gap.padding;
          } else if(localWidthes[i] < media.tablet && typeof op.gap['phone'] !== "undefined") {
            gap = op.gap.phone.padding;
          } else if(localWidthes[i] < media.laptop && typeof op.gap['tablet'] !== "undefined") {
            gap = op.gap.tablet.padding;
          } else if(localWidthes[i] < media.desktop && typeof op.gap['laptop'] !== "undefined") {
            gap = op.gap.laptop.padding;
          } else if(typeof op.gap['desktop'] !== "undefined") {
            gap = op.gap.desktop.padding;
          } else {
            gap = op.gap.padding;
          }
        }

        localWidthesProcessed[i] -= gap;
      }
  
      if(op.adaptive) {
        if(localWidthes[i] < media.phone) {
          localWidthesProcessed[i] *= op.adaptive.default;
        } else if(localWidthes[i] < media.tablet) {
          localWidthesProcessed[i] *= op.adaptive.phone;
        } else if(localWidthes[i] < media.laptop) {
          localWidthesProcessed[i] *= op.adaptive.tablet;
        } else if(localWidthes[i] < media.desktop) {
          localWidthesProcessed[i] *= op.adaptive.laptop;
        } else {
          localWidthesProcessed[i] *= op.adaptive.desktop;
        }
        localWidthesProcessed[i] = Math.round(localWidthesProcessed[i]);
      }
    }
  }

  maxWidth = localWidthesProcessed[localWidthesProcessed.length - 1];
  let count = localWidthesProcessed.length;

  for(let i = 0; i < count; i++) {
    let width = localWidthesProcessed[i];
    if(i < mediaRange) {
      localWidthesProcessed.push(width*2);
      localWidthesProcessed.push(width*3);
    } else {
      localWidthesProcessed.push(Math.round(width*1.5));
      localWidthesProcessed.push(width*2);
    }
  }

  localWidthesProcessed.sort(compareNumeric);
  // Внутренняя неочевидная логика. Функция всегда выдает последним элементом массива максимальную ширину картинки для фолбека (без коэффициента ретины). 
  // Позже, на основе последнего элемента в функции picture будет нарезан png/jpg фолллбэк для старых браузеров.
  let set = Array.from(new Set(localWidthesProcessed));
  set.splice(set.indexOf(maxWidth), 1);
  set.push(maxWidth);

  return set;
}

function calcSizes(media, operations) {
  let sizesDefault = '100vw';
  let maxWidth = null;
  let sizes = {
    phone: sizesDefault,
    tablet: sizesDefault,
    laptop: sizesDefault,
    desktop: sizesDefault,
    default: sizesDefault
  };

  for(let i = 0; i < operations.length; i++) {
    if(operations[i].maxWidth) {
      maxWidth = operations[i].maxWidth;
      sizes['maxWidth'] = operations[i].maxWidth;
    }
  }

  if(maxWidth) {
    let i = 0;
    while (i < operations.length) {
      if(Object.keys(operations[i])[0] === 'gap') {
        maxWidth += operations[i].gap.padding;
        sizes['maxWidth'] += operations[i].gap.padding;
      }

      if(Object.keys(operations[i])[0] === 'maxWidth') {
        break;
      }

      i++;
    }
  }

  for(let op of operations) {
    if(op.adaptive) {
      if(op.adaptive.default < 1) {
        sizes.default = `(${sizes.default} * ${(op.adaptive.default).toFixed(2)})`;
        if (maxWidth && maxWidth >= media.desktop) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.default));
        }
      }

      if(op.adaptive.phone < 1) {
        sizes.phone = `(${sizes.phone} * ${(op.adaptive.phone).toFixed(2)})`;
        if(maxWidth && maxWidth < media.phone) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.phone));
        }
      }

      if(op.adaptive.tablet < 1) {
        sizes.tablet = `(${sizes.tablet} * ${(op.adaptive.tablet).toFixed(2)})`;
        if(maxWidth && maxWidth >= media.phone && maxWidth < media.tablet) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.tablet));
        }
      }
      
      if(op.adaptive.laptop < 1) {
        sizes.laptop = `(${sizes.laptop} * ${(op.adaptive.laptop).toFixed(2)})`;
        if(maxWidth && maxWidth >= media.tablet && maxWidth < media.laptop) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.laptop));
        }
      }
 
      if(op.adaptive.desktop < 1) {
        sizes.desktop = `(${sizes.desktop} * ${(op.adaptive.desktop).toFixed(2)})`;
        if(maxWidth && maxWidth >= media.laptop && maxWidth < media.desktop) {
          sizes.maxWidth = Math.round(sizes.maxWidth * (op.adaptive.desktop));
        }
      }
    }

    if(op.gap) {
      if(typeof(op.gap) === 'object') {
        sizes.default = `(${sizes.default} - ${op.gap.padding}px)`;

        if(typeof op.gap['phone'] !== "undefined") {
          sizes.phone = `(${sizes.phone} - ${op.gap.phone.padding}px)`;
        } else {
          sizes.phone = `(${sizes.phone} - ${op.gap.padding}px)`;
        }
  
        if(typeof op.gap['tablet'] !== "undefined") {
          sizes.tablet = `(${sizes.tablet} - ${op.gap.tablet.padding}px)`;
        } else {
          sizes.tablet = `(${sizes.tablet} - ${op.gap.padding}px)`;
        }
  
        if(typeof op.gap['laptop'] !== "undefined") {
          sizes.laptop = `(${sizes.laptop} - ${op.gap.laptop.padding}px)`;
        } else {
          sizes.laptop = `(${sizes.laptop} - ${op.gap.padding}px)`;
        }
  
        if(typeof op.gap['desktop'] !== "undefined") {
          sizes.desktop = `(${sizes.desktop} - ${op.gap.desktop.padding}px)`;
        } else {
          sizes.desktop = `(${sizes.desktop} - ${op.gap.padding}px)`;
        }
      }

      if(sizes.maxWidth) {
        if(maxWidth < media.phone) {
          sizes.maxWidth -= op.gap.padding;
        } else if(maxWidth < media.tablet && typeof op.gap['phone'] !== "undefined") {
          sizes.maxWidth -= op.gap.phone.padding;
        } else if(maxWidth < media.laptop && typeof op.gap['tablet'] !== "undefined") {
          sizes.maxWidth -= op.gap.tablet.padding;
        } else if(maxWidth < media.desktop && typeof op.gap['laptop'] !== "undefined") {
          sizes.maxWidth -= op.gap.laptop.padding;
        } else if(typeof op.gap['desktop'] !== "undefined") {
          sizes.maxWidth -= op.gap.desktop.padding;
        } else {
          sizes.maxWidth -= op.gap.padding;
        }
      }
    }
  }

  let result = '';

  for(let size in sizes) {
    if(size === 'maxWidth') {
      result = `(min-width: ${maxWidth}px) ${Math.round(sizes[size])}px, ` + result;
    }

    if(size  === 'default') {
      result = result + `calc(${sizes[size]})`;
    }

    if(size  === 'phone') {
      result = `(min-width: ${media.phone}px) calc(${sizes[size]}), ` + result;
    }
    
    if(size  === 'tablet') {
      result = `(min-width: ${media.tablet}px) calc(${sizes[size]}), ` + result;
    }
    
    if(size  === 'laptop') {
      result = `(min-width: ${media.laptop}px) calc(${sizes[size]}), ` + result;
    }

    if(size  === 'desktop') {
      result = `(min-width: ${media.desktop}px) calc(${sizes[size]}), ` + result;
    }
  }
  return result;
}

async function picture(src, alt) {
  let media = responsiveData.MEDIA;
  const extension = path.extname(src);
  const dirname = path.dirname(src);
  const name = path.basename(src, extension);
  const outputName = dirname.replaceAll('/', '-') + '-' + name;
  let operationStack = getWidthStack(this.page);

  let result = '';
  let srcset = calcWidthes(media, operationStack);
  let sizes = calcSizes(media, operationStack);

  if(extension == '.svg') {
    let metadata = await Image(src, {
      svgAllowUpscale: true,
      widths: [srcset[srcset.length - 1]],
      formats: ['png'],
      outputDir: './_site/img',
      filenameFormat: function (id, src, width, format, options) {
        return `${outputName}-${[srcset[srcset.length - 1]]}w.png`;
      }
    });

    result = `<picture>
      <source type="image/svg+xml" srcset="/${src}">
      <img src="${metadata.png[0].url}" alt="${alt}" width="${metadata.png[0].width}" height="${metadata.png[0].height}">
    </picture>`;
  } else if (extension == '.png') {
    let metadata = await Image(src, {
      widths: srcset,
      formats: ['webp'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${outputName}-${width}w.${format}`;
      }
    });

    let fallbackMetadata = await Image(src, {
      widths: [srcset[srcset.length - 1]],
      formats: ['png'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${outputName}-${width}w.${format}`;
      }
    });

      let fallbackWidth;
      let fallbackHeight;

      if(srcset[srcset.length - 1] !== fallbackMetadata.png[0].width) {
        fallbackWidth = srcset[srcset.length - 1];
        fallbackHeight = Math.round((fallbackWidth/fallbackMetadata.png[0].width)*fallbackMetadata.png[0].height);
      } else {
        fallbackWidth = fallbackMetadata.png[0].width;
        fallbackHeight = fallbackMetadata.png[0].height;
      }

      result  = 
      `<picture>
        <source sizes="${sizes}" type="image/webp" srcset="\n`;
      result += metadata['webp'].map(webp => `      ${webp.srcset}`).join(",\n");
      result += `">\n`;
      result += `<!-- TODO add img -->\n`;
      result += `  <img src="${fallbackMetadata.png[0].url}" alt="${alt}" width="${fallbackWidth}" height="${fallbackHeight}">\n`;
      result += `</picture>`;
  } else if (extension == '.jpg' || extension == '.jpeg') {
    let metadata = await Image(src, {
      widths: srcset,
      formats: ['webp'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${outputName}-${width}w.${format}`;
      }
    });
    
    let fallbackMetadata = await Image(src, {
      widths: [srcset[srcset.length - 1]],
      formats: ['jpeg'],
      outputDir: './_site/img/',
      filenameFormat: function (id, src, width, format, options) {
        return `${outputName}-${width}w.${format}`;
      }
    });

    let fallbackWidth;
    let fallbackHeight;

    if(srcset[srcset.length - 1] !== fallbackMetadata.jpeg[0].width) {
      fallbackWidth = srcset[srcset.length - 1];
      fallbackHeight = Math.round((fallbackWidth/fallbackMetadata.jpeg[0].width)*fallbackMetadata.jpeg[0].height);
    } else {
      fallbackWidth = fallbackMetadata.jpeg[0].width;
      fallbackHeight = fallbackMetadata.jpeg[0].height;
    }

    result  = 
    `<picture>
      <source sizes="${sizes}" type="image/webp" srcset="\n`;
    result += metadata['webp'].map(webp => `      ${webp.srcset}`).join(",\n");
    result += `">\n`;
    result += `<!-- TODO add img -->\n`;
    result += `  <img src="${fallbackMetadata.jpeg[0].url}" alt="${alt}" width="${fallbackWidth}" height="${fallbackHeight}">\n`;
    result += `</picture>`;
  } else {
    throw new Error('Unsupported file format');
  }
  return result;
}

async function pictureSvgPng(src, alt, width, height) {
  if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }
  
  let metadata = await Image(src, {
      formats: ['png', 'svg'],
      outputDir: './_site/img'
  });
  
  return `<picture>
              <source type="image/svg+xml" srcset="${metadata.svg[0].url}">
              <img src="${metadata.png[0].url}" width="${width}" height="${height}" alt="${alt}">
          </picture>`;
}

async function picturePngWebp(src, alt, width, height) {
  if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let localWidths = [];
  localWidths.push(width*1.0)
  localWidths.push(width*1.5)
  localWidths.push(width*2)
  localWidths.push(width*3)
  localWidths = Array.from(new Set(localWidths));
  
  let metadata = await Image(src, {
      widths: localWidths,
      formats: ['png', 'webp'],
      outputDir: './_site/img'
  });

  let result = `<picture>
    <source sizes="${width}px" type="image/webp" srcset="\n`;
  result += metadata['webp'].map(webp => `      ${webp.srcset}`).join(",\n");
  result += `">\n`;
  result += `  <img src="${metadata.png[0].url}" alt="${alt}" width="${width}" height="${height}">\n`;
  result += `</picture>`;
  
  return result;
}

// design system

function assets_block(src, width, height, alt, dark) {
  let addClass = ''
  if (dark) {
    addClass += ' assets-block__inner--dark'
  }

  let output = `
  ${container.call(this, "100_50_33_33_33")}
    <div class="assets-block">
      <div class="assets-block__inner${addClass}">
        <div class="assets-block__buffer"><img src="${src}" width="${width}" height="${height}" alt="${alt}">
        </div>
      </div>
    </div>
  ${end_container.call(this)}`;
  return output;
}

function color_block(theme, color, label) {
  let output = `
  ${container.call(this, "100_50_33_33_33")}
    <div class="color-block">
      <div class="color-block__inner">
        <div style="background-color: ${ color };">
          <div class="color-block__buffer">
            <p class="color-block__label" style="color: ${ label };">${ theme }</p>
            <div style="padding-top: 40px">
            </div>
            <p class="color-block__hex" style="color: ${ label };">${ color }</p>
          </div>
        </div>
      </div>
    </div>
  ${end_container.call(this)}`;
  return output;
}

function ui_kit_block(data, type) {
  if(!type) {
    type = '';
  } else {
    type = ' ' + type;
  }

  const template = `${container.call(this, "100_50_33_33_33")}<div class="ui-kit-block${type}"><div class="ui-kit-block__inner"><div class="ui-kit-block__buffer">${data}</div></div></div>${end_container.call(this)}`;
  return template;
}

// content

function figure(imgSrc, caption, link) {

  let template = '<figure>';

  if(link) {
    template += `<a href="${link}">`;
  }

  template += `<img src="${imgSrc}" alt="${caption}" loading="lazy" decoding="async"><figcaption>${caption}</figcaption>`;

  if(link) {
    template += `</a>`
  }
   
  template += `</figure>`;
  return template;
}

function formatDate(date) {
  const d = new Date(date);
  return `${d.toLocaleString('default', { month: 'long' })}, ${d.getDay()}, ${d.getFullYear()}`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addShortcode("max_width", max_width);
  eleventyConfig.addShortcode("end_max_width", end_max_width);
  eleventyConfig.addShortcode("buffer", buffer);
  eleventyConfig.addShortcode("end_buffer", end_buffer);
  eleventyConfig.addPairedShortcode("responsive", responsive);
  eleventyConfig.addShortcode("container", container);
  eleventyConfig.addShortcode("end_container", end_container);
  eleventyConfig.addAsyncShortcode("picture", picture);
  eleventyConfig.addAsyncShortcode("pictureSvgPng", pictureSvgPng);
  eleventyConfig.addAsyncShortcode("picturePngWebp", picturePngWebp);

  // filter
  eleventyConfig.addFilter("parseNum", function(value) {
    return value.replace(/\D/g,'');
  });

  // design-system
  eleventyConfig.addShortcode("assets_block", assets_block);
  eleventyConfig.addShortcode("color_block", color_block);
  eleventyConfig.addPairedShortcode("ui_kit_block", ui_kit_block);

  // content
  eleventyConfig.addShortcode("figure", figure);
  eleventyConfig.addShortcode("formatDate", formatDate);
}