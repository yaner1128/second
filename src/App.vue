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
import Header from '@/components/Common/Header'
export default {
  name: 'App',
   components:{
    Header
  }
};
</script>

<style>
/*#app{
  position: relative;
}*/


</style>
