<template>

  <Header />

  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>

  <router-view></router-view>

</template>
<style lang="sass">
  @import '@/assets/base.scss'
</style>

<script>
import Header from '@/components/Header.vue';
import MainCard from '@/components/MainCard.vue';

export default {
  components: {
    MainCard,
    Header,
    
  },
  
}

</script>