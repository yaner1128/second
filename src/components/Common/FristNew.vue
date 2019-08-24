<template>
	<div class="FristNews">
		<!-- 左边日期 -->
		<div class="Fdata">
			<p class="Fmoths">{{month}}月</p>
			<p class="Fdays">{{moment(firstNews.date).format('DD')}}</p>
		</div>
		<!-- 右边新闻 -->
		<div class="Fnews">
            <h4 class="Newstitle">{{firstNews.title}}</h4>
            <p class="Newstext">
            	{{firstNews.content}}
            </p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'FristNew',
  props:["firstNews"],
  data() {
    return {
    	month:0,
    	months:['一','二','三','四','五','六','七','八','九','十','十一','十二'],
    };
  },
  created(){
  	this.month=this.moment(this.firstNews.date).format("MM");
  	this.month=this.month.replace( /\b(0+)/gi, ''); 
  	this.month=this.months[this.month-1];
  	console.log(this.month);
  }
};
</script>

<style lang="css" scoped>
.FristNews{
	cursor: pointer;
	width: 550px;
	height: 90px;
	padding: 10px;
}
.Newstitle{
	white-space:nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.FristNews:hover{
	box-shadow: 3px 3px 10px  10px rgba(180,180,180,0.5);
}
.FristNews:hover .Newstitle{
	color: rgb(60,111,160);
}
.FristNews .Fdata{
	float: left;
	border: 2px solid #ccc;
	width: 86px;
	height: 86px;
	margin-right: 20px;
	text-align: center;
}
.FristNews .Fdata p{
    color: #606060;
}
.Fmoths{
	font-size: 16px;
	margin-top: 10px;
}
.FristNews .Fdata .Fdays{
	margin-top: 5px;
	font-size: 36px;
	color: rgb(60,111,160);
}

.FristNews .Fnews{
	float: left;
	width: 440px;
	height: 90px;
	color: #333;
}
.Fnews .Newstitle{
	font-size: 16px;
    font-weight: bold;
   margin-bottom: 10px;
    padding:10px 0;
}
.Fnews .Newstext{
	font-size: 14px;
	/*height: 45px;*/
    /*line-height: 22px;*/
	/*不允许换行*/
	/*white-space: nowrap;*/
	/*超出部分变成省略号*/
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
</style>
