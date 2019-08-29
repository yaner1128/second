<template>
		<div class="thirdcontainer">
	    <div class="prve">
	    	<img src="../../assets/prve.png" alt="">
			<div class="icontext">
				<div class="icons">
					<span class="iconfont" v-html="thirdAnimation.icon1"></span>
					<span class="iconfont" v-html="thirdAnimation.icon2"></span>
					<span class="iconfont" v-html="thirdAnimation.icon3"></span>
				</div>
				<div class="texts">
					<p>{{thirdAnimation.p1}}</p>
					<p>{{thirdAnimation.p2}}</p>
					<p>{{thirdAnimation.p3}}</p>
					<p>{{thirdAnimation.p4}}</p>
				</div>
			</div>
	    </div>
	    <div class="next">
	    	<img src="../../assets/next.png" alt="">
			<div class="Nicontext">
				<div class="Nicons">
					<span class="iconfont" v-html="thirdAnimation.icon1"></span>
					<span class="iconfont" v-html="thirdAnimation.icon2"></span>
					<span class="iconfont" v-html="thirdAnimation.icon3"></span>
				</div>
				<div class="Ntexts">
					<p>{{thirdAnimation.p1}}</p>
					<p>{{thirdAnimation.p2}}</p>
					<p>{{thirdAnimation.p3}}</p>
					<p>{{thirdAnimation.p4}}</p>
				</div>
			</div>
	    </div>
	</div>

	
</template>

<script>
export default {

  name: 'ThirdAnimation',
  props:['thirdAnimation'],
  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>

</style>
