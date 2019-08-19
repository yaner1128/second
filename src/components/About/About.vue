<template>
	<div class="about">
		<!-- 图片 -->
		<div class="banners">
			<my-Banner/>
		</div>

		<!-- 文字组件一 -->
		<div class="onetext">
			<my-FristText :title='titleone' :text='textone'/>
		</div>

		<!-- 内容1 -->
		<div class="ontextContainer">
			<!-- 左边图片 -->
			<div class="AboutImg">
				<img src="../../assets/about2.jpg">
			</div>
			<!-- 右边文字 -->
			<div class="AboutText">
				<p>株洲简码网络科技有限公司是一家专注于互联网开发的高新技术公司。公司拥有一支国内高端的开发技术团队。</p>
				<p>以消费者需求为设计出发点，以客户利益至上为目的，一直致力于网站开发、微信开发、美工UI设计、云服务等应用。只做最赏心悦目的产品。</p>
				<p>通过多年的努力和积累，已助力各行各业的客户成功进入互联网的大时代。依靠积极的价值观念、先进的技术实力、灵活的合作模式，周到的贴心服务获得了客户和企业的高度赞誉</p>
			</div>
		</div>

		<!-- 文字组件一 -->
		<div class="onetext">
			<my-FristText :title='titletwo' :text='texttwo'/>
		</div>

		<!-- 动画组件4 -->
		<div class="AboutFourAni">
			<my-FourthAnimation/>
		</div>

		<!-- 脚部组件 -->
		<div>
			<Footer />
		</div>

	
	</div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
    	// FristText:[
     //        {id:1,titles:'关于我们',texts:'我们为您提供更具有优势的企业网络服务平台'},
     //        // {id:2,text:'',text2:''},
     //    ],
        titleone:'关于我们',
        textone:'我们为您提供更具有优势的企业网络服务平台',

        titletwo:'我们的态度',
        texttwo:'忠诚、奉献、责任、感恩',
    };
  },
};
</script>

<style lang="css" scoped>
.about{
	width: 100%;
}
.about .onetext{
	margin:50px 0 20px 0;
}
.ontextContainer{
	width: 88%;
	height: 300px;
	margin: 0 auto;
}
.ontextContainer .AboutImg{
	width: 510px;
	float: left;
}
.ontextContainer .AboutText{
	width: 620px;
	padding: 50px 0 0 50px;
	float: left;
}
.ontextContainer .AboutText p{
	margin-bottom: 30px;
	font-size: 14px;
}
.AboutFourAni{
	padding-bottom: 50px;
}


</style>
