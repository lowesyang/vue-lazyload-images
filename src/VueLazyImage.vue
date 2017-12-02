<template>
  <div>
    <img
        ref="target"
        :class="_class"
        :data-src="src"
        :src="placeholder"
        width="100%"
        height="100%"
    >
  </div>
</template>

<script>
  import {debounce} from './utils';

  export default {
    data() {
      return {
        show: false
      }
    },
    computed: {
      _class() {
        let className;
        if (this.show) {
          if (this.imgClass instanceof Array) {
            className = this.imgClass.concat(['show']);
          }
          else className = this.imgClass + ' show';
        }
        else {
          className = ""
        }
        return className;
      }
    },
    mounted() {
      this.init();
    },
    beforeDestroy() {
      this.$lazyImages.removeImage(this.$refs.target);
    },
    watch: {
      'src': function (val, oldVal) {
        if (val !== oldVal) {
          this.show = false;
          this.$refs.target.onload = () => {
            this.init();
          };
          this.$refs.target.src = this.placeholder;
        }
      }
    },
    props: {
      src: {
        type: String,
        required: true
      },
      placeholder: String,
      imgClass: {
        type: [Array, String],
        default: ''
      }
    },
    methods: {
      init() {
        this.$lazyImages.addImage(this.$refs.target);
        this.$refs.target.onload = () => {
          this.show = true;
          this.$refs.target.onload = null
        };
        let loadImage = debounce(this.$lazyImages.loadImage, 100).bind(this.$lazyImages);
        loadImage()
      }
    }
  }
</script>