import Vue from "vue"
import LazyImage from "../src";
import "babel-polyfill"
// import LazyImage from "vue-lazy-images";
Vue.use(LazyImage)

new Vue({
  data() {
    return {
      placeholder: '/example/loading.gif',
      stores: [
        "http://img3.a0bi.com/upload/ttq/20150525/1432550622613_middle.jpg",
        "http://img.mp.itc.cn/upload/20170220/2f2a4d0eb018483b97a7093e39b54cf7_th.jpg",
        "http://ww1.sinaimg.cn/mw600/c2ba660dtw1e53cbidiizj20sg0sgtao.jpg",
        "http://pic2.52pk.com/files/140211/1283568_105559_9065.jpg",
        "http://photocdn.sohu.com/20151218/mp49366462_1450443096991_4.jpeg",
        "http://ww1.sinaimg.cn/mw600/c2ba660dtw1e53cbidiizj20sg0sgtao.jpg"
      ],
      itemsY: [
        "http://img3.a0bi.com/upload/ttq/20150525/1432550622613_middle.jpg",
        "http://img.mp.itc.cn/upload/20170220/2f2a4d0eb018483b97a7093e39b54cf7_th.jpg",
        "http://ww1.sinaimg.cn/mw600/c2ba660dtw1e53cbidiizj20sg0sgtao.jpg",
        "http://pic2.52pk.com/files/140211/1283568_105559_9065.jpg",
      ],
      itemsX: [
        "http://photocdn.sohu.com/20151218/mp49366462_1450443096991_4.jpeg",
        "http://ww1.sinaimg.cn/mw600/c2ba660dtw1e53cbidiizj20sg0sgtao.jpg",
        "http://img.mp.itc.cn/upload/20170220/2f2a4d0eb018483b97a7093e39b54cf7_th.jpg"
      ]
    }
  },
  methods: {
    addImageY() {
      this.itemsY.push(this.stores[Math.floor(Math.random() * this.stores.length)] + "?t=" + Date.now());
    },
    addImageX() {
      this.itemsX.push(this.stores[Math.floor(Math.random() * this.stores.length)] + "?t=" + Date.now())
    },
    randomImage() {
      let newItemsY = [];
      this.itemsY.forEach(() => {
        let i = Math.floor(this.stores.length * Math.random());
        newItemsY.push(this.stores[i]);
      })
      this.itemsY = newItemsY
    }
  }
}).$mount("#App");