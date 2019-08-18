<template>
	<div class="outbody">
		<div class="homecontainer">
			<!-- 文字组件一 -->
<!-- 			<div class="fristtext">
				<my-FristText/>
			</div> -->
			<!-- 动画组件一 -->
<!-- 			<div class="turnImg">
				<ul>
					<li v-for='(item,index) in fristImgs' :key='item.id'>
						<my-FristAnimation/>
					</li>
				</ul>
			</div>
 -->

 			
			<!-- 动画组件二 -->
<!-- 			<div>
				<ul>
					<li><my-SecondAnimation/></li>
				</ul>
			</div> -->

			<!-- 动画组件三 -->
<!-- 			<div>
				<ul>
					<li>
						<my-ThirdAnimation/>
					</li>
				</ul>
			</div> -->
			<!-- 动画组件五 -->
<!-- 			<div>
				<ul>
					<li>
						<my-FiveAnimation/>
					</li>
				</ul>
			</div> -->
			
			<!-- 新闻组件一 -->
<!-- 			<div>
				<ul>
					<li>
						<my-FristNew/>
					</li>
				</ul>
			</div> -->
			
			<!-- 按钮组价 -->
<!-- 			<div>
				<ul>
					<li>
						<my-FristButton/>
					</li>
				</ul>
			</div> -->
			<div class="pp"></div>
			<!-- 分页组件 -->
			<div>
				<my-Paging/>
			</div>
			<div class="tt"></div>
		</div>
	</div>	
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    	fristImgs:[
    		{id:1,imgSrc:'../../assets/turn1.png',text:'网站/商城系统定制开发'},
    		{id:2,imgSrc:'../../assets/turn2.png',text:'交互H5设计开发'},
    		{id:3,imgSrc:'../../assets/turn3.png',text:'小程序/公众号/Wap设计开发'},
    		{id:4,imgSrc:'../../assets/turn4.png',text:'APP项目定制开发'},
    	]
    }
  },
};
</script>

<style lang="css" scoped>
.pp{
	width: 100%;
	height: 300px;
	background-color: pink;
}
.tt{
	width: 100%;
	height: 500px;
	background-color: blue;
}






.outbody{
	background-color: lightgray;
}
.homecontainer{
	width: 88%;
	margin: 0 auto;
	background-color:#fff;
}
.turnImg{
	width: 100%;
	height: 340px;
	margin: 20px 0;
	text-align: center;
}
.turnImg>ul{
	width: 100%;
	height: 100%;
	text-align: center;
	margin: 0 auto;
}
.turnImg>ul>li{
	width: 235px;
	height: 300px;
	padding: 10px 30px;
	float: left;
}
</style>
