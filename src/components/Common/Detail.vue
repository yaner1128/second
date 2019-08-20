<template>
	<div>
		<my-Banner />
		<!-- 新闻详情 -->
		<div class="newsreport">
			<!-- 标题 -->
			<div class="title">
				<h2>新闻标题</h2>
				<p class="iconfont browse">
					<span>&#xe64a;</span>时间&nbsp;&nbsp;&nbsp;
					<span>&#xe666;</span>人数
				</p>
			</div>
			<!-- 新闻主体内容 -->
			<div class="mainNew">
				
			</div>
			<!-- 新闻结束按键 -->
			<div class="buttons">
				<span class="prve">上一篇：标题一啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿</span>
				<span class="next">下一篇：标题二哈哈哈哈哈哈哈哈哈哈或或或或或或或或或</span>
			</div>
		</div>
		<div>
			<Footer />
		</div>
	</div>
</template>

<script>
export default {

  name: 'Detail',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
.newsreport{
	width: 88%;
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
	height: 400px;
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
	float: left;
}
.newsreport .buttons .next{
	float: right;
}
.newsreport .buttons span:hover{
	text-decoration: underline;
	color: rgb(227,91,91);
	font-size: 14px;
}
</style>
