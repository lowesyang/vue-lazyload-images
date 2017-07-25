<template>
    <div>
        <img ref="target" :class="{'show':show}" :data-src="src" width="100%" height="100%">
    </div>
</template>

<style scoped>
    img{
        opacity:0;
        -webkit-transition: opacity 0.4s;
        -moz-transition: opacity 0.4s;
        -ms-transition: opacity 0.4s;
        -o-transition: opacity 0.4s;
        transition: opacity 0.4s;
    }
    .show{
        opacity:1;
    }
</style>

<script>
    export default{
        data(){
            return {
                show:false
            }
        },
        mounted(){
            this.$lazyImages.addImage(this.$refs.target);
            this.$refs.target.onload=()=>{
                this.show=true;
            };
            this.$lazyImages.loadImage();
        },
        beforeDestroy(){
            this.$lazyImages.removeImage(this.$refs.target);
        },
        props:{
            src:{
                type:String,
                required:true
            }
        }
    }
</script>