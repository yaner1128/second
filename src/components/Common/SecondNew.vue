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
 
</style>