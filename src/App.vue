<template>
  <div id="app">   
    <!-- 导航区域 -->
    <div class="head">
      <Header />
    </div>
    
    <router-view/>
    
  </div>

</template>

<script>

import Header from '@/components/Common/Header.vue'

import store from '../src/store/index.js'
export default {
  name: 'App',
  store,
  components:{
    Header,
  }
};
</script>

<style scoped>


</style>
