import VueLazyImage from "./VueLazyImage.vue"
import LazyImage from "./LazyImage"

/**
 *
 * @param vue
 * @param options
 * {
 *     offset:String || Number   // extra distance for preload
 *     events:['scroll','resize'..]  //events which window should listen
 *  }
 */
const install = (vue, options = {}) => {
  vue.component('lazy-image', VueLazyImage);
  options.offset = parseInt(options.offset, 10) || 0;
  let lazyImg = new LazyImage(options);
  vue.prototype.$lazyImages = lazyImg;
}

//default export
export default {
  install,
  VueLazyImage
}
//for cdn
export {
  install,
  VueLazyImage
}