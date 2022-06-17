<template>
  <!-- <Loader v-if="!loading" /> -->
  <!-- <template v-else> -->
    <Header />

    <router-view></router-view>

    <Footer />
  <!-- </template> -->

</template>
<style lang="scss">
@import '@/assets/base.scss';

</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";


// import required modules
import { FreeMode } from "swiper";

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import Loader from '@/components/Loader.vue';

export default {
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
    // Loader
  },
  setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [FreeMode]
        };
    },
  // mounted() {
  //   setTimeout(() => {
  //     this.loading = true
  //   }, 7000)

  // }

}

</script>