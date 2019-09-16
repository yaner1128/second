<template>
  <div id="app">
    <div id="target"></div>   
    <!-- 导航区域 -->
    <div class="head">
      <Header />
    </div>
    <router-view/>
      <Nav />
  </div>

</template>

<script>

import Header from '@/components/Common/Header.vue'
import Nav from '@/components/Common/Nav.vue'

import store from '../src/store/index.js'
export default {
  name: 'App',
  store,
  components:{
    Header,
    Nav,
  }
};
</script>

<style scoped>
/*手机*/
@media screen and (max-width: 360px)and(max-width: 767px){ 
  .app{
   overflow-x: hidden;
  }
  
}


</style>
