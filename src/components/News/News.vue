<template>
	<div>
		<my-Banner />

		<!-- 按钮组件 -->
		<div class="newsBtn">
			<ul>
				<li v-for='(btns,index) in btnList' @click='addBgc(index)'>
					<my-FristButton :firstBtns='btns' :class="{active:index==current}" />
				</li>
			</ul>
		</div>
		<!-- 新闻组件二 -->
		<div>
			<ul>
				<li v-for='(item,index) in newList'>
					<my-SecondNew  :item='item'/>
				</li>
			</ul>
		</div>

		<!-- 分页组件 -->
		<div class="pagedivce">
			<my-Paging />
		</div>
		
		<!-- 脚部组件 -->
		<div>
			<Footer />
		</div>
	</div>
</template>

<script>
export default {

  name: 'About',

  data() {
    return {
    	current:0,
    	btnList:[
    		{id:1,text:'企业新闻'},
    		{id:2,text:'企业公告'},
    		{id:3,text:'行业新闻'}
    	],
    	newList:[
	    	{
	    		id:1,
	    		txt1:'新闻标题',
	    		txt2:'新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好',
	    		date:'2019-01-10',
	    		num:'170',
	    		imgSrc:require('../../../static/images/case_list1.png')
	    	},
	    	{
	    		id:2,
	    		txt1:'新闻标题',
	    		txt2:'新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好.',
	    		date:'2019-01-10',
	    		num:'170',
	    		imgSrc:require('../../../static/images/case_list1.png')
	    	},
	    	{
	    		id:3,
	    		txt1:'新闻标题',
	    		txt2:'新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好多好多好多很多很多很好的多好多好多好好多好多好多好多很好的何德何能字新闻内容好多好多好多好多好多好.',
	    		date:'2019-01-10',
	    		num:'170',
	    		imgSrc:require('../../../static/images/case_list1.png')
	    	}
	    ]
    };
  },
  methods:{
  	addBgc(index){
  		this.current=index;
  		console.log(index);
  		console.log(this);
  		
  	}
  }
};
</script>

<style lang="css" scoped>
.tt{
	height: 500px;
	width: 100%;
	background-color: pink;
}
.newsBtn .active{
	background-color: orangered;
	color: #fff;
}
.newsBtn{
	width: 100%;
	height: 50px;
	padding: 60px 0 40px 0;
	/*background-color: red;*/
}
.newsBtn>ul{
	width: 576px;
	margin: 0 auto;
	height: 50px;
/*	background-color: green;*/
}
.newsBtn>ul>li{
	float: left;
	width: 132px;
	height: 45px;
	margin: 0 30px
}

.pagedivce{
	width: 100%;
	height: 50px;
	margin: 30px 0 50px 0;
}
</style>
