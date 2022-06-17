<template>
    <div class="hidden md:block aside-links w-[269px]">
        <h5 class="aside-links__title"> <slot name="title">Category menu</slot></h5>
        <div class="aside-links__links">
            <router-link to="/" class="aside-links__item" v-for="link in links" :key="link.id"> {{ link.title }}</router-link>
        </div>
        <button class="btn-xl btn-gray btn-animate">
            More categories 
            <img src="@/assets/img/chevron-black.svg" alt="chevron right">
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {id: 1, title: 'Bakery'},
                {id: 2, title: 'Fruit and vegetables'},
                {id: 3, title: 'Meat and Fish'},
                {id: 4, title: 'Drinks'},
                {id: 5, title: 'Kitchen'},
            ]
        }
    }
}
</script>