<template>
	<div class="outbanner">
		<div class='allimg' >
			<!-- <img src="../../../static/images/about.jpg" class='bannerimg'>			 -->
		</div>
		<div class="bannerbottom">
			<transition name="fade">
				<div class="bannercode"  @mouseenter='enterHandler' @mouseleave='leaveHandler'>
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
 .bannercode{
      animation: bounceInBelow 1.6s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
    }
    @keyframes bounceInBelow {
      0% {
        opacity: 0;
        transform: translate3d(0, -3000px, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(0,30px , 0);
      }
      75% {
        transform: translate3d(0,45px , 0);
      }
      90% {
        transform: translate3d(0,5px , 0);
      }
      100% {
        transform: none;
      }
    }
}  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
  .clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.outbanner{
		position: relative;
	}
	.allimg{
		position: relative;
		z-index:-0.5;
		background-image: url(../../../static/images/about.jpg);
		background-repeat:no-repeat; 
		background-size:100%;
		-moz-background-size:100% 100%;	
	    /*background-position: center;*/
		width: 100%;
		height: 300px;
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
		height: 100%;
		width: 100%;
		top:0;	
	}
	.bannercode{
		position: absolute;
		z-index: 0;
		width: 60%;
		margin:0 auto;
		bottom:20%;
		left:20%;
		color:#fff;
	    font-size:30px;
	    text-align: center;
	}
	.bannercode{
      animation: bounceInBelow 1.6s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
    }
    @keyframes bounceInBelow {
      0% {
        opacity: 0;
        transform: translate3d(0, -3000px, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(0,30px , 0);
      }
      75% {
        transform: translate3d(0,45px , 0);
      }
      90% {
        transform: translate3d(0,5px , 0);
      }
      100% {
        transform: none;
      }
    }
}
/*普通pc*/
@media screen and (min-width: 1024px) and (max-width: 1365px){ 
  .clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.outbanner{
		position: relative;
	}
	.allimg{
		position: relative;
		z-index:-0.5;
		background-image: url(../../../static/images/about.jpg);
		background-repeat:no-repeat; 
		background-size:100%;
		-moz-background-size:100% 100%;	
	    /*background-position: center;*/
		width: 100%;
		height: 380px;
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
		height: 100%;
		width: 100%;
		top:0;	
	}
	.bannercode{
		position: absolute;
		z-index: 0;
		width: 60%;
		margin:0 auto;
		bottom:20%;
		left:20%;
		color:#fff;
	    font-size:30px;
	    text-align: center;
	}
	.bannercode{
      animation: bounceInBelow 1.6s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
    }
    @keyframes bounceInBelow {
      0% {
        opacity: 0;
        transform: translate3d(0, -3000px, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(0,30px , 0);
      }
      75% {
        transform: translate3d(0,45px , 0);
      }
      90% {
        transform: translate3d(0,5px , 0);
      }
      100% {
        transform: none;
      }
    }
}
/*我的电脑*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
	.clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.outbanner{
		position: relative;
	}
	.allimg{
		position: relative;
		z-index:-0.5;
		background-image: url(../../../static/images/about.jpg);
		background-repeat:no-repeat; 
		background-size:100%;
		-moz-background-size:100% 100%;	
	    /*background-position: center;*/
		width: 100%;
		height: 500px;
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
		text-align: center;
		z-index: 0;
		width: 50%;
		margin:0 auto;
		bottom:10%;
		left:24%;
		color:#fff;
	    font-size:30px;
	}
	.bannercode{
      animation: bounceInBelow 1.6s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
    }
    @keyframes bounceInBelow {
      0% {
        opacity: 0;
        transform: translate3d(0, -3000px, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(0,30px , 0);
      }
      75% {
        transform: translate3d(0,45px , 0);
      }
      90% {
        transform: translate3d(0,5px , 0);
      }
      100% {
        transform: none;
      }
    }
} 
/*超大pc*/
@media screen and (min-width: 1903px){
	.clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
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
		height: 560px;
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
		height: 100%;
		width: 100%;
		top:0;
	}
	.bannercode{
		position: absolute;
	    z-index: 0;
	    width: 50%;
	    margin: 0 auto;
	    bottom: 16%;
	    left: 24%;
	    color: #fff;
	    font-size: 38px;
	    text-align: center;
	}
	.bannercode{
      animation: bounceInBelow 1.6s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
    }
    @keyframes bounceInBelow {
      0% {
        opacity: 0;
        transform: translate3d(0, -3000px, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(0,30px , 0);
      }
      75% {
        transform: translate3d(0,45px , 0);
      }
      90% {
        transform: translate3d(0,5px , 0);
      }
      100% {
        transform: none;
      }
    }
}
.clearfix::after{
	content: '';
	clear: both;
	display: block;
}


</style>
