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
                <MainCard :items="'3'"/>
            </div>
        </div>
    </section>
    <section>
        <div class="home-container">
            <aside-link class="w-1/4">
                <template #title>Best from farmers</template>
            </aside-link>
            <div class="w-full md:w-3/4">
                <MainCard :items="'3'"/>
            </div>
        </div>
    </section>
    <section>
            <div class="home-container">
                <Testimonials />
            </div>
    </section>
    <section>
            <MainCard :items="'4'"/>
    </section>
</template>
<script>
import AsideLink from '@/components/AsideLinks.vue'
import Banner from '@/components/Banner.vue'
import MainCard from '@/components/MainCard.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
    name: 'Home',
    components: {
        AsideLink,
        Banner,
        MainCard,
        Testimonials,
    },
    props: {
        items: {
            type: String,
            default: ''
        }
    }
}
</script>