<template>
	<div class="mainNav" v-if='isshow'>
		<ul>
			<li class="iconfont" @mouseenter="wechatPicE" @mouseleave="wechatPicL">
				&#xe62b;
				<p>微信沟通</p>
				<div class="wechat" v-if="wechatShow">
					<img src="../../assets/contact_05.png">
					<p>联系我们吧</p>
				</div>
			</li>
			<li class="iconfont" @mouseenter="phonePicE" @mouseleave="phonePicL">
				&#xe611;
				<p>联系电话</p>
				<div class="phone" v-if="phoneShow">
					<div class="content">18711741207</div>
					<p>联系我们吧</p>
				</div>
			</li>
			<li class="iconfont"><a href="http://p.qiao.baidu.com/cps/chat?siteId=13917338&userId=28931959">&#xe881;<p>在线咨询</p></a></li>
			<li class="iconfont" @click="goTop">&#xe602;<p>回到顶部</p></li>
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
	    	wechatShow:false,
	    	phoneShow:false,
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
		goTop(){
			target.scrollIntoView();
		},
		wechatPicE(){
			this.wechatShow=true;
		},
		wechatPicL(){
			this.wechatShow=false;
		},
		phonePicE(){
			this.phoneShow=true;
		},
		phonePicL(){
			this.phoneShow=false;
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
	    height: 258px;
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
	    margin: 3px 0;
	    text-align: center;
	    line-height: 45px;
	    font-size: 30px;
		background-color: rgb(60,111,160);
		color: #f0f0f0;
		position: relative;
	}
	/*微信*/
	.wechat{
		position: absolute;
		width: 98px;
		height: 121px;
		top: -71px;
   		right: 65px;
   		border: 1px solid rgb(60,111,160);
   		padding: 5px;
   		background-color: #fff;
	}
	.wechat>img{
		width: 98px;
		height: 101px;
	}
	.wechat>p{
		width: 100%;
		height: 20px;
		text-align: center;
		color:rgb(60,111,160);
	}
	/*手机电话*/
	.phone{
		position: absolute;
		width: 130px;
		height: 49px;
		top: 0;
		right:65px;
		border: 1px solid rgb(60,111,160);
   		padding: 5px;
   		background-color: #fff;
	}
	.phone>.content{
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		color:rgb(60,111,160);
	}
	.phone>p{
		width: 100%;
		height: 20px;
		text-align: center;
		color:rgb(60,111,160);
	}
	.mainNav>ul>li>a{
		width: 100%;
		height: 100%;
		background-color: rgb(60,111,160);
		color: #f0f0f0;
	}
	.mainNav>ul>li:hover{
		background-color: #f0f0f0;
		color: rgb(60,111,160);
	}
	.mainNav>ul>li>a:hover{
		background-color: #f0f0f0;
		color: rgb(60,111,160);
	}
	.mainNav>ul>li p{
		text-align: center;
		font-size: 14px;
		width: 100%;
		height: 30px;
		position: absolute;
		bottom: 5px;
		left: 0;
	}
}
</style>
