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
            if(this.imgClass instanceof Array) {
                className = this.imgClass.concat(['show']);
            }
            else className = this.imgClass + ' show';
        }
        return className;
      }
    },
    mounted() {
      this.$lazyImages.addImage(this.$refs.target);
      this.$refs.target.onload = () => {
        this.show = true;
      };
      this.$lazyImages.loadImage();
    },
    beforeDestroy() {
      this.$lazyImages.removeImage(this.$refs.target);
    },
    props: {
      src: {
        type: String,
        required: true
      },
      placeholder: String,
      imgClass: {
        type: [Array,String],
        default: ''
      }
    }
  }
</script>