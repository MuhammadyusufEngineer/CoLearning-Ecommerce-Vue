<template>
    <div class="w-full flex flex-col relative">
        <div class="w-full flex items-center justify-between">
            <h3 class="font-['Poppins'] font-semibold text-[18px] leading-[27px]">Our customers says</h3>
            <button class="btn-sm bg-none btn-animate">Button <img :src="chevron_black" alt="chevron"></button>
        </div>

        <swiper :freeMode="true" :navigation="{ nextEl: '.next', prevEl: '.prev' }" :modules="modules"
            class="mySwiper" :breakpoints="{
                0: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 1.5,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }">
            <div class="cursor-pointer absolute z-40 left-0 top-1/2 -translate-y-[40%]  w-[88px] h-[227px] bg-gradient-to-r from-white">
                <div
                    class="nav-indicator prev absolute flex items-center justify-center top-1/2 -translate-y-[40%] left-0 w-8 h-12 bg-black rounded-tr-[12px] rounded-br-[12px]">
                    <img :src="chevron_white" alt="chevron">
                </div>
            </div>
            <div class="cursor-pointer absolute z-40 right-0 top-1/2 -translate-y-[40%] w-[88px]  h-[227px] bg-gradient-to-r from-transparent to-white">
                <div
                    class="nav-indicator next absolute flex items-center justify-center top-1/2 -translate-y-[40%] right-0 w-8 h-12 bg-black rounded-tl-[12px] rounded-bl-[12px]">
                    <img class="rotate-180" :src="chevron_white" alt="chevron">
                </div>
            </div>
            <swiper-slide class="cursor-grab active:cursor-grabbing" v-for="index in 10" :key="index">
                <div class="testimonial">
                    <div class="testimonial__text">“ This is an super space for your customers qoute. Don’t
                        worry it
                        works smooth as pie. You will get all what you need by writiing a text here “</div>
                    <div class="testimonial__name">Name and Surname</div>
                    <div class="testimonial__avatar">
                        <img :src="user" alt="user avatar">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Navigation } from "swiper";
const user = './src/assets/img/user-1.png'
const chevron_black = './src/assets/img/chevron-black.svg'
const chevron_white = './src/assets/img/chevron-white.svg'
export default {
    name: 'Testimonials',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            user,
            chevron_black,
            chevron_white,
        }
    },
    setup() {
        return {
            modules: [FreeMode, Navigation],
        };
    }
};
</script>