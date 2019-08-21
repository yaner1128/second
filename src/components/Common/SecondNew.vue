<template>
	<div class="container">
		<ul class="outerNew">
			<li class="secondli">
				<div class="newimg clearfix">
					<img :src="item.imgSrc">
				</div>
				<div class="newcontent">
					<h2>{{item.txt1}}</h2>
					<p>{{item.txt2}}</p>
				</div>
				<div class="newsmore">
					<span class="iconfont detail" @click='viewDetails'>查看详情&#xe684;</span>
					<span class="iconfont browse">&#xe64a;{{item.date}}&nbsp;&nbsp;&nbsp;&#xe666;{{item.num}}</span>
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
  	viewDetails(){
  		this.$router.push({
          name:'detail',
        })
  	}
  },
  props:['item'],
};
</script>

<style lang="css" scoped>
.clearfix::after{
	content: '';
	clear: both;
	display: block;
}
.outerNew{
	width: 100%;
}
.secondli{
	display: inline-block;
	width: 100%;
	cursor: pointer;
	margin-bottom: 3%;
}
.secondli:hover{

 box-shadow:3px 3px 10px  10px rgba(180,180,180,0.5);
}
.secondli:hover h2{
	color: rgb(227,91,91);
}
.newimg{
	float: left;
	width: 21%;
	vertical-align:middle;
	padding: 1%;
}
.newimg img{
	width: 90%;
	
}
.newcontent{
	margin-left: 22%;
	padding: 1%;
}
.newcontent h2{
	margin-bottom:1%;
	color: #333;
    font-weight: bold;
    font-size: 18px;
}

.newcontent p{
	
	text-overflow: ellipsis;
	color: #a3a3a3;
	font-size:16px;
}
.newsmore{
	margin-left: 22%;
	padding: 1%;
	color: #a3a3a3;
	font-size:16px;
	margin-top: -0.5%;
}
.newsmore .detail{

}
.newsmore .browse{
	margin-left: 69%;
}
</style>