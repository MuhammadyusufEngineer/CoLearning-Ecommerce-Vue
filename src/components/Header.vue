<template>
    <header>
        <!-- Responsive menu -->
        <div
            class="flex md:hidden w-full min-h-screen fixed top-0 left-[-100%] justify-center items-center bg-white z-50 duration-300 mobile-menu">
            <div class="flex flex-col min-h-full">
                <div class="flex flex-col items-center gap-[33px]">
                    <a :class="item.class" :to="item.href" v-for="item in MobileAnchors" :key="item.id"> {{ item.text
                    }}</a>
                </div>
            </div>
        </div>
        <!-- responsive nav -->
        <div
            class="w-full flex flex-row items-center justify-between fixed top-0 left-0 bg-white z-50 px-5 md:hidden shadow-lg">
            <div class="logo mr-2">
                <router-link to="/">
                    <img src="../assets/img/Brand.svg" alt="brand logo">
                </router-link>
            </div>
            <div class="mobile-burger relative z-50 right-0 w-5 h-5 bg-cover bg-no-repeat bg-center" @click="toggle">
            </div>
        </div>
        <!-- Nav -->
        <div class="main-container hidden md:flex flex-row items-center py-4">
            <div class="flex items-center gap-[33px]">
                <router-link to="/chat" class="text-green">Chat with us</router-link>
                <a href="tel:998330072003">+998 33 007 2003</a>
                <a href="mailto:mrimofficial7@gmail.com">mrimofficial7@gmail.com</a>
            </div>
            <div class="flex items-center gap-[33px]">
                <router-link to="/blog" class="text-green">Blog</router-link>
                <router-link to="/products" class="text-green">About us</router-link>
                <router-link to="/careers" class="text-green">Careers</router-link>
            </div>
        </div>
        <!-- Divider -->
        <div class="w-[90%] max-w-[1260px] mx-auto">
            <hr class="bg-[#151515]">
        </div>
        <!-- Header Content started -->
        <div class="main-container flex-row items-center pt-20 md:pt-10 pb-12">
            <div class="logo mr-5 hidden md:block">
                <router-link to="/">
                    <img src="@/assets/img/Brand.svg" alt="logo brand">
                </router-link>
            </div>
            <div
                class="flex items-center justify-between rounded-[12px] max-w-[500px] w-full sm:w-[500px] border border-solid border-[#d1d1d1] bg-[#f9f9f9] mx-auto py-[10px] px-4">

                <CustomSelect />
                <div class="w-[1px] h-5 bg-[#D1D1D1] hidden lg:block"></div>
                <div class="w-full">
                    <input type="text"
                        class="w-full border-none outline-none px-3 text-[14px] bg-transparent placeholder:text-[#a9a9a9] placeholder:text-[14px]"
                        placeholder="Search Products, categories">
                </div>
                <div class="flex items-center min-w-[16px] w-4 h-4">
                    <img src="@/assets/img/icon-search.svg" alt="search icon">
                </div>
            </div>
            <div
                class="fixed sm:relative bottom-0 left-0 w-full h-14 sm:py-0 bg-white flex items-center justify-around sm:justify-between sm:w-[88px] ml-0 sm:ml-5 z-40">
                <div>
                    <img src="@/assets/img/icon-user.svg" alt="user icon">
                </div>
                <div class="relative cart-wrapper">
                    <img src="@/assets/img/icon-cart.svg" alt="cart icon">
                    <div
                        class="absolute -bottom-[8px] -left-[5px] w-4 h-4 rounded-full flex items-center justify-center bg-[#E5704B]">
                        <span class="text-white text-[12px] font-semibold">4</span>
                    </div>
                </div>
            </div>
        </div>
        <nav class="bg-[#f9f9f9] py-4">
            <div class="main-container flex-row items-center justify-start gap-[42px]">
                <CustomSelect v-for="n in 7" :key="n.index" />

                <swiper class="navSwiper block lg:hidden"
                :free-mode="true"
                :space-between="32" 
                :breakpoints="{
                     0: {
                    slidesPerView: 2
                    },
                    320: {
                    slidesPerView:2.5
                    },
                    420: {
                    slidesPerView: 4
                    },
                    640: {
                    slidesPerView: 4.5,
                    },
                    768: {
                    slidesPerView: 5,
                    },
                }
                ">
                    <swiper-slide v-for="item in navSwiper" :key="item.id">
                        <router-link to="/">
                            <div class="overflow-hidden w-20 h-20 rounded-3xl">
                                <img :src="`./src/assets/img/${item.img}`" :alt="item.title">
                            </div>
                            <p
                                class="text-[12px] w-20 text-center overflow-hidden text-ellipsis whitespace-nowrap mt-1">
                                {{ item.title }}
                            </p>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </nav>
    </header>
</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";


// import required modules
import { FreeMode } from "swiper";
import CustomSelect from '@/components/CustomSelect.vue'
export default {
    name: 'Header',
    components: {
        CustomSelect,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            anchors: [
                {
                    id: 1, items: [
                        { id: 1, router: true, href: '/chat', text: 'Chat with us', class: 'text-green' },
                        ]
                },
                {
                    id: 2, items: [
                        { id: 1, router: true, href: '/Blog', text: 'Blog', class: 'text-green' },
                        { id: 2, router: true, href: '/Products', text: 'About us', class: 'text-green' },
                        { id: 3, router: true, href: '/Careers', text: 'Careers', class: 'text-green' }]
                }
            ],
            MobileAnchors: [
                { id: 1, href: '#', text: 'Blog', class: 'text-green' },
                { id: 2, href: '#', text: 'About us', class: 'text-green' },
                { id: 3, href: '#', text: 'Careers', class: 'text-green' },
                { id: 4, href: '#', text: 'Chat with us', class: 'text-green' },
            ],
            options: [
                { id: 0, text: "All categories" },
                { id: 1, text: "Bakery" },
                { id: 2, text: "Fruit" },
                { id: 3, text: "Vegetables" },
                { id: 4, text: "Meat" },
                { id: 5, text: "Drinks" },
                { id: 6, text: "Kitchen" },
                { id: 7, text: "Nutrition" },
                { id: 8, text: "Baby" },
                { id: 9, text: "Pharmacy" },
            ],
            navSwiper: [
                { id: 1, title: 'Bread', img: 'bread.jpg' },
                { id: 2, title: 'Fruit', img: 'fruit.jpg' },
                { id: 3, title: 'Vegetables', img: 'vegetable.jpg' },
                { id: 4, title: 'Fish and Meat', img: 'meat.jpg' },
                { id: 5, title: 'Drinks', img: 'drink.jpg' },
                { id: 6, title: 'Kitchen', img: 'kitchen.jpg' },
                { id: 7, title: 'Baby nutrition', img: 'baby.jpg' },
                { id: 8, title: 'Pharmacy', img: 'pharmacy.jpg' },
            ],
        }
    },
    methods: {
        toggle(e) {
            e.target.classList.toggle('active')
            document.querySelector('.mobile-menu').classList.toggle('active')
        }
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
<style scoped>
img {
    cursor: pointer;
}
a {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}
.swiper-slide {
    background: none;
}
.mobile-burger {
    background-image: url("./src/assets/img/burger.svg");
}
.mobile-burger.active {
    background-image: url("./src/assets/img/close-burger.svg");
}
.mobile-menu.active {
    left: 0 !important;
}
</style>
