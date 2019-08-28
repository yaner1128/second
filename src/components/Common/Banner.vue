<template>
	<div class="outbanner">
		<div class='allimg' >
			<!-- <img src="../../../static/images/about.jpg" class='bannerimg'>			 -->
		</div>
		<div class="bannerbottom">
			<transition name="fade">
				<div class="bannercode" v-show='show' @mouseenter='enterHandler' @mouseleave='leaveHandler'>
					<span>诚信为本，客户至上</span>
				<p>Integrity-based, Customer first</p>
				</div>	
			</transition>
		</div>
	</div>
	
	
</template>

<script>
export default {

  name: 'Banner',

  data() {
    return {
    	show:true
    };
  },
  methods:{
  	enterHandler(){
      this.show = ! this.show;
    },
    leaveHandler(){
      this.show = ! this.show;
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
/*手机*/
@media screen and (max-width: 767px){ 
  
  .outbanner{
	position: relative;
}
.allimg{
	position: relative;
	z-index:-0.5;
	background-image: url(../../../static/images/about.jpg);
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
    /*background-position: center;*/
	width: 100%;
    
	height: 220px;
}
.bannerimg{
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	position: absolute;
	top:0;
	left: 0;
	width: 100%;

}
.bannerbottom{
	position: absolute;
	height: 90%;
	width: 100%;
	top:0;
	
}
.bannercode{
	position: absolute;
	z-index: 0;
	width: 50%;
	margin:0 auto;
	bottom: 17%;
    left: 35%;
    color: #fff;
    font-size: 18px;
}
 }  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1365px){ 
  
  .outbanner{
	position: relative;
}
.allimg{
	position: relative;
	z-index:-0.5;
	background-image: url(../../../static/images/about.jpg);
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	width: 100%;    
	height: 330px;
}
.bannerimg{
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	position: absolute;
	top:0;
	left: 0;
	width: 100%;
}
.bannerbottom{
	position: absolute;
	height: 90%;
	width: 100%;
	top:0;
	
}
.bannercode{
	position: absolute;
	z-index: 0;
	width: 50%;
	margin:0 auto;
	bottom:20%;
	left:35%;
	color:#fff;
    font-size:26px;
}

}
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
 
  .outbanner{
	position: relative;
}
.allimg{
	position: relative;

	z-index:-0.5;
	background-image: url(../../../static/images/about.jpg);
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
    /*background-position: center;*/
	width: 100%;
    
	height: 400px;
}
.bannerimg{
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	position: absolute;
	top:0;
	left: 0;
	width: 100%;

}
.bannerbottom{
	position: absolute;
	height: 90%;
	width: 100%;
	top:0;
	
}
.bannercode{
	position: absolute;
	z-index: 0;
	width: 50%;
	margin:0 auto;
	bottom:20%;
	left:35%;

	color:#fff;
    font-size:30px;
}
.fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-in .5s reverse;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
} 
/*超大pc*/
@media screen and (min-width: 1903px) {

  .outbanner{
	position: relative;
}
.allimg{
	position: relative;

	z-index:-0.5;
	background-image: url(../../../static/images/about.jpg);
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
    /*background-position: center;*/
	width: 100%;
    
	height: 400px;
}
.bannerimg{
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	position: absolute;
	top:0;
	left: 0;
	width: 100%;

}
.bannerbottom{
	position: absolute;
	height: 90%;
	width: 100%;
	top:0;
	
}
.bannercode{
	position: absolute;
	z-index: 0;
	width: 50%;
	margin:0 auto;
	bottom:20%;
	left:35%;

	color:#fff;
    font-size:30px;
}
.fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-in .5s reverse;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
}



</style>
