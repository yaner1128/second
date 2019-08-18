<template>
	<!-- <div class="ban">
      <my-Banner />
    </div> -->
  <div>
  	<my-Slideshow />
  	<!-- <my-Banner /> -->
   
  <div style="height:1000px;background-color:pink;width:88%;margin:0 auto"></div>
	
	<my-FourthAnimation />
	<my-SixAnimation />

	<div style="height:200px;background-color:pink;width:88%;margin:30px auto"></div>

	<my-SecondNew />

	<div style="height:200px;background-color:pink;width:88%;margin:30px auto"></div>

	<div class="aboutour clearfix container">
		<div class="left clearfix" @mouseenter='enterHandler' @mouseleave='leaveHandler' :class='{fadeInLeft:isActive}'>
			<div class="title">
				<span >ABOUT</span><br>
			关于我们
			</div>
			<div class="aboutdetail">
				<p>株洲简码网络科技有限公司是一家专注于互联网开发的高新技术公司。公司拥有一支国内高端的开发技术团队。
					以消费者需求为设计出发点，以客户利益至上为目的，一直致力于网站开发、微信开发、美工UI设计、云服务等应用。只做最赏心悦目的产品。
					通过多年的努力和积累，已助力各行各业的客户成功进入互联网的大时代。依靠积极的价值观念、先进的技术实力、灵活的合作模式，周到的贴心服务获得了客户和企业的高度赞誉
				</p>
			</div>
			<button>了解更多</button>
		</div>
		<div class="right">
			<div class="aboutimg">
				
				<img class="cimg" src="../../../static/images/home-3-689x469.png">
				<img class="bimg" src="../../../static/images/home-2-508x341.png">
				<img class="aimg" src="../../../static/images/home-1-243x199.png">

			</div>
			

		</div>
	</div>
	<div style="height:200px;background-color:pink;width:88%;margin:30px auto"></div>

</div>

  

</template>

<script>

export default {

  name: 'Home',
  
    
  data() {
    return {
    	
      isActive:false,
      fristImgs:[
    		{id:1,imgSrc:'../../assets/turn1.png',text:'网站/商城系统定制开发'},
    		{id:2,imgSrc:'../../assets/turn2.png',text:'交互H5设计开发'},
    		{id:3,imgSrc:'../../assets/turn3.png',text:'小程序/公众号/Wap设计开发'},
    		{id:4,imgSrc:'../../assets/turn4.png',text:'APP项目定制开发'},
    	]
    };
  },
  methods:{
  	
	enterHandler(){
      this.isActive = ! this.isActive;
    },
    leaveHandler(){
      this.isActive = ! this.isActive;
    }
	
  }
};
</script>

<style lang="css" scoped>
.clearfix::after{
	content: '';
	clear: both;
	display: block;
}
.left{
	float: left;
	background-color:gold;width:400px;height:500px;
	animation: bounceInLeft 2s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
}
@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  100% {
    transform: none;
  }
}
.right{
	height: inherit;

	/*animation: bounceInRight 2s 2 cubic-bezier(0.215, 0.355, 0.610, 1.000);*/
}
@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(1300px, 0, 0);
  }
  75% {
    transform: translate3d(800px, 0, 0);
  }
  90% {
    transform: translate3d(500px, 0, 0);
  }
  100% {
    transform: none;
  }
}
.aboutimg{
	position: relative;
	height: 500px;
}
.aimg{
	position: absolute;
	bottom:0%;
	right: 40%;
	width: 18%;
	animation: bounceInRight 0.6s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
}
.bimg{
	position: absolute;
	bottom:0%;
	right: 18%;
	width: 42%;
	animation: bounceInRight 1.2s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);

}
.cimg{
	position: absolute;
	bottom:0%;
	right: 5%;
	width: 48%;
	animation: bounceInRight 2s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);

}
</style>

