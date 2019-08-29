<template>
    
      <div class="Fcontainer">
        <div class="oneself">
            <div class="front">
                <img :src="fristImg.imgSrc" alt="">
            </div>
            <div class="clearfix"></div>
            <div class="text" :style="{color:fristImg.textcolor}">{{fristImg.text}}</div>
        </div>       
      </div>  
   	
</template>

<script>
export default {

  name: 'FristAnimation',
    props:["fristImg"],
  data() {
    return {
    	
    };
  },
};
</script>

<style lang="css" scoped>

</style>
