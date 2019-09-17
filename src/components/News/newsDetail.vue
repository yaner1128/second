<template>
	<div>
		<my-Banner />
		<!-- 新闻详情 -->
		<div class="newsreport">
			<!-- 标题 -->
			<div class="title">
				<h2>{{newsdetails.title}}</h2>
				<p class="iconfont browse">
					<span>&#xe64a;</span>{{moment(dates).format('YYYY-MM-DD')}}&nbsp;&nbsp;&nbsp;
					<span>&#xe666;</span>{{newsdetails.clicks}}
				</p>
			</div>
			<!-- 新闻主体内容 -->
			<div class="mainNew" v-html="newsdetails.content"></div>
			<!-- 新闻结束按键 -->
			<div class="buttons">
				<!-- <span class="prve"> -->
				<span class='prve' v-if='preshow' @click='prve'>上一篇：{{newsdetails.pre_title}}</span>
				<span class="next" v-if='nextshow' @click='next'>下一篇：{{newsdetails.next_title}}</span>
			</div>
		</div>
		<div>
			<Footer />
		</div>
	</div>
</template>

<script>
export default {

  name: 'newsDetail',
  data() {
    return {
    	dates:'',
    	nextshow:false,
    	preshow:false,
    	newsdetails:[],
    	newsId:0,
    };
  },
  methods:{
  	// 上一页
  	prve(){
  		this.$router.push({
  			path:this.newsdetails.pre_link,
  		})
  		this.getNewsDetail();
  	},
  	// 下一页
  	next(){
  		this.$router.push({
  			path:this.newsdetails.next_link,
  			// this.getNewsDetail();
  		})
  		this.getNewsDetail();
  	},
  	// 获取新闻详情
  	getNewsDetail(){
  		// console.log(this.$route.params.newsId);
  		this.dates=this.$route.params.dates;
  		// console.log(this.dates);
  		this.$http.newsdetails(this.$route.params.newsId)
      	.then(res=>{
        	// console.log(res);
	        if(res.code==0){
	          	this.newsdetails=res.data;
	          	// console.log(this.newsdetails);
	          	if(this.newsdetails.next_title==null){
	          		this.nextshow=false;
	          	}else{
	          		this.nextshow=true;
	          	}
	          	if(this.newsdetails.pre_title==null){
	          		this.preshow=false;
	          	}else{
	          		this.preshow=true;
	          	}
	        }
      	})
      	.catch(err=>{
        	console.log(err);
      	})
  	},
  },
  created(){
  	this.getNewsDetail();
  }
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){ 
 .newsreport{
  width: 88%;
  margin: 0 auto;
  padding-top: 40px;
 }
 .newsreport .title{
  width: 100%;
  text-align: center;
  padding: 10px 0 30px 0;
 }
 .newsreport .title>h2{
  padding-bottom: 10px;
  font-size: 22px;
  color:rgb(51, 51, 51);
 }
 .newsreport .title p{
  color:rgb(153, 153, 153);;
 }
 .newsreport .mainNew{
  width: 100%;
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(204, 204, 204);
 }
  .newsreport .mainNew p{
	margin-right: 10px 0;
  }
 .newsreport .buttons{
  width: 100%;
  height:70px;
  padding: 50px 0;
  color:rgb(51, 51, 51);
 }
 .newsreport .buttons .prve{
	color:rgb(51, 51, 51);
	margin: 3% 0;
	display: block;
 }
 .newsreport .buttons .next{
  color:rgb(51, 51, 51);
 }
 .newsreport .buttons span:hover{
  text-decoration: underline;
  color: rgb(227,91,91);
  font-size: 14px;
 }
}  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
	.newsreport{
		width: 86%;
		margin: 0 auto;
		padding-top: 50px;
	/*	background-color: lightgray;*/
	}
	.newsreport .title{
		width: 100%;
		text-align: center;
		padding: 50px 0;
	}
	.newsreport .title>h2{
		padding-bottom: 10px;
		font-size: 22px;
		color:rgb(51, 51, 51);
	}
	.newsreport .title p{
		color:rgb(153, 153, 153);;
	}
	.newsreport .mainNew{
		width: 100%;
		padding-bottom: 50px;
		border-bottom: 1px solid rgb(204, 204, 204);
	}
	.newsreport .buttons{
		width: 100%;
		height:70px;
		padding: 30px 0;
		color:rgb(51, 51, 51);
		font-size: 12px;
	}
	.newsreport .buttons .prve{
		color:rgb(51, 51, 51);
		float: left;
	}
	.newsreport .buttons .next{
		float: right;
		color:rgb(51, 51, 51);
	}
	.newsreport .buttons span:hover{
		text-decoration: underline;
		color: rgb(227,91,91);
		font-size: 12px;
	}
}
 /*ipad*/
