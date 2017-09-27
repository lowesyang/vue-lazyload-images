<template>
  <div>
    <img
        ref="target"
        :class="imgClass"
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
      imgClass() {
        if (this.show) this.classes.push('show')
        return this.classes
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
      classes: {
        type: Array,
        default: []
      }
    }
  }
</script>