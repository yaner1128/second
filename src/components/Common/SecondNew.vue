<template>
	<div class="containers">
		<ul class="outerNew">
			<li class="secondli">
				<div class="newimg clearfix">
					<img :src="item.thumb" />
				</div>
				<div class="newcontent">
					<h2>{{item.title}}</h2>
					<p class="maincont">{{item.content}}</p>
					<p class="newsmore">
						<span class="iconfont detail">查看详情&#xe684;</span>
						<span class="iconfont browse">&#xe64a;{{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}}&nbsp;&nbsp;&nbsp;&#xe666;{{item.clicks}}</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
 
  name: 'SecondNew',

  data() {
    return {
    	 
    };
  },
  methods:{
  	
  },
  props:['item'],
  // created(){
  // 	console.log(this.item);
  // },
};
</script>

<style lang="css" scoped>
/*iPad*/
@media screen and (min-width: 768px) and (max-width: 1365px){ 
	.clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.containers{
		width: 100%;
		height: 180px;
		/*background-color: green;*/
		margin: 20px 0;
	}
	.outerNew{
		width: 100%;
		margin: 0 auto;
		height: 100%;
	}
	.secondli{
		display: inline-block;
		width: 100%;
		height: 150px;
		cursor: pointer;
		padding: 15px 0;
	/*	background-color: red;*/
	}
	.secondli:hover{
	 	box-shadow:3px 3px 10px  10px rgba(180,180,180,0.5);
	}
	.secondli:hover h2{
		color: rgb(227,91,91);
	}

	/*新闻图片*/
	.newimg{
		float: left;
		width: 25%;
		height: 100%;
		vertical-align:middle;
		overflow: hidden;
	}
	.newimg img{
		width: 90%;
		height:100%;
		margin: 0 5%;
	}
	/*新闻内容*/
	.newcontent{
		float: left;
		width: 70%;
		height:100%;
		margin-left: 3%;
		padding-right: 2%;
		position: relative;
	}
	.newcontent h2{
		color: #333;
	    font-weight: bold;
	    font-size: 18px;
	}
	.newcontent .maincont{
		color: #a3a3a3;
		font-size:14px;
		/*background-color: green;*/
		height: 23%;
		margin: 2% 0 6% 0;

		overflow: hidden;
	    -webkit-line-clamp: 2;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	}
	.newcontent .newsmore{
		position: absolute;
		bottom: 0;
		left: 0;
		color: #a3a3a3;
		font-size:12px;
		/*background-color: blue;*/
		margin-top: 6%;
		width: 100%;
	}
	.newcontent .newsmore .iconfont{
		font-size: 12px;
	}
	.newsmore .browse{
		float: right;
		/*width: 10%;
		margin-left: 50%;*/
		padding-right: 3.5%;
	}
}
/*超大*/
@media screen and (min-width: 1366px){ 
	.clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.containers{
		width: 100%;
		height: 200px;
		/*background-color: green;*/
		margin: 20px 0;
	}
	.outerNew{
		width: 100%;
		margin: 0 auto;
		height: 100%;
	}
	.secondli{
		display: inline-block;
		width: 100%;
		height: 170px;
		cursor: pointer;
		padding: 15px 0;
	/*	background-color: red;*/
	}
	.secondli:hover{
	 	box-shadow:3px 3px 10px  10px rgba(180,180,180,0.5);
	}
	.secondli:hover h2{
		color: rgb(227,91,91);
	}

	/*新闻图片*/
	.newimg{
		float: left;
		width: 28%;
		height: 100%;
		vertical-align:middle;
		overflow: hidden;
		/*padding: 1%;*/
		/*background-color: green;*/
	}
	.newimg img{
		width: 90%;
		margin: 0 5%;
		
	}
	/*新闻内容*/
	.newcontent{
		float: left;
		width: 68%;
		height:100%;
		margin-left: 2%;
		padding-right: 2%;
		position: relative;
	/*	background-color: green;*/
		/*padding: 1%;*/
	}
	.newcontent h2{
		color: #333;
	    font-weight: bold;
	    font-size: 18px;
	    /*background-color: red;*/
	}
	.newcontent .maincont{
	/*	display:-webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;*/
		color: #a3a3a3;
		font-size:16px;
		/*background-color: green;*/
		height: 25%;
		margin: 2% 0 8% 0;

		overflow: hidden;
	    -webkit-line-clamp: 2;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	}
	.newsmore{
		position: absolute;
		bottom: 0;
		left: 0;
		color: #a3a3a3;
		font-size:14px;
		/*background-color: blue;*/
		margin-top: 6%;
		width: 100%;
	}
	.newsmore .browse{
		float: right;
		/*width: 10%;
		margin-left: 50%;*/
		padding-right: 3.5%;
	}
}

</style>