# vue-lazylaod-images
A plugin of lazy-load images for Vue2.x

## Demo
![Demo](https://github.com/yyh1102/vue-lazylaod-images/blob/master/demo.gif)

## Installation
### npm
```$ npm install vue-lazy-images```

### script
```<script src="dist/VueLazyImages.js"></script>```

## Usage
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
            ]
        }
    },
    methods:{
        addImageY(){
            this.itemsY.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875639&di=c776fdaa51911571ef7993f112299c7d&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160519%2Ffa46189dc715410c95ddabdf8c2ec2e8_th.jpg")
        },
        addImageX(){
            this.itemsX.push("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491153875639&di=c776fdaa51911571ef7993f112299c7d&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160519%2Ffa46189dc715410c95ddabdf8c2ec2e8_th.jpg")
        }
    }
}).$mount("#App");
```

index.html
```html
<div id="App">
    <div class="header">
        <button class="addBtn" @click="addImageY">Add image in scroll-Y</button>
        <button class="addBtn" @click="addImageX">Add image in scroll-X</button>
    </div>
    <div class="notice">Y方向滚动懒加载</div>
    <div class="scrollY">
        <lazy-image class="img" v-for="item in itemsY" :src="item"></lazy-image>
    </div>
    <div class="notice">X方向滚动懒加载</div>
    <div class="scrollX">
        <lazy-image class="img" v-for="item in itemsX" :src="item"></lazy-image>
    </div>
</div>
```

## Options
```Vue.use(VueLazyImage,options)```

| key | description | default | type |
|:----|:------------|:--------|:-----|
| offset | offset distance for pre-loading | 0 | Number |
| events | events that you want parentNode listen for | ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'] | Array |

## License
[MIT](https://opensource.org/licenses/MIT)

