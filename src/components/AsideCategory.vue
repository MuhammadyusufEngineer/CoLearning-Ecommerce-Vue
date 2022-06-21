<template>
<div class="aside-links mb-12">
    <h4 class="aside-links__title">Categories</h4>
    <div class="aside-links__item-nolink" v-for="index in 4" :key="index">
        <a href="#" class="no-underline">Category name</a>
        <p class="tag tag-selected"><slot name="aside-count">320</slot></p>
    </div>
</div>
</template>
<script>
export default {
    name: 'AsideCategory'
}
</script>