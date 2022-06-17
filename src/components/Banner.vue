<template>
    <div class="rounded-xl w-full sm:w-1/2 max-w-[420px] min-h-[282px] pt-[48px] pb-[32px] px-[32px] bg-[#F4F8EC] bg-cover bg-no-repeat"
        style="background:url('./src/assets/img/card-bg.png')">
        <p class="font-semibold mb-2 text-[#6A983C] text-[12px] leading-[18px] font-['Poppins']">Banner
            subfocus
        </p>
        <h4 class="font-['Poppins'] font-semibold text-[22px] leading-[33px] mb-[92px]">Space for heading
        </h4>
        <button class="btn-animate btn-xl btn-border">Read recipes <img :src="chevron_right"
                alt="chevron right"></button>
    </div>
</template>
<style lang="scss" scoped>
</style>
<script setup>
import { ref } from "@vue/reactivity";

const chevron_right =  ref('/src/assets/img/chevron-right.svg')
</script>