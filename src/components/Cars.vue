<template>
  <div class="cars-list">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><CarItem height="530px"/></swiper-slide>
      <swiper-slide><CarItem /></swiper-slide>
      <swiper-slide><CarItem /></swiper-slide>
     <swiper-slide><CarItem /></swiper-slide>
      <swiper-slide><CarItem /></swiper-slide>
       <swiper-slide><CarItem /></swiper-slide>
      <swiper-slide><CarItem /></swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <span class="cars-title" @click="user">This is the Cars Data</span>
  </div>
</template>

<script>
import CarItem from "./CarItem.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Cars",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  methods: {
    user() {
      this.$router.push("/user");
    },
  },

  components: {
    CarItem,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.cars-list {
  position: fixed;
  z-index: 12;
  bottom: 170px;
  left: 0;
  right: 0;
  width: 100%;
}
.swiper {
  margin-left: 50px;
  margin-right: 50px;
}
.swipper-container {
  overflow: initial;
}
</style>
