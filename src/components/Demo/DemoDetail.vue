<template>
	<div>
		<!-- 图片组件 -->
	<my-Banner />

		<div class="container">
			<div class="detailleft">
				<!-- 大标题 -->
			<div class="title">
				<h1>2018”湖湘杯”网络安全技能大赛</h1>
				<span class="iconfont nextdemo" title="简码网络公司">></span>
				<span class="iconfont alldemo">&#xe684;</span>
				
			</div>
			<div class="interactive">
				<span>
					<i class="iconfont">&#xe666;</i> 2704&nbsp;&nbsp;
					<i class="iconfont">&#xe60c;</i> 4

				</span>
			</div>
			<!-- 案例内容 -->
			<div class="democontent">
				<div class="detailcontent">
					<div class="subtitle">项目背景</div>
					<p class="sparagraph">
					为深入贯彻习近平总书记关于网络强国的重要思想，坚持网络安全为人民，网络安全靠人民，按照“要深入开展网络安全知识技能宣传普及，提高广大人民群众网络安全意识和防护技能”的要求，湖南省人民政府决定举办"2018中国（长沙）网络安全•智能制造大会"，“2018年‘湖湘杯’网络安全技能大赛”将作为大会的重要活动之一。</p>
					<div class="contentimg"><img src="../../../static/images/about (5).jpg"></div>
				</div>
				<div class="detailcontent">
					<div class="subtitle">项目背景</div>
					<p class="sparagraph">
					为深入贯彻习近平总书记关于网络强国的重要思想，坚持网络安全为人民，网络安全靠人民，按照“要深入开展网络安全知识技能宣传普及，提高广大人民群众网络安全意识和防护技能”的要求，湖南省人民政府决定举办"2018中国（长沙）网络安全•智能制造大会"，“2018年‘湖湘杯’网络安全技能大赛”将作为大会的重要活动之一。</p>
					<div class="contentimg"><img src="../../../static/images/about (5).jpg"></div>
				</div>
				<div class="detailcontent">
					<div class="subtitle">项目背景</div>
					<p class="sparagraph">
					为深入贯彻习近平总书记关于网络强国的重要思想，坚持网络安全为人民，网络安全靠人民，按照“要深入开展网络安全知识技能宣传普及，提高广大人民群众网络安全意识和防护技能”的要求，湖南省人民政府决定举办"2018中国（长沙）网络安全•智能制造大会"，“2018年‘湖湘杯’网络安全技能大赛”将作为大会的重要活动之一。</p>
					<div class="contentimg"><img src="../../../static/images/about (5).jpg"></div>
				</div>
			</div>
			</div>
			
			<!-- 了解更多，预约 -->
			<div class="learnmore">
				<div class="moretitle">
					<span>网站类型：品牌型网站</span>
					<span>所属行业： 政务及事业单位</span>
					<button>我要报价</button>
					<button>了解产品</button>
					<button>直接浏览网站</button>
				</div>
				<div class="consult">
					<ul class="consulting">
						<li>
							<div class="iconfont">&#xe60d;</div>
							<span>预约专家<!-- 在线咨询 免费电话 --></span>
						</li>
					</ul>
				</div>
				<div class="share">
					分享到 :<i class="iconfont">&#xe604;&#xe652;&#xe6f5;</i>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {

  name: 'DemoDetail',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>


.detailleft{
	display:inline-block;
	width:68%;
}
.title h1{
	display: inline-block;
	font-size: 35px;
}
.title span{
	float: right;
	font-size: 28px;
	width:38px;
	height: 38px;
	border: 1px solid #A3A3A3;
	border-radius: 19px;
	color: #A3A3A3;
	text-align: center;
	line-height: 35px;
	margin-top: 5px;
	margin-left: 10px;
}
.title .nextdemo:hover{
	color: rgb(227,91,91);
	border-color: rgb(227,91,91);
	cursor: pointer;
}
.title .alldemo:hover{
	color: rgb(227,91,91);
	border-color: rgb(227,91,91);
	cursor: pointer;

}
.interactive i{
	color: #A3A3A3;
}
.democontent{
	width:100%;
	margin:5% 0;
}
.detailcontent{
	margin-bottom: 4%;
}
.detailcontent .subtitle{
	width:100%;
	text-align: center;
	font-weight: 550;
	font-size:22px;
	color: rgb(227,91,91);
	margin-bottom: 3%;
}
.detailcontent .sparagraph{
	line-height: 26px;
	margin-bottom: 3%;
}
.detailcontent .contentimg{
	width:100%;
	text-align: center;
}
.learnmore{
	width:28%;
	float: right;
}
</style>
