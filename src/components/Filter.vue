<template>
    <div class="flex flex-row items-center gap-2 py-[10px] px-4 filter-text">
        <input type="checkbox" :id="name" :name="name" :value="name">
        <label :for="name">Filter</label>
        <div class="rounded-[12px] border border-solid border-[#ebebeb] px-2">
            <p class="font-['Poppins'] font-bold text-[12px] leading-[18px]">Nbm</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Filter',
    props: {
        name: String,
    }
}
</script>