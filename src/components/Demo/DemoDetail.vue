<template>
	<div>
		<!-- 图片组件 -->
	<my-Banner />

		<div class="container">
			<div class="detailleft">
				<!-- 大标题 -->
			<div class="title">
				<h1>2018”湖湘杯”网络安全技能大赛</h1>
				
				
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
				<div class="demos">
					<span class="iconfont nextdemo" title="简码网络公司">></span>
					<span class="iconfont alldemo">&#xe684;</span>
				</div>
				<div class="moredetail">
					<div class="moretitle">
						<span>网站类型：品牌型网站</span><br><br>
						<span>所属行业： 政务及事业单位</span><br>
						<button>我要报价</button>
						<button>了解产品</button><br>
						<button class="surfing">直接浏览网站</button>
					</div>
					<div class="consult">
						<ul class="consulting">
							<li>
								<div class="iconfont">&#xe60d;</div>
								<span>预约专家</span>
							</li>
							<li>
								<div class="iconfont icontwo">&#xe75f;</div>
								<span>在线咨询</span>
							</li>
							<li>
								<div class="iconfont iconthree">&#xe680;</div>
								<span>免费电话</span>
							</li>
						</ul>
					</div>
					<div class="share">
						分享到 :<i class="iconfont">&#xe604;&#xe652;&#xe6f5;</i>
					</div>
				</div>
				
			</div>
		</div>
		 <!-- 脚部 -->
  <Footer />
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
.container{
	margin-bottom: 5%;
}

.detailleft{
	display:inline-block;
	width:68%;
}
.title h1{
	display: inline-block;
	font-size: 35px;
}


.demos span{
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
.demos .nextdemo:hover{
	color: rgb(227,91,91);
	border-color: rgb(227,91,91);
	cursor: pointer;
}
.demos .alldemo:hover{
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
	height: 400px;
	float: right;

}
.learnmore .moredetail{
	margin-top: 150px;
	border: 1.5px solid rgb(227,91,91);
	border-radius: 10px;
}
.learnmore .moredetail .moretitle{
	padding: 15px;

}
.learnmore .moredetail .moretitle span{
	font-size: 18px;
}
.learnmore .moredetail .moretitle button{
  width: 130px;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color:rgb(227,91,91) ;
  color: #FFF;
  font-weight: 500;
  font-size: 15px;
  margin-top: 10%;
  margin-left:2% ;
  margin-right: 2%;
}
.moretitle button:hover{
  background-color:rgb(210,80,80);
  color: #FFF ;
}
.learnmore .moredetail .moretitle .surfing{
	width:92%;
	font-weight: 550;
	background-color: #FFF;
  	color: rgb(227,91,91);
  	border: 2px solid rgb(227,91,91);
}
.consult .consulting li {
	display: inline-block;
	padding:15px;
}
.consult .consulting li span{
	font-size: 16px;
	margin-left: 3px;
}
.consult .consulting li .iconfont{
	/*border:1px solid #6C8EAC;*/
	width:70px;
	height: 70px;
	line-height: 70px;
	background-color: #6C8EAC;
	border-radius: 35px;
	color:#fff;
	font-size: 38px;
	text-align: center;
	cursor: pointer;
	border:2px solid #fff;
}
.consult .consulting li .iconfont:hover{
	border:2px solid #DECDCD ;
}
.consult .consulting li .icontwo{
	background-color:#CBCF7C ;
	
}
.consult .consulting li .iconthree{
	background-color: #67CE9B;
	
}
.share{
	padding:15px;
	font-size: 17px;
}
.share .iconfont{
	font-size: 20px;
}
</style>
