<template>
    <div class="w-full mb-[37px] flex flex-row items-center justify-between">
        <h3 class="font-['Poppins'] font-semibold text-[18px] leading-[27px]"><slot name="title">Read our blog posts</slot></h3>
        <button class="btn-sm bg-none btn-animate"> <slot name="btn">Go to Blog</slot> <img src="@/assets/img/chevron-black.svg"
                alt="chevron"></button>
    </div>
</template>
<script>
export default {
    name: 'GoTo'
}
</script>