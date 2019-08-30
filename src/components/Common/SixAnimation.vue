<template>
	<div class="sixani">
		<div class="bgimage"></div>
		<ul class="outer-six ">
			<li class="sixli" v-for="(item,index) in sixItems" :key="item.id">
				<div class="content">
					<!-- <div class="siximg">
						<img class="clearfix" :src="item.imgSrc" >
					</div> -->
					<div class="text">
						<div class="iconfont" v-html='item.icon'></div>
						<h4>{{item.txt1}}</h4>
						<p>{{item.txt2}}</p>
					</div>

				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'SixAnimation',

  data() {
    return {
    	 sixItems:[
	    	{
	    		id:1,
	    		txt1:'人性化',
	    		txt2:'通过色彩处理、主图创意、布局创新、版块合理规划等方式,使网站平台更利于客户浏览.',
	    		// imgSrc:require('../../../static/images/service_(1).png')
	    		icon:'&#xe656;'
	    	},
	    	{
	    		id:2,
	    		txt1:'交互性',
	    		txt2:'建立异步沟通系统（帮助中心、留言板、问题解答…）方便客户与网站之间',
	    		// imgSrc:require('../../../static/images/service_(2).png')
	    		icon:'&#xe60a;'
	    	},
	    	{
	    		id:3,
	    		txt1:'逻辑性',
	    		txt2:'整体网站策划流程符合客户心理，且在充分分析客户行业特征的基础上，建立网站内部功能',
	    		// imgSrc:require('../../../static/images/service_(3).png')
	    		icon:'&#xe921;'
	    	},
	    	{
	    		id:4,
	    		txt1:'营销性',
	    		txt2:'整合用户体验式浏览以及营销推广功能，从客户访问到咨询产生形成高转化率',
	    		// imgSrc:require('../../../static/images/service_(4).png')
	    		icon:'&#xe7b5;'
	    	},
	    	{
	    		id:5,
	    		txt1:'控制性',
	    		txt2:'网站各栏目及分类清晰，便于统计客户访问页面深度、停留时间、产品或服务关注度、点击...',
	    		// imgSrc:require('../../../static/images/service_(5).png')
	    		icon:'&#xe66a;'
	    	},
	    	{
	    		id:6,
	    		txt1:'界面友好性',
	    		txt2:'心理学表明，适合的界面对于客户点击欲望的提升和印象指数的提升效果明显，网站界面是...',
	    		// imgSrc:require('../../../static/images/service_(6).png')
	    		icon:'&#xe619;'
	    	}

    	]
    };
  },
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
 .sixani{
  position: relative;
 }
 .bgimage{
		width: 100%;
		height:600px;
	}
	.outer-six{
		width: 100%;
		height: auto;
		position: absolute;
		top:0;
		padding: 3% 0;
		background: url(../../../static/images/bgi_3.jpg) no-repeat fixed;
		object-fit: cover;
		background-size:100% 100%;
	}

  .sixli{
   width: 44%;
   border-radius: 15px;
     display: inline-block;
   margin: 5.2% 3%;
      z-index: 2;
  }
  .sixli:hover{
   box-shadow:3px 3px 10px  10px rgba(200,200,200,0.5);
   margin-top: -10px;
  }
  .sixli .content{
   
  }
  .content .text{
   background-color: rgba(240,240,240,.3);
   border-radius: 10px;
   color: #fff;
   padding: 4%;
     width: 92%;
     height: 100%;
     font-size: 17px;
  }
  .text .iconfont{
   width:100%;
   text-align: center;
   font-size: 43px;
   color: #2F4558;
  }
  .text h4{
   width: 100%;
   text-align:center;

  }
  .text p{
   width: 100%;
   text-align:center;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
   overflow: hidden;
  }
}  
/*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
	.clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.sixani{
		position: relative;
	}
	.bgimage{
		width: 100%;
		height:400px;
	}
	.outer-six{
		width: 100%;
		height: auto;
		/*margin: 0 6%;*/
		position: absolute;
		top:0;
		padding: 3% 0;
		background: url(../../../static/images/bgi_3.jpg) no-repeat fixed;
		/*filter: blur(0.5px);*/
		background-size:100% 100%;
	}
	.sixli{
		width: 27%;
		border-radius: 15px;
	  	display: inline-block;
		margin: 2.2% 3%;
	    z-index: 2;
	}
	.sixli:hover{
	 box-shadow:3px 3px 10px  10px rgba(200,200,200,0.5);
		margin-top: -10px;
	}
	.content .text{
		background-color: rgba(240,240,240,.3);
		border-radius: 10px;
		color: #fff;
		padding: 4%;
	    width: 92%;
	    height: 100%;
	    font-size: 17px;
	}
	.text .iconfont{
		width:100%;
		text-align: center;
		font-size: 43px;
		color: #2F4558;
	}
	.text h4{
		width: 100%;
		text-align:center;
	}
	.text p{
		width: 100%;
		text-align:center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
}
/*真的普通pc*/
@media screen and (min-width: 1024px) and (max-width: 1365px){
	.sixani{
  position: relative;
 }
 .bgimage{
  width: 100%;
   height:500px;
   background: url(../../../static/images/bgi_1.jpg) no-repeat fixed;
   filter: blur(2.5px);
   background-size:100% 100%;
 }
 .outer-six{
  width: 88%;
  height: auto;
  margin: 4% 6%;
  position: absolute;
  top:0;
  padding: 3% 0;
 }
 .sixli{
  width: 27%;
  border-radius: 15px;
    display: inline-block;
  margin: 2.2% 3%;
     z-index: 2;
 }
 .sixli:hover{
  box-shadow:3px 3px 10px  10px rgba(200,200,200,0.5);
  margin-top: -10px;
 }
 .sixli .content{
  
 }
 .content .text{
  background-color: rgba(240,240,240,.3);
  border-radius: 10px;
  color: #fff;
  padding: 4%;
    width: 92%;
    height: 100%;
    font-size: 17px;
 }
 .text .iconfont{
  width:100%;
  text-align: center;
  font-size: 43px;
  color: #2F4558;
 }
 .text h4{
  width: 100%;
  text-align:center;

 }
 .text p{
  width: 100%;
  text-align:center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
 }
}
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
	.clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.sixani{
		position: relative;
	}
	.bgimage{
		width: 100%;
		height:500px;
		background: url(../../../static/images/bgi_1.jpg) no-repeat fixed;
		filter: blur(2.5px);
		background-size:100% 100%;
	}
	.outer-six{
		width: 88%;
		height: auto;
		margin: 0 6%;
		position: absolute;
		top:0;
		padding: 3% 0;
	}
	.sixli{
		width: 27%;
		border-radius: 15px;
	  	display: inline-block;
		margin: 2.2% 3%;
	    z-index: 2;
	}
	.sixli:hover{
	 box-shadow:3px 3px 10px  10px rgba(200,200,200,0.5);
		margin-top: -10px;
	}
	.content .text{
		background-color: rgba(240,240,240,.3);
		border-radius: 10px;
		color: #fff;
		padding: 4%;
	    width: 92%;
	    height: 100%;
	    font-size: 17px;
	}
	.text .iconfont{
		width:100%;
		text-align: center;
		font-size: 43px;
		color: #2F4558;
	}
	.text h4{
		width: 100%;
		text-align:center;
	}
	.text p{
		width: 100%;
		text-align:center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
} 
/*超大pc*/
@media screen and (min-width: 1903px){
  	.clearfix::after{
		content: '';
		clear: both;
		display: block;
	}
	.sixani{
		position: relative;
	}
	.bgimage{
		width: 100%;
		height:500px;
		background: url(../../../static/images/bgi_1.jpg) no-repeat fixed;
		filter: blur(2.5px);
		background-size:100%;
	}
	.outer-six{
		width: 70%;
		height: auto;
		margin: 0 15%;
		position: absolute;
		top:0;
		padding: 3% 0;
	}
	.sixli{
		width: 27%;
		border-radius: 15px;
	  	display: inline-block;
		margin: 2.2% 3%;
	    z-index: 2;
	}
	.sixli:hover{
	 box-shadow:3px 3px 10px  10px rgba(200,200,200,0.5);
		margin-top: -10px;
	}
	.content .text{
		background-color: rgba(240,240,240,.3);
		border-radius: 10px;
		color: #fff;
		padding: 4%;
	    width: 92%;
	    height: 100%;
	    font-size: 17px;
	}
	.text .iconfont{
		width:100%;
		text-align: center;
		font-size: 43px;
		color: #2F4558;
	}
	.text h4{
		width: 100%;
		text-align:center;
	}
	.text p{
		width: 100%;
		text-align:center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
}
</style>
