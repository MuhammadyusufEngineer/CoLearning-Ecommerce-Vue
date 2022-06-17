<template>
    <footer class="footer py-16">
        <div class="main-container md:flex-row items-stretch justify-between mb-12">
            <div class="footer-links w-full flex flex-row justify-around flex-wrap md:flex-nowrap" v-for="wrappers in FooterMenuItems" :key="wrappers.id">
                <div class="mr-5 mb-5" v-for="item in wrappers.wrapper" :key="item.id">
                    <h4 class="footer__title">{{ item.title }}</h4>
                    <div class="footer__anchor-wrapper">
                        <a href="#" class="footer__anchor" v-for="link in item.links" :key="link.id">{{ link.title }}</a>
                    </div>
                </div>

            </div>
        </div>
        <div class="main-container flex-col items-start mb-8">
            <h4 class="font-['Poppins'] font-semibold text-[18px] leading-[27px] mb-4">Product tags</h4>
            <div class="flex flex-wrap gap-4">
                <div class="tag tag-not-selected" @click="toggle" v-for="tag in Tags" :key="tag.id">{{ tag.text }}</div>
            </div>
        </div>
        <div class="main-container items-start">
            <p class="font-normal text-[14px] leading-[19px]">Copyright &copy; 2020 UIC.group</p>
        </div>
    </footer>
</template>
<style scoped>
.tag.selected {
    background: #e6e5e5;
}
</style>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            FooterMenuItems: [
                {
                    id: 1, wrapper: [
                        {
                            id: 1,
                            title: 'Get in touch',
                            links: [
                                { id: 1, title: 'About us' },
                                { id: 2, title: 'Careers' },
                                { id: 3, title: 'Press releases' },
                                { id: 4, title: 'Blog' },
                            ]
                        },
                        {
                            id: 2,
                            title: 'Connections',
                            links: [
                                { id: 1, title: 'Facebook' },
                                { id: 2, title: 'Twitter' },
                                { id: 3, title: 'Instagram' },
                                { id: 4, title: 'YoutTube' },
                                { id: 5, title: 'LinkedIn' },
                            ]
                        },
                    ]
                },
                {
                    id: 2, wrapper: [
                        {   id: 3, 
                    title: 'Earnings', 
                    links: [
                        { id: 1, title:'Become an Affilate' },
                        { id: 2, title:'Advertise your product' },
                        { id: 3, title:'Sell on market' },
                    ]
                },
                {   id: 4, 
                    title: 'Accout', 
                    links: [
                        { id: 1, title:'Your account' },
                        { id: 2, title:'Returns center' },
                        { id: 3, title:'100% purchase protection' },
                        { id: 4, title:'Chat with us' },
                        { id: 5, title:'Help' },
                    ]
                },
                    ]
                }
            ],
            Tags: [
                { id: '1', text: 'Beans' },
                { id: '2', text: 'Carrots' },
                { id: '3', text: 'Apples' },
                { id: '4', text: 'Garlic' },
                { id: '5', text: 'Mushrooms' },
                { id: '6', text: 'Tomatoes' },
                { id: '7', text: 'Chillie peppers' },
                { id: '8', text: 'Broccoli' },
                { id: '9', text: 'Watermelons' },
                { id: '10', text: 'Oranges' },
                { id: '11', text: 'Bananas' },
                { id: '12', text: 'Grapes' },
                { id: '13', text: 'Cherries' },
                { id: '14', text: 'Meat' },
                { id: '15', text: 'Seo tag' },
                { id: '16', text: 'Fresh food' },
                { id: '17', text: 'Lemons' },
            ],
        }
    },
    methods: {
        toggle(e) {
            e.target.classList.toggle("tag-selected");
        },
    }
}
</script>