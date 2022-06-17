<template>
    <swiper class="prodSwiper" 
        :modules="modules"
        :freeMode="true" :breakpoints="{
            0: {
                slidesPerView: 1
            },
            470: {
                slidesPerView: 1.5
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1.5,
            },
            850: {
                slidesPerView: 1.7
            },
            1000: {
                slidesPerView: 2,
            },
            1150: {
                slidesPerView: 2.5
            },
            1260: {
                slidesPerView: 3
            }
        }">
        <swiper-slide v-for="index in items" :key="index">
            <div class="w-[269px] h-[323px] p-4 rounded-xl border border-solid border-[#d1d1d1]">
                <div class="relative h-[180px] rounded-xl bg-[#f9f9f9] mb-4">
                    <!-- .absolute top-3 left-[20px] text-[#6A983C] font-semibold text-[12px] leading-[18px] font-['Poppins'] z-30 -->
                </div>
                <p class="text-[15px] text-start font-medium leading-[22.5px] font-['Poppins']">Product title</p>
                <p class="text-[12px] text-start font-normal leading-[16px] text-[#575757] mb-4">Space for small product description</p>
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[18px] font-semibold font-['Poppins'] leading-[27px]">1.48 USD</p>
                        <!-- text-[12px] text-[#A9A9A9] font-['Poppins'] font-semibold leading-[18px] line-through     -->
                    </div>
                    <button class="btn-sm btn-buy btn-success btn-animate">Buy now</button>
                </div>

            </div>
        </swiper-slide>
    </swiper>
</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";

export default {
    name: 'MainCard',
    components: {
        Swiper,
        SwiperSlide,
    },
    props:{
        items:{
            type: String, 
            default: ''
        }
    },
    setup() {
        return {
            modules: [FreeMode]
        };
    },
}
</script>