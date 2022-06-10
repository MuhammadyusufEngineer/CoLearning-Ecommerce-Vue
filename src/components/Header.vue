<template>
    <header class="main-container">
        <div class="w-full flex items-center justify-between py-4">
            <div class="flex items-center gap-[33px]">
                <a :class="item.class" :href="item.href" v-for="item in anchor1" :key="item.id">{{ item.text }}</a>
            </div>
            <div class="flex items-center gap-[33px]">
                <a :class="item.class" :href="item.href" v-for="item in anchor2" :key="item.id">{{ item.text }}</a>
            </div>
        </div>
        <hr class="w-full bg-[#151515] opacity-[0.05]">
        <div class="w-full flex items center justify-between">
            <div>
                <img src="@/assets/img/bread.jpg" alt="bread">
            </div>
        </div>
    </header>
</template>
<style scoped>
a {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}
</style>
<script>
export default {
    name: 'Header',
    data() {
        return {
            anchor1: [
                { id:1, href: '#', text: 'Chat with us', class: 'text-green'},
                { id:2, href: 'tel:998330072003', text: '+998 33 007 20 03'},
                { id:3, href: 'mailto:mrimofficial7@gmail.com', text: 'mrimofficial7@gmail.com'},
            ],
            anchor2: [
                { id:1, href: '#', text: 'Blog', class: 'text-green'},
                { id:2, href: '#', text: 'About us', class: 'text-green'},
                { id:3, href: '#', text: 'Careers', class: 'text-green'},
            ]
        }
    }
}
</script>