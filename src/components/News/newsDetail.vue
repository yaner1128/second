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
			<div class="mainNew">
				{{newsdetails.content}}
			</div>
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
  			// this.getNewsDetail();
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
  		console.log(this.dates);
  		this.$http.newsdetails(this.$route.params.newsId)
      	.then(res=>{
        	console.log(res);
	        if(res.code==0){
	          	this.newsdetails=res.data;
	          	console.log(this.newsdetails);
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


</style>
