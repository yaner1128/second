<template>
	<div class="FristNews">
		<!-- 左边日期 -->
		<div class="Fdata">
			<p class="Fmoths">二月</p>
			<p class="Fdays">23</p>
		</div>
		<!-- 右边新闻 -->
		<div class="Fnews">
            <h4 class="Newstitle">想在北京网站开发是真实的吗？</h4>
            <p class="Newstext">
            	在进行北京网站开发过程当中不仅要使得整个网站以及界面的功能实现能力强，相关使用者操作起来也需要便利。除此之外，美化网页的视....
            </p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'FristNew',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
.FristNews{
	border: 1px solid #000;
	width: 550px;
	height: 90px;
	padding: 10px;
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
    padding: 10px 0;
}
.Fnews .Newstext{
	font-size: 14px;
    line-height: 22px;
    overflow: hidden;
	/*不允许换行*/
	/*white-space: nowrap;*/
	/*超出部分变成省略号*/
	text-overflow: ellipsis;
}
</style>
