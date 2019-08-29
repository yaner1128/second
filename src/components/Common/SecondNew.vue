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
.clearfix::after{
	content: '';
	clear: both;
	display: block;
}
/*手机*/
@media screen and (max-width: 767px){ 
		.containers{
			width: 100%;
			height: 200px;
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
		    height: 230px;
		    cursor: pointer;
		    padding: 3px 0;
		    margin:5% 0;
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
		    width: 54%;
		    height: 42%;
			vertical-align:middle;
			/*overflow: hidden;*/
		}
		.newimg img{
		    width: 100%;
		    margin: 0px 41%;
			
		}
		/*新闻内容*/
		.newcontent{
		    float: left;
		    width: 96%;
		    height: 52%;
			margin-left: 0%;
			padding-right: 2%;
			padding-left: 2%;
			position: relative;
		}
		.newcontent h2{
			color: #333;
		    font-weight: bold;
		    font-size: 15px;
		    margin-top:10%;
		    overflow: hidden;
		    -webkit-line-clamp: 1;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-box-orient: vertical;
		}
		.newcontent .maincont{
			color: #a3a3a3;
			font-size: 16px;
		    height: 40px;
		    margin: 2% 0 0% 0;
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
			width: 100%;
		}
		.newsmore .detail{
			font-size: 15px;
			padding-left: 1.5%;

		}
		.newsmore .browse{
			font-size: 15px;
			float: right;
			padding-right: 6.5%;
		}
  }  
</style>