<template>
	<div class="mainNav" v-if='isshow'>
		<ul>
			<li class="iconfont">&#xe62b;</li>
			<li class="iconfont">&#xe634;</li>
			<li class="iconfont">&#xe602;</li>
		</ul>
	</div>
</template>

<script>
export default {
  	name: 'Nav',
 	data() {
	    return {
	    	height:0,
	    	isshow:false,
	    };
  	},
  	mounted () {
    	window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮 滚动事件

    	this.$nextTick(function() {
        	// 获取可视窗口宽度
        	this.height = document.documentElement.clientHeight;
        	//console.log(this.height);
    	});
	},
	methods:{
		handleScroll(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      		//console.log(scrollTop);

      		if(scrollTop>300){
      			this.isshow=true;
      		}else{
      			this.isshow=false;
      		}


		},
	},
};
</script>

<style lang="css" scoped>
@media screen and (max-width: 767px){
	.mainNav{
		display: none;
	}
}
@media screen and (min-width: 768px){ 
	.mainNav{
		position: fixed;
		bottom: 35px;
	    right: 0;
	    width: 60px;
	    height: 240px;
		/*background-color: pink;*/
	}
	.mainNav>ul{
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
	.mainNav>ul>li{
		cursor: pointer;
		width: 60px;
		height: 60px;
		margin:10px 0;
		text-align: center;
		line-height: 60px;
		font-size: 30px;
		background-color: rgba(0,0,0,0.2);
		border-radius: 30px;
		color: rgb(60,111,160);
	}

}
</style>
