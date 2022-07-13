---
layout: layouts/design-system/ui-kit.njk
title: UI-Kit
---

# {{ title }}

## Links

### default link

{% responsive %}

{% ui_kit_block %}
  <a href="#">Rest</a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a href="#">Hover</a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a href="#">Active</a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a href="#">Focus</a>
{% endui_kit_block %}

{% endresponsive %}

### aside-link

{% responsive %}

{% ui_kit_block %}
  <a class="aside-link" href="#">Rest</a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a class="aside-link" href="#">Hover</a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a class="aside-link" href="#">Active</a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a class="aside-link" href="#">Focus</a>
{% endui_kit_block %}

{% endresponsive %}


<div class="post__content">


### post content link

{% responsive %}


{% ui_kit_block %}
  <a href="#">Rest</a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a href="#">Hover</a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a href="#">Active</a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a href="#">Focus</a>
{% endui_kit_block %}


{% endresponsive %}


</div>

### underline link

{% responsive %}

{% ui_kit_block %}
  <a class="underline-link" href="#">Rest</a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a class="underline-link" href="#">Hover</a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a class="underline-link" href="#">Active</a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a class="underline-link" href="#">Focus</a>
{% endui_kit_block %}

{% endresponsive %}

### secondary link

{% responsive %}

{% ui_kit_block %}
  <a class="secondary__link" href="#">Rest</a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a class="secondary__link" href="#">Hover</a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a class="secondary__link" href="#">Active</a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a class="secondary__link" href="#">Focus</a>
{% endui_kit_block %}

{% endresponsive %}

### share

{% responsive %}

{% ui_kit_block %}
  <a href="#" class="share button-container" target="_blank" rel="noopener">
    <div class="share__img">
      <picture>
          <source type="image/svg+xml" srcset="/img/0Sqpghg83X-18.svg">
          <img src="/img/0Sqpghg83X-18.png" width="18" height="18" alt="">
      </picture>
    </div>
    <span class="share__text">
      Twitter
    </span>
  </a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a href="#" class="share button-container" target="_blank" rel="noopener">
    <div class="share__img">
      <picture>
          <source type="image/svg+xml" srcset="/img/0Sqpghg83X-18.svg">
          <img src="/img/0Sqpghg83X-18.png" width="18" height="18" alt="">
      </picture>
    </div>
    <span class="share__text">
      Twitter
    </span>
  </a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a href="#" class="share button-container" target="_blank" rel="noopener">
    <div class="share__img">
      <picture>
          <source type="image/svg+xml" srcset="/img/0Sqpghg83X-18.svg">
          <img src="/img/0Sqpghg83X-18.png" width="18" height="18" alt="">
      </picture>
    </div>
    <span class="share__text">
      Twitter
    </span>
  </a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a href="#" class="share button-container" target="_blank" rel="noopener">
    <div class="share__img">
      <picture>
          <source type="image/svg+xml" srcset="/img/0Sqpghg83X-18.svg">
          <img src="/img/0Sqpghg83X-18.png" width="18" height="18" alt="">
      </picture>
    </div>
    <span class="share__text">
      Twitter
    </span>
  </a>
{% endui_kit_block %}

{% ui_kit_block %}
<a href="#" class="share button-container">
  <div class="share__img" role="presentation" aria-hidden="true">
    <picture>
        <source type="image/svg+xml" srcset="/img/XKh1GhhB-k-18.svg">
        <img src="/img/XKh1GhhB-k-18.png" width="18" height="18" alt="">
    </picture>
  </div>
  <span class="share__text">
    Facebook
  </span>
</a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
<a href="#" class="share button-container">
  <div class="share__img" role="presentation" aria-hidden="true">
    <picture>
        <source type="image/svg+xml" srcset="/img/XKh1GhhB-k-18.svg">
        <img src="/img/XKh1GhhB-k-18.png" width="18" height="18" alt="">
    </picture>
  </div>
  <span class="share__text">
    Facebook
  </span>
</a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
<a href="#" class="share button-container">
  <div class="share__img" role="presentation" aria-hidden="true">
    <picture>
        <source type="image/svg+xml" srcset="/img/XKh1GhhB-k-18.svg">
        <img src="/img/XKh1GhhB-k-18.png" width="18" height="18" alt="">
    </picture>
  </div>
  <span class="share__text">
    Facebook
  </span>
</a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
<a href="#" class="share button-container">
  <div class="share__img" role="presentation" aria-hidden="true">
    <picture>
        <source type="image/svg+xml" srcset="/img/XKh1GhhB-k-18.svg">
        <img src="/img/XKh1GhhB-k-18.png" width="18" height="18" alt="">
    </picture>
  </div>
  <span class="share__text">
    Facebook
  </span>
