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
  	// console.log(this.month);
  }
};
</script>

<style lang="css" scoped>

</style>
