<template>
	<div class="FiveBody" :class='{FiveBgc:isstart}' @mouseenter='startRotate' @mouseleave='endRotate'>
		<div class="circleProgress_wrapper">
	        <div class="wrapper right" >
	            <div class="circleProgress rightcircle" :class='{rstart:isstart}'></div>
	        </div>
	        <div class="wrapper left">
	            <div class="circleProgress leftcircle" :class='{lstart:isstart}'></div>
	        </div>
	 	</div>
    <span class="iconfont icons" v-html='item.icon'></span>
	 	<div class="FiveTitle" :class="{Fivecolors:isstart}">{{item.title}}</div>
	 	<br>
	 	<div :class='{FiveText:isstart}' v-show='isstart'>
	 		<p>{{item.pone}}</p>
	 		<p>{{item.ptwo}}</p>
	 	</div>
	</div>
</template>

<script>
export default {

  name: 'FiveAnimation',

  data() {
    return {
    	isstart:false
    };
  },
  props:['item'],
  methods:{
  	startRotate(){
  		// console.log("hhhh");
  		this.isstart=true;
  	},
  	endRotate(){
  		this.isstart=false;
  	}
  }
};
</script>

<style lang="css" scoped>



</style>
