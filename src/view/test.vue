<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img src="/static/tim/1.png"></swiper-slide>
      <swiper-slide><img src="/static/tim/2.png"></swiper-slide>
      <swiper-slide><img src="/static/tim/3.png"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
   swiper, 
   swiperSlide
  },
  data () {
    return {
      swiperOption:{
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 10,
        loop:true,
        speed:600, //config参数同swiper4,与官网一致
      }
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
.wrapper_bs {
  position:absolute;
  top: 47px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
}
</style>
