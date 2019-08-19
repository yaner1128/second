<template>
	<div class="FristNews">
		<!-- 左边日期 -->
		<div class="Fdata">
			<p class="Fmoths">{{firstNews.month}}</p>
			<p class="Fdays">{{firstNews.day}}</p>
		</div>
		<!-- 右边新闻 -->
		<div class="Fnews">
            <h4 class="Newstitle">{{firstNews.newtitle}}</h4>
            <p class="Newstext">
            	{{firstNews.newtext}}
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

    };
  },
};
</script>

<style lang="css" scoped>
.FristNews{
	
	width: 550px;
	height: 90px;
	padding: 10px;
}
.FristNews:hover{
	box-shadow: 3px 3px 10px  10px rgba(180,180,180,0.5);
}
.FristNews:hover .Newstitle{
	color: rgb(227,91,91);
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
.Fdays{
	margin-top: 5px;
	font-size: 36px;
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