</a>
{% endui_kit_block %}

{% endresponsive %}

### pagination link prev

{% responsive %}

{% ui_kit_block %}
  <a class="pagination__link pagination__link--prev" href="#">
    {% pictureSvgPng "img/icons/arrow-left.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a class="pagination__link pagination__link--prev" href="#">
    {% pictureSvgPng "img/icons/arrow-left.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a class="pagination__link pagination__link--prev" href="#">
    {% pictureSvgPng "img/icons/arrow-left.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a class="pagination__link pagination__link--prev" href="#">
    {% pictureSvgPng "img/icons/arrow-left.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% endresponsive %}

### pagination link next

{% responsive %}

{% ui_kit_block %}
  <a class="pagination__link pagination__link--next" href="#">
    {% pictureSvgPng "img/icons/arrow-right.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a class="pagination__link pagination__link--next" href="#">
    {% pictureSvgPng "img/icons/arrow-right.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a class="pagination__link pagination__link--next" href="#">
    {% pictureSvgPng "img/icons/arrow-right.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a class="pagination__link pagination__link--next" href="#">
    {% pictureSvgPng "img/icons/arrow-right.svg", "", "18", "15" %}
  </a>
{% endui_kit_block %}

{% endresponsive %}

### post pagination link prev

{% responsive %}

{% ui_kit_block %}
  <a href="/strong-waterproof-glue-liquid-nails-fuze-it-max-vs-loctite-pl-marine/" class="post-pagintaion__block">
    <div class="container-80_80_80_80_80 centered">
    <span>Rest</span>
    <h3>Some post</h3>
    </div>
  </a>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <a href="/strong-waterproof-glue-liquid-nails-fuze-it-max-vs-loctite-pl-marine/" class="post-pagintaion__block">
    <div class="container-80_80_80_80_80 centered">
    <span>Hover</span>
    <h3>Some post</h3>
    </div>
  </a>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <a href="/strong-waterproof-glue-liquid-nails-fuze-it-max-vs-loctite-pl-marine/" class="post-pagintaion__block">
    <div class="container-80_80_80_80_80 centered">
    <span>Active</span>
    <h3>Some post</h3>
    </div>
  </a>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <a href="/strong-waterproof-glue-liquid-nails-fuze-it-max-vs-loctite-pl-marine/" class="post-pagintaion__block">
    <div class="container-80_80_80_80_80 centered">
    <span>Focus</span>
    <h3>Some post</h3>
    </div>
  </a>
{% endui_kit_block %}

{% endresponsive %}

## Buttons

### Burger button

{% responsive %}

{% ui_kit_block %}
  <button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHk9IjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=&quot;);"></button>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHk9IjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=&quot;);"></button>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHk9IjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=&quot;);"></button>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHk9IjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSIxMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=&quot;);"></button>
{% endui_kit_block %}

{% endresponsive %}

### Burger button opened

{% responsive %}

{% ui_kit_block %}
<button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="true" aria-label="Close menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==&quot;);"></button>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
<button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="true" aria-label="Close menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==&quot;);"></button>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
<button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="true" aria-label="Close menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==&quot;);"></button>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
<button class=" burger-button" id="burger-button" aria-haspopup="true" aria-expanded="true" aria-label="Close menu" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==&quot;);"></button>
{% endui_kit_block %}

{% endresponsive %}

### primary button

{% responsive %}

{% ui_kit_block %}
  <button class="primary-button" type="button">Rest</button>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <button class="primary-button" type="button">Hover</button>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <button class="primary-button" type="button">Active</button>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <button class="primary-button" type="button">Focus</button>
{% endui_kit_block %}

{% endresponsive %}

### secondary button

{% responsive %}

{% ui_kit_block %}
  <button class="secondary-button" type="button">Rest</button>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <button class="secondary-button" type="button">Hover</button>
{% endui_kit_block %}

{% ui_kit_block 'active' %}
  <button class="secondary-button" type="button">Active</button>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <button class="secondary-button" type="button">Focus</button>
{% endui_kit_block %}

{% endresponsive %}

## Inputs

{% responsive %}
{% ui_kit_block %}
  <input class="field" type="search" id="site-search" name="site-search">
  <p>rest</p>
{% endui_kit_block %}

{% ui_kit_block 'hover' %}
  <input class="field" type="search" id="site-search" name="site-search">
  <p>hover</p>
{% endui_kit_block %}

{% ui_kit_block 'focus' %}
  <input class="field" type="search" id="site-search" name="site-search">
  <p>active</p>
{% endui_kit_block %}

{% endresponsive %}