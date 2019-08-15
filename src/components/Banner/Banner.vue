<template>
	<div>
		<div class='allimg' >
			<img src="../../../static/images/about.jpg" class='bannerimg'>	
			
					
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
.allimg{
	position: relative;

	z-index: -3;
	/*background-image: url(../../../static/images/banner.jpg);*/
	
    /*background-position: center;*/
    
	height: 100%;
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
	position: relative;
	
	
}
.bannercode{
	position: absolute;
	z-index: 1;
	/*top:60%;*/
	left:35%;
	margin-top: 350px;
	/*float: left;*/
	/*margin:0 auto;*/
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


</style>
