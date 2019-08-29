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
/*手机*/
@media screen and (max-width: 767px){ 
  .mainbody{
    background-color: pink;
  }
  .Fcontainer {
    position: relative;
   width: 100%;
    height: 190px;
}

.Fcontainer img{
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
  width: 113%;
  height: 30px;
    text-align: center;
  margin-left:-3%;
}
 }  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
  .Fcontainer {
    position: relative;
   width: 80%;
    height: 320px;
}
.Fcontainer img{
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

}
}
/*真正的普通pc*/
@media screen and (min-width: 1024px) and (max-width: 1365px){
    .Fcontainer {
    position: relative;
   width: 100%;
    height: 320px;

}
.Fcontainer img{
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

}
}
 /*普通偏大pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
  .mainbody{
    background-color: blue;
  }
  .Fcontainer {
    position: relative;

   width: 100%;
    height: 320px;
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
} 
/*超大pc*/
@media screen and (min-width: 1903px) {
  .mainbody{
    background-color: green;
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
}
.clearfix {
    clear: both;
}

</style>
