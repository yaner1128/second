<template>
<div>
		<!-- 图片组件 -->
	<div style="height:100px"></div>

		<div class="container clearfix">
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
					 <span class="iconfont nextdemo" @click='nextDemoHandler'>&#xe657;</span>
					<span class="iconfont alldemo" @click='backAlldemoHandler'>&#xe77d;</span>
				</div>
				<div class="moredetail">
					<div class="moretitle">
						<span>网站类型：{{casedetail.website_type}}</span><br><br>
						<span>所属行业： {{casedetail.industry}}</span><br>
						<button class="btn">我要报价</button>
						<button class="btn">了解产品</button><br>
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
					
				</div>
				<div class="relativeCase">
					<div class="relaTitle">
						相关案例 <span> ▎</span>
					</div>
					<ul class="relatCaseDetail">
						<li class="caseli" style="background-color: pink;height:150px;">
							
						</li>
						<li class="caseli" style="background-color: gold;height:150px;">
							
						</li>
						<li class="caseli" style="background-color: pink;height:150px;">
							
						</li>
					</ul>
					<!-- 动画组件二final -->			
						<!-- <div class="secAni">
					      <ul>
					        <li v-for="subItem in cases"  class="secAniLi" @click='detailHandler(subItem.id)'>
					           <my-lastAnimation :subItem='subItem' />
					        </li>
					      </ul>
						</div> -->
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
  		// console.log(this.nextUrl);
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
  			// console.log('3333',this.$route.params.casesId);
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
  	// console.log('1111',this.$route.params);
    this.getCaseDetail();
    
  },
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){ 
 .container{
  margin-bottom: 5%;
 }
 .detailleft{
  display:inline-block;
  width:100%;
  border-bottom: 1px solid rgb(60,111,160);
 }
 .title h1{
  display: inline-block;
  font-size: 35px;
 }
 .learnmore .demos{
  width:100%;
 }
 .demos span{
  float: right;
  font-size: 28px;
  width:15%;
  height: 38px;
  border: 1px solid #A3A3A3;
  border-radius: 19px;
  border-bottom-right-radius: 3px;
  color: #A3A3A3;
  text-align: center;
  line-height: 35px;
  margin-top: 5px;
  margin-right:3px;
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
 .detailcontent .contentimg img{
  width:100%;
 }
 .learnmore{
  width:100%;
  height: 840px;
  /*float: right;*/
 }
 .learnmore .moredetail{
  /*margin-top: 150px;*/
  /*border: 1.5px solid rgb(60,111,160);*/
  border-radius: 10px;
 }
 .learnmore .moredetail .moretitle{
  padding: 0px;
  padding-left: 12px;
  margin-top: 30px;
 }
 .learnmore .moredetail .moretitle span{
  font-size: 14px;
  color: rgb(60,111,160);
 }
 .learnmore .moredetail .moretitle button{
   width: 93px;
   height: 33px;
   border-radius: 8px;
   border: none;
   outline: none;
   cursor: pointer;
   background-color:rgb(60,111,160);
   color: #FFF;
   font-weight: 500;
   font-size: 12px;
   /*margin-top: 10%;*/
   /*margin-left:2% ;*/
   margin-right: 2%;
 }
 .btn{
 	margin-top: 15px;
 	/*margin-left: 12px;*/
 }
 .moretitle button:hover{
   background-color:rgb(50,99,145);
   color: #FFF ;
 }
 .learnmore .moredetail .moretitle .surfing{
  width:30%;
  height: 73px;
  font-weight: 550;
  background-color: #FFF;
    color: rgb(60,111,160);
    border: 2px solid rgb(60,111,160);
    float: right;
 }
 .consulting{
 	padding: 12px 0;
 }
 .consult .consulting li {
  width:60px;
  display: inline-block;
  padding:0 7px;
  text-align: center;
 }
 .consult .consulting li span{
  font-size: 12px;
  /*margin-left: 19%;*/
 }
 .consult .consulting li .iconfont{
  /*border:1px solid #6C8EAC;*/
  width:40px;
  height: 40px;
  line-height: 40px;
  margin:0 auto;
  background-color: #6C8EAC;
  border-radius: 20px;
  color:#fff;
  font-size: 28px;
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
 .relativeCase{
		border-top:1px solid #CDCDCD;
		margin-top: 5%;
		height: 600px;

	}
	.relativeCase .relaTitle{
		padding: 15px;
		font-size: 20px;
	}
	.relativeCase .relaTitle span{
		margin:0 3%;
		color:rgb(60,111,160);
	}
	.relativeCase .relatCaseDetail{
		padding:15px;
	}
	.relativeCase .relatCaseDetail .caseli{
		margin: 2% auto;
    	width: 270px;
	}
}  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
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
	.democontent p{
		font-size: 14px;
	}
	.democontent img{
		width: 60%;
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
		width:30%;
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
	.consult .consulting{
		padding-left: 10px;
	}
	.consult .consulting li {
		display: inline-block;
		padding:15px 1px;
		width: 60px;
	}
	.consult .consulting li span{

		font-size: 14px;
		/*margin-left: 3px;*/
	}
	.consult .consulting li .iconfont{
		/*width:70px;*/
		height: 60px;
		line-height: 60px;
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
	.relativeCase{
		border-top:1px solid #CDCDCD;
		margin-top: 5%;
	}
	.relativeCase .relaTitle{
		padding: 15px;
		font-size: 20px;
	}
	.relativeCase .relaTitle span{
		margin:0 3%;
		color:rgb(60,111,160);
	}
	.relativeCase .relatCaseDetail{
		padding:15px;
	}
	.relativeCase .relatCaseDetail .caseli{
		margin:2% 0;
	}
}
/*真的普通pc*/
@media screen and (min-width: 1024px) and (max-width: 1365px){ 
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
  font-size: 20px;
 }
 .learnmore .moredetail .moretitle button{
   width: 121px;
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
 .consult .consulting{
  text-align: center;
 }
 .consult .consulting li {
  display: inline-block;
  padding:3px;
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
 .relativeCase{
		border-top:1px solid #CDCDCD;
		margin-top: 5%;
	}
	.relativeCase .relaTitle{
		padding: 15px;
		font-size: 20px;
	}
	.relativeCase .relaTitle span{
		margin:0 3%;
		color:rgb(60,111,160);
	}
	.relativeCase .relatCaseDetail{
		padding:15px;
	}
	.relativeCase .relatCaseDetail .caseli{
		margin:2% 0;
	}
}
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
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
	
	.relativeCase{
		border-top:1px solid #CDCDCD;
		margin-top: 5%;
	}
	.relativeCase .relaTitle{
		padding: 15px;
		font-size: 20px;
	}
	.relativeCase .relaTitle span{
		margin:0 3%;
		color:rgb(60,111,160);
	}
	.relativeCase .relatCaseDetail{
		padding:15px;
	}
	.relativeCase .relatCaseDetail .caseli{
		margin:2% 0;
	}
} 
/*超大pc*/
@media screen and (min-width: 1903px){
	.container{
		margin-bottom: 5%;
		width: 70%;
		/*background-color: pink;*/
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
	.moredetail>div{
		padding-left: 50px;
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
	.relativeCase{
		border-top:1px solid #CDCDCD;
		margin-top: 5%;
		padding-left: 50px;

	}
	.relativeCase .relaTitle{
		padding: 15px 0;
		font-size: 20px;
	}
	.relativeCase .relaTitle span{
		margin:0 3%;
		color:rgb(60,111,160);
	}
	.relativeCase .relatCaseDetail{
		/*padding:15px;*/
	}
	.relativeCase .relatCaseDetail .caseli{
		margin: 2% auto;
    	width: 270px;
	}
}
</style>
