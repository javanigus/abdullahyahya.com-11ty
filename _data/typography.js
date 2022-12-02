const colors = require('./colors.json');
const FONT_FAMILY = 'Noto Sans, Arial, sans-serif';

module.exports = {
  body: {
    'default': {
      'margin' : '0',
      'font-family': FONT_FAMILY,
      'color': colors['On Surface']['1'].color,
      'background-color':'#EEEEEE'
    }
  },
  h1: {
    'default': {
      'margin' : '0 0 20px 0',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '26px',
      'line-height' : '30px',
      'font-weight': '700',
      'color': colors['On Surface']['2'].color,
      'word-wrap': 'break-word'
    },
    "phone": {
      'font-size' : '35px',
      'line-height' : '42px',
    },
    "tablet": {
      'font-size' : '31px',
      'line-height' : '36px',
    },
    "laptop": {
      'font-size' : '39px',
      'line-height' : '48px',
    }
  },
  h2: {
    'default': {
      'margin' : '64px 0 16px',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '22px',
      'line-height' : '30px',
      'font-weight': '700',
      'color': colors['On Surface']['1'].color
    },
    'tablet': {
      'font-size' : '29px',
      'line-height' : '35px',
    },
    'laptop': {
      'font-size' : '32px',
      'line-height' : '40px',
    }
  },
  h3: {
    'default': {
      'margin' : '0 0 24px 0',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '16px',
      'line-height' : '24px',
      'font-weight': '700',
      'letter-spacing': '0.64px',
      'color': colors['On Surface']['1'].color
    },
    'tablet': {
      'font-size' : '14px',
      'line-height' : '21px',
    },
    'laptop': {
      'font-size' : '16px',
      'line-height' : '24px',
    }
  },
  p: {
    'default': {
      'margin' : '0',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'line-height' : '21px',
      'color': colors['On Surface']['1'].color,
    },
    'phone': {
      'font-size' : '16px',
      'line-height' : '24px',
    },
    'tablet': {
      'font-size' : '14px',
      'line-height' : '21px',
    },
    'laptop': {
      'font-size' : '16px',
      'line-height' : '24px',
    }
  },
  '.post__content p': {
    'default': {
      'margin' : '0 0 32px 0',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'line-height': 1.7,
      'font-weight': '400',
      'color': colors['On Surface']['4'].color,
    },
    'phone': {
      'font-size' : '14px'
    },
    'tablet': {
      'font-size' : '14px'
    },
    'laptop': {
      'font-size' : '17px'
    }
  },
  '.post__content ul': {
    'default': {
      'margin' : '0 0 32px 19px',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'line-height': 1.7,
      'font-weight': '400',
      'color': colors['On Surface']['4'].color,
    },
    'phone': {
      'font-size' : '14px'
    },
    'tablet': {
      'font-size' : '14px'
    },
    'laptop': {
      'font-size' : '17px'
    }
  },
  '.post__content ol': {
    'default': {
      'margin' : '0 0 32px 19px',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '15px',
      'line-height': '24px',
      'font-weight': '400',
      'color': colors['On Surface']['4'].color,
    },
    'phone': {
      'font-size' : '19px',
      'line-height' : '32px',
    },
    'tablet': {
      'font-size' : '15px',
      'line-height' : '24px',
    },
    'laptop': {
      'font-size' : '19px',
      'line-height': '32px',
    }
  },
  '.post-pagintaion__block h3': {
    'default': {
      'margin' : '0',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '18px',
      'line-height': '24px',
      'color': colors.Surface["1"].color,
    },
    'phone': {
      'font-size' : '27px',
      'line-height': '32px',
    },
    'tablet': {
      'font-size' : '24px',
      'line-height': '28px',
    },
    'laptop': {
      'font-size' : '27px',
      'line-height': '32px',
    }
  },
  '.post-pagintaion__block span': {
    'default': {
      'margin' : '0',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '12px',
      'font-weight': '700',
      'text-transform': 'uppercase',
      'opacity': '0.8',
      'line-height': '18px',
      'letter-spacing': '0.48px',
      'color': colors.Surface["1"].color,
    },
    'phone': {
      'font-size' : '14px',
      'line-height': '21px',
    },
    'tablet': {
      'font-size' : '12px',
      'line-height': '18px',
    },
    'laptop': {
      'font-size' : '16px',
      'line-height': '24px',
    }
  },
  '.profile__name': {
    'default': {
      'margin' : '0 42px 0 0',
      'padding' : `0`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '20px',
      'line-height' : '30px',
      'font-weight': '700',
      'border-radius': '5px',
      'color': colors['On Surface']['1'].color,
      'background-color': 'transparent'
    },
    'phone': {
      'margin' : '0',
      'padding' : `4.7%`,
      'font-size' : '22px',
      'line-height' : '30px',
      'color': colors['On Surface']['1'].color,
      'background-color': colors['Surface']['1'].color
    },
    'tablet': {
      'margin' : '0',
      'padding' : `0`,
      'font-size' : '37px',
      'line-height' : '44px',
      'background-color': 'transparent'
    }
  },
  '.aside-link': {
    'default': {
      'margin' : '0',
      'padding' : `8px 0`,
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '400',
      'font-size' : '16px',
      'line-height': '24px',
      'letter-spacing': '0',
      'text-decoration': 'none',
      'color': colors['On Surface']['1'].color,
    },
    'phone': {
      'font-size' : '14px',
      'line-height': '21px',
    },
    'tablet': {
      'font-size' : '14px',
      'line-height': '21px',
    },
    'laptop': {
      'font-size' : '16px',
      'line-height': '24px',
    }
  },
  '.aside-link--current': {
    'default': {
      'font-weight': '700',
    }
  },
  '.share,.post__content .share': {
    'default': {
      'margin' : '0',
      'padding' : `3px 8px 4px 5px`,
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '400',
      'font-size' : '12px',
      'line-height': '16px',
      'letter-spacing': '0',
      'text-decoration': 'none',
      'color': colors['On Surface']['4'].color,
      'background-color': colors['Grey']['50'].color,
    }
  },
  '.field': {
    'default': {
      'margin' : '0',
      'padding' : `8px`,
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '400',
      'font-size' : '16px',
      'line-height' : '24px',
      'color': colors['On Surface']['2'].color,
      'background-color': colors.Surface['3'].color
    }
  },
  '.primary-button': {
    'default': {
      'margin' : '0',
      'padding' : `11px 22px`,
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '700',
      'font-size' : '16px',
      'color': colors.Surface['3'].color,
      'background-color': colors['On Surface']['3'].color 
    }
  },
  '.secondary-button': {
    'default': {
      'margin' : '0',
      'padding' : `11px 22px`,
      'font-family': `${FONT_FAMILY}`,
      'font-weight': '700',
      'font-size' : '16px',
      'color': colors['On Surface']['3'].color,
      'background-color': colors.Surface['3'].color
    }
  },
  '.label': {
    'default': {
      'padding' : `4px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '16px',
      'line-height': '24px',
      'font-weight': '400',
      'color': colors['On Surface']['1'].color,
    }
  },
  '.value': {
    'default': {
      'padding' : `4px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '16px',
      'line-height': '24px',
      'font-weight': '400',
      'color': colors['On Surface']['1'].color,
    }
  },
  '.label-small': {
    'default': {
      'padding' : `4px`,
      'font-family': `${FONT_FAMILY}`,
      'font-size' : '14px',
      'line-height': '24px',
      'font-weight': '400',
      'color': colors['On Surface']['1'].color,
    }
  },
}
