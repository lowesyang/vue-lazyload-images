# vue-lazyload-images
[![npm](https://img.shields.io/badge/npm-v1.2.3-green.svg)](https://www.npmjs.com/package/vue-lazy-images)
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

index.html
```html
<div id="App">
    <div class="scrollY">
        <lazy-image v-for="item in itemsY" :src="item"></lazy-image>
    </div>
    <div class="scrollX">
        <lazy-image v-for="item in itemsX" :src="item"></lazy-image>
    </div>
</div>
```

example/index.js
```javascript 1.8
import Vue from "vue"
import VueLazyImage from "vue-lazy-images";
Vue.use(VueLazyImage)

new Vue({
    data(){
        return {
            itemsY:[
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153876796&di=bc888f2b6675f77d0d631d1579a40da2&imgtype=0&src=http%3A%2F%2Fimgnews.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20160512%2F4489700852197339238.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875644&di=18ee80e3f6d2604f02adaebb85dcc28e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109100605_jfmaK.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875640&di=267e5a70bb0b3d0b0e845b786406704f&imgtype=0&src=http%3A%2F%2Fwww.t-cha.com%2FtutcL3R1dGNpbWcwMi50YW9iYW9jZG4uY29tL2Jhby91cGxvYWRlZC9pMi9UQjF1UmZXRlZYWFhYY1dYRlhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZw%3D%3D.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875639&di=d76c80867ab3271473c1a836e96979ff&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109100823_JGKTw.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875639&di=5ce79d4225315c7c4a27f93b063d1aff&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109104354_TLyKu.jpeg"
            ],
            itemsX:[
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153876796&di=bc888f2b6675f77d0d631d1579a40da2&imgtype=0&src=http%3A%2F%2Fimgnews.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20160512%2F4489700852197339238.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875644&di=18ee80e3f6d2604f02adaebb85dcc28e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109100605_jfmaK.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875644&di=18ee80e3f6d2604f02adaebb85dcc28e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109100605_jfmaK.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875644&di=18ee80e3f6d2604f02adaebb85dcc28e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109100605_jfmaK.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875644&di=18ee80e3f6d2604f02adaebb85dcc28e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109100605_jfmaK.jpeg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875644&di=18ee80e3f6d2604f02adaebb85dcc28e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109100605_jfmaK.jpeg",
            ]
        }
    },
}).$mount("#App");
```

## Options
```Vue.use(VueLazyImage,options)```

| key | description | default | type |
|:----|:------------|:--------|:-----|
| offset | offset distance for pre-loading | 0 | Number |
| events | events that you want parentNode listen for | ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'] | Array |

