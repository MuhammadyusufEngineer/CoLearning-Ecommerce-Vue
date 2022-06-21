<template>
    <section class="pt-10 md:pt-16">
        <div class="home-container">
            <aside-link class=w-1/4>
                <template #title> Category menu </template>
            </aside-link>
            <div class="w-full md:w-3/4 flex flex-wrap sm:flex-nowrap flex-row justify-evenly gap-8">
                <Banner />
                <Banner />
            </div>
        </div>
    </section>
    <section>
        <div class="home-container">
            <aside-link class="w-1/4">
                <template #title>Best selling products</template>
            </aside-link>
            <div class="w-full md:w-3/4">
                <MainCard :items="3"/>
            </div>
        </div>
    </section>
    <section>
        <div class="home-container">
            <aside-link class="w-1/4">
                <template #title>Best from farmers</template>
            </aside-link>
            <div class="w-full md:w-3/4">
                <MainCard :items="3"/>
            </div>
        </div>
    </section>
    <section>
            <div class="home-container">
                <Testimonials />
            </div>
    </section>
    <section>
        <div class="main-container flex-col">
            <GoTo #title="Section, headline" #btn="Button" />
            <MainCard :items="4"/>
        </div>
    </section>
     <section>
        <div class="main-container flex-col">
            <GoTo #title="Read, our, blogs" #btn="Go, to, Blog" />
            <div class="flex items-start justify-center gap-8 flex-wrap w-full">
                <div class="w-[469px]">
                    <div class="relative hover:bg-right-top h-[400px] rounded-[12px] overflow-hidden cursor-pointer duration-300 bg-center bg-cover blog-image">
                        <div class="tag tag-selected absolute top-6 left-6 z-30">Dinner tips</div>
                        <div class="img-dark-layer">
                        </div>
                        <div class="absolute bottom-6 left-6 right-6 z-30">
                            <h4 class="font-['Poppins'] font-semibold text-[22px] leading-[33px] text-white mb-2">Our chef tips for a great tasty dinner ready in 20 minutes
                            </h4>
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full mr-2">
                                    <img src="@/assets/img/user-1.png" alt="user avatar">
                                </div>
                                <p class="author-date text-white">
                                    <span class="mr-4s">Author</span>
                                    <span>15. 6. 2022</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" class="blog-wrapper">
                    <div class="blog__imgBox">
                        <img src="@/assets/img/food-2.png" alt="food">
                    </div>
                    <div class="blog__tag tag tag-selected">Vegetable</div>
                    <h4 class="blog__title">Which vegetable your family will love and want’s eat each day</h4>
                    <p class="author-date">
                        <span class="mr-4s">Author</span>
                        <span>15. 6. 2022</span>
                    </p>
                </a>
                <div class="blog-blocks flex flex-col gap-8">
                    <BlogBlock v-for="index in 3" :key="index" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import AsideLink from '@/components/AsideLinks.vue'
import Banner from '@/components/Banner.vue'
import MainCard from '@/components/MainCard.vue'
import Testimonials from '@/components/Testimonials.vue'
import BlogBlock from '@/components/BlogBlock.vue'
import GoTo from '@/components/GoTo.vue'
import food_1 from '/src/assets/img/food-1.png'


export default {
    name: 'Home',
    components: {
        AsideLink,
        Banner,
        MainCard,
        Testimonials,
        BlogBlock,
        GoTo,
    },
    data(){
        return {
            food_1
        }
    },
    props: {
        items: {
            type: Number,
            default: ''
        }
    }
}
</script>