# vue-lazyload-images
[![npm](https://img.shields.io/badge/npm-v1.4.3-green.svg)](https://www.npmjs.com/package/vue-lazy-images)
[![Build Status](https://travis-ci.org/yyh1102/vue-lazyload-images.svg?branch=master)](https://travis-ci.org/yyh1102/vue-lazyload-images)
[![Coverage Status](https://coveralls.io/repos/github/yyh1102/vue-lazyload-images/badge.svg)](https://coveralls.io/github/yyh1102/vue-lazyload-images)
[![npm](https://img.shields.io/npm/l/express.svg)](https://opensource.org/licenses/mit-license.php)

A plugin of lazy-load images for Vue2.x

Support images lazyload in window or build-in element.

## Demo
![Demo](https://github.com/yyh1102/vue-lazylaod-images/blob/master/demo.gif)

## Installation
### npm
```
$ npm install vue-lazy-images
```
or 
### script
```html
<script src="dist/VueLazyImages.js"></script>
```

## Usage
Entry.js
```javascript
import Vue from "vue"
import VueLazyImage from "vue-lazy-images";
Vue.use(VueLazyImage)
```

Template
```html
<lazy-image 
    :src='url'
    :img-class='string'  //or :img-class="['classname1','classname2']"
    :placeholder='url of placeholder or loading image'  
/>
```

## Options
```Vue.use(VueLazyImage,options)```

| key | description | default | type |
|:----|:------------|:--------|:-----|
| offset | offset distance for pre-loading | 0 | Number |
| events | events that you want parentNode listen for | ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'] | Array |
| throttle | spacing interval of continuous calling | 0(ms) | Number | 
| debounce | idle time between two actions | 0(ms) | Number |
