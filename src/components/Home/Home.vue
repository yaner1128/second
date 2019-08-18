<template>
	<div>
	  	<my-Slideshow />
	  	<!-- <my-Banner /> -->
	  <div style="height:1000px;background-color:pink;width:88%;margin:0 auto"></div>
			<my-FourthAnimation />
		
	</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    	fristImgs:[
    		{id:1,imgSrc:'../../assets/turn1.png',text:'网站/商城系统定制开发'},
    		{id:2,imgSrc:'../../assets/turn2.png',text:'交互H5设计开发'},
    		{id:3,imgSrc:'../../assets/turn3.png',text:'小程序/公众号/Wap设计开发'},
    		{id:4,imgSrc:'../../assets/turn4.png',text:'APP项目定制开发'},
    	]
    }
  },

  name: 'Home',
  
  data() {
    return {
      show:true
    };
  },
};
</script>

<style lang="css" scoped>

.pp{
	width: 100%;
	height: 300px;
	background-color: pink;
}
.tt{
	width: 100%;
	height: 500px;
	background-color: blue;
}
.outbody{
	background-color: lightgray;
}
.homecontainer{
	width: 88%;
	margin: 0 auto;
	background-color:#fff;
}
.turnImg{
	width: 100%;
	height: 340px;
	margin: 20px 0;
	text-align: center;
}
.turnImg>ul{
	width: 100%;
	height: 100%;
	text-align: center;
	margin: 0 auto;
}
.turnImg>ul>li{
	width: 235px;
	height: 300px;
	padding: 10px 30px;
	float: left;
}
</style>
