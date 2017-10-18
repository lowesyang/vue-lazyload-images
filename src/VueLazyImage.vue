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
        imgClassMutable: this.imgClass,
        show: false
      }
    },
    computed: {
      _class() {
        if (this.show) {
            if(this.imgClassMutable instanceof Array) {
                this.imgClassMutable.push('show');
            }
            else this.imgClassMutable += ' show';
        }
        return this.imgClassMutable;
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