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
.clearfix {
    clear: both;
}
.Fcontainer {
    position: relative;
   /* width: 220px;*/
   width: 100%;
    height: 320px;
    /*text-align: center;*/
}

.Fcontainer img{
    /*width: 220px;*/
     width: 100%;
    height:auto;
}
.Fcontainer>.front {
    position: absolute;
    left: 0;
    top: 0;
}

/*设置滑过翻转，从0-180deg*/
.front {
    transform: rotateY(0deg);
}
.Fcontainer .oneself:hover .front {
    transform: rotateY(180deg);
}

.Fcontainer .front {
    transition: all 2s;
}
.Fcontainer .text{
	width: 100%;
	height: 30px;
    text-align: center;
	/*position: absolute;*/
	/*bottom:0px;
	left: 0;*/
}
</style>
