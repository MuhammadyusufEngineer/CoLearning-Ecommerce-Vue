<template>
    <Header />

    <router-view></router-view>

    <Footer />

</template>
<style lang="scss">
@import '@/assets/base.scss';

</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
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
}

</script>