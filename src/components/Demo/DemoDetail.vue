<template>
<div>
		<!-- 图片组件 -->
	<div style="height:100px"></div>

		<div class="container">
			<div class="detailleft">
				<!-- 大标题 -->
				<div class="title">
					<h1 v-html='casedetail.title'></h1>
				</div>
				<div class="interactive">
					<span>
						<i class="iconfont">&#xe666;</i>{{casedetail.clicks}}&nbsp;&nbsp;
						

					</span>
				</div>
				<!-- 案例内容 -->
				<div class="democontent">
					<div class="detailcontent">
						<div class="subtitle" v-html='casedetail.brief'></div>
						<p class="sparagraph" v-html='casedetail.content'>
						</p>
						<div class="contentimg"><img :src="casedetail.QR_code"></div>
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
					 <span class="iconfont nextdemo" @click='nextDemoHandler'>&#xe641;</span>
					<span class="iconfont alldemo" @click='backAlldemoHandler'>&#xe77d;</span>
				</div>
				<div class="moredetail">
					<div class="moretitle">
						<span>网站类型：{{casedetail.website_type}}</span><br><br>
						<span>所属行业： {{casedetail.industry}}</span><br>
						<button>我要报价</button>
						<button>了解产品</button><br>
						<button class="surfing">直接浏览网站</button>
					</div>
					<div class="consult">
						<ul class="consulting">
							<li>
								<div class="iconfont">&#xe606;</div>
								<span>预约专家</span>
							</li>
							<li>
								<div class="iconfont icontwo">&#xe858;</div>
								<span>在线咨询</span>
							</li>
							<li>
								<div class="iconfont iconthree">&#xe7ce;</div>
								<span>免费电话</span>
							</li>
						</ul>
					</div>
					<div class="share">
						分享到 :<i class="iconfont">&#xe669;&#xe668;&#xe615;&#xe601;</i>
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
    	casesId:1,
    	casedetail:{},
    	nextUrl:{},
    };
  },
  methods:{
  
  	backAlldemoHandler(){
  		console.log(this.nextUrl);
  		this.$router.push({
        name:"Demo",
       })
  	},
  	nextDemoHandler(){
  		if(this.casedetail.next_link==null){
  			this.$message({
          message: '这已经是最后一页了哦',
          type: 'warning'
        });
  		}else{
  			this.$router.push({
        path:this.casedetail.next_link,
       })
  		
  		this.getCaseDetail();
  		}
  		
  	},
  	getCaseDetail(){
  		this.$http.CaseDetail(this.$route.params.casesId)
  		.then(res=>{
  			console.log('3333',this.$route.params.casesId);
  			if(res.code === 0) {
  			this.casedetail = res.data;
  			this.nextUrl=res.data.next_link;
  			console.log('======',res);
  			}
  		})
  		.catch(err=>{
  			console.log(err);
  		})
  	},
  },
  created(){
  	console.log('1111',this.$route.params);
    this.getCaseDetail();
    
  },
};
</script>

<style lang="css" scoped>
@media only screen and (max-width: 767px){}
@media only screen and (min-width: 768px){}
@media only screen and (min-width: 992px){}
@media only screen and (min-width: 1200px){
    
}
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
	border-bottom-right-radius: 3px;
	color: #A3A3A3;
	text-align: center;
	line-height: 35px;
	margin-top: 5px;
	margin-left: 10px;
	padding-top:3px;
}


.demos .nextdemo:hover{

	color: rgb(60,111,160);
	border-color: rgb(60,111,160);
	cursor: pointer;
}
.demos .alldemo:hover{
	color: rgb(60,111,160);
	border-color: rgb(60,111,160);
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
	color: rgb(60,111,160);
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
	border: 1.5px solidrgb(60,111,160);
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
  background-color:rgb(60,111,160);
  color: #FFF;
  font-weight: 500;
  font-size: 15px;
  margin-top: 10%;
  margin-left:2% ;
  margin-right: 2%;
}
.moretitle button:hover{
  background-color:rgb(50,99,145);
  color: #FFF ;
}
.learnmore .moredetail .moretitle .surfing{
	width:92%;
	font-weight: 550;
	background-color: #FFF;
  	color: rgb(60,111,160);
  	border: 2px solid rgb(60,111,160);
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
