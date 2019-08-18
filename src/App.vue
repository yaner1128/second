<template>
  <div id="app">
    <!-- 导航区域 -->
    <Header/>
    
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Common/Header.vue'

export default {
  name: 'App',
  components:{
    Header,
  }
};
</script>

<style scoped>

</style>