@media screen and (min-width: 1024px) and (max-width: 1365px){ 
	.newsreport{
		width: 76%;
		margin: 0 auto;
		padding-top: 50px;
	/*	background-color: lightgray;*/
	}
	.newsreport .title{
		width: 100%;
		text-align: center;
		padding: 50px 0;
	}
	.newsreport .title>h2{
		padding-bottom: 10px;
		font-size: 22px;
		color:rgb(51, 51, 51);
	}
	.newsreport .title p{
		color:rgb(153, 153, 153);;
	}
	.newsreport .mainNew{
		width: 100%;
		/*height: 400px;*/
	/*	background-color: pink;*/
		padding-bottom: 50px;
		border-bottom: 1px solid rgb(204, 204, 204);
	}
	.newsreport .buttons{
		width: 100%;
		height:70px;
		padding: 30px 0;
		color:rgb(51, 51, 51);
		font-size: 12px;
	}
	.newsreport .buttons .prve{
		color:rgb(51, 51, 51);
		float: left;
	}
	.newsreport .buttons .next{
		float: right;
		color:rgb(51, 51, 51);
	}
	.newsreport .buttons span:hover{
		text-decoration: underline;
		color: rgb(227,91,91);
		font-size: 12px;
	}
}
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
	.newsreport{
		width: 70%;
		margin: 0 auto;
		padding-top: 50px;
	/*	background-color: lightgray;*/
	}
	.newsreport .title{
		width: 100%;
		text-align: center;
		padding: 50px 0;
	}
	.newsreport .title>h2{
		padding-bottom: 10px;
		font-size: 22px;
		color:rgb(51, 51, 51);
	}
	.newsreport .title p{
		color:rgb(153, 153, 153);;
	}
	.newsreport .mainNew{
		width: 100%;
		/*height: 400px;*/
	/*	background-color: pink;*/
		padding-bottom: 50px;
		border-bottom: 1px solid rgb(204, 204, 204);
	}
	.newsreport .buttons{
		width: 100%;
		height:70px;
		padding: 50px 0;
		color:rgb(51, 51, 51);
	}
	.newsreport .buttons .prve{
		color:rgb(51, 51, 51);
		float: left;
	}
	.newsreport .buttons .next{
		float: right;
		color:rgb(51, 51, 51);
	}
	.newsreport .buttons span:hover{
		text-decoration: underline;
		color: rgb(227,91,91);
		font-size: 14px;
	}
} 
/*超大pc*/
@media screen and (min-width: 1903px){
	.newsreport{
		width: 70%;
		margin: 0 auto;
		padding-top: 50px;
	/*	background-color: lightgray;*/
	}
	.newsreport .title{
		width: 100%;
		text-align: center;
		padding: 50px 0;
	}
	.newsreport .title>h2{
		padding-bottom: 10px;
		font-size: 22px;
		color:rgb(51, 51, 51);
	}
	.newsreport .title p{
		color:rgb(153, 153, 153);;
	}
	.newsreport .mainNew{
		width: 100%;
		/*height: 400px;*/
	/*	background-color: pink;*/
		padding-bottom: 50px;
		border-bottom: 1px solid rgb(204, 204, 204);
	}
	.newsreport .buttons{
		width: 100%;
		height:70px;
		padding: 50px 0;
		color:rgb(51, 51, 51);
	}
	.newsreport .buttons .prve{
		color:rgb(51, 51, 51);
		float: left;
	}
	.newsreport .buttons .next{
		float: right;
		color:rgb(51, 51, 51);
	}
	.newsreport .buttons span:hover{
		text-decoration: underline;
		color: rgb(227,91,91);
		font-size: 14px;
	}
}
</style>
