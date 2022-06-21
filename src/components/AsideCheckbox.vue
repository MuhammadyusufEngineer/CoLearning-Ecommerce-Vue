<template>
<div class="aside-links mb-12">
    <h4 class="aside-links__title">Brands</h4>
    <div class="flex flex-col gap-3">
        <div class="filter-text flex items-center gap-2" v-for="index in 5" :key="index">
            <input type="checkbox" :id="brand + '_' + index" name="todo" value="todo">
            <label :for="brand + '_' + index">Filter by brand item</label>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'AsideCheckbox',
    data() {
        return {
            brand: 'brand'
        }
    }
}
</script>