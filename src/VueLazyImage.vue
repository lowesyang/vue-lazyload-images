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
        if (this.show) {
            if(this.imgClass instanceof Array) {
                this.imgClass.push('show');
            }
            else this.imgClass += ' show';
        }
        return this.imgClass;
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