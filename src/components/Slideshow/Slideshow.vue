<template>
	 <div class="slideshow">
	<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
	<el-carousel indicator-position="none">
		
    <el-carousel-item v-for="(item,index) in lunboImgs" :key="item.id">
    <div class="carousel-explain">
      <img :src="item.imgSrc" alt="">
		<div class="">
			<div class="italictext">
            	<p class="textp2"><span class="myAnimate bounceInDown delay0s">{{item.txt}}</span></p>
            	<p class="textp" v-html="item.txt2"></p>
            	<img src="../../../static/images/mouse.png" style="width:41px;position:absolute;left:48%;top:55%">
       		 </div>
		</div>
		
    </div>

    </el-carousel-item>
	
  </el-carousel>
  
  </div>
</template>

<script>
export default {

  name: 'Slidesshow',

  data() {
    return {
    	lunboImgs:[
        {
          id:1,
          imgSrc:'../../../static/images/cover-one.jpg',
          txt: '质监部门',
          txt2:
            '降低专业门槛，清晰掌握电梯运行数据'
            

        },
         {
          id:2,
          imgSrc:'../../../static/images/cover-two.jpg',
          src: '/images/company/v2/解决方案01-1_06.jpg',
          txt: '物业部门',
          txt2:
            '降低专业门槛，清晰掌握电梯运行数据'
         },
           {
            id:3,
            imgSrc:'../../../static/images/cover-three.jpg',
            txt: '生产厂家',
         	txt2:
            '降低专业门槛，清晰掌握电梯运行数据'
           
          }
      ]
    };
  },
};
</script>

<style lang="css" scoped>
.slideshow{
	position: relative;

	z-index: 0;
	/*background-image: url(../../../static/images/banner.jpg);*/
	
    /*background-position: center;*/
    
	height: 700px;
}
.el-carousel{
	position: absolute;
	width: 100%;
	height: 700px;
	 background-position: center;
}
.el-carousel__container {
    position: absolute;
    /*height: 1000px !important;*/
}

.el-carousel-item img{
	position: absolute;
	top:0;

	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	width: 100%;
}
.el-carousel__container {
    position: absolute;
    /*height: 980px;*/
}

.italictext{
	position: absolute;
	z-index: 33;
	top:0;
	left:0;
	/*margin-top: 350px;*/
	float: left;
	width: 100%;
	height: 100%;
	margin:0 auto;
	color:#fff;
   
    background-color:rgba(0,0,0,.3);
    text-align: center;
}
.italictext .textp2{
	position: absolute;
	top:38%;
	left:44%;
    text-align: center;
    font-weight: 700;
    font-size:38px;

}
.italictext .textp{
	position: absolute;
	top:46%;
	left:39.5%;
    text-align: center;
	font-size:16px ;

}
.myAnimate{
	animation-duration: 2s;
	animation-delay: .5s;
	animation-iteration-count:2; 
	
	/*animation-name:mymove;*/
}
</style>
