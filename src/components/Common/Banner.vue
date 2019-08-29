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
 





</style>
