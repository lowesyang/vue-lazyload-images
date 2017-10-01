import Vue from "vue"
import LazyImage from "../src";
import "babel-polyfill"
// import LazyImage from "vue-lazy-images";
Vue.use(LazyImage)

new Vue({
  data() {
    return {
      placeholder: '/example/loading.gif',
      itemsY: [
        "http://img3.a0bi.com/upload/ttq/20150525/1432550622613_middle.jpg",
        "http://img.mp.itc.cn/upload/20170220/2f2a4d0eb018483b97a7093e39b54cf7_th.jpg",
        "http://ww1.sinaimg.cn/mw600/c2ba660dtw1e53cbidiizj20sg0sgtao.jpg",
        "http://pic2.52pk.com/files/140211/1283568_105559_9065.jpg",
      ],
      itemsX: [
        "http://photocdn.sohu.com/20151218/mp49366462_1450443096991_4.jpeg",
        "http://ww1.sinaimg.cn/mw600/c2ba660dtw1e53cbidiizj20sg0sgtao.jpg",
      ]
    }
  },
  methods: {
    addImageY() {
      this.itemsY.push(this.itemsY[Math.floor(Math.random() * this.itemsY.length)] + "?t=" + Date.now());
    },
    addImageX() {
      this.itemsX.push(this.itemsY[Math.floor(Math.random() * this.itemsY.length)] + "?t=" + Date.now())
    }
  }
}).$mount("#App");