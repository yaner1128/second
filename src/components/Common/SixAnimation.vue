<template>
	<div class="container">
		<ul class="outer-six">
			<li class="sixli" v-for="(item,index) in sixItems" :key="item.id">
				<div class="content">
					<div class="siximg">
						<img class="clearfix" :src="item.imgSrc" >
					</div>
					<div class="text">
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
	    		imgSrc:require('../../../static/images/service_(1).png')
	    	},
	    	{
	    		id:2,
	    		txt1:'人性化',
	    		txt2:'通过色彩处理、主图创意、布局创新、版块合理规划等方式,使网站平台更利于客户浏览.',
	    		imgSrc:require('../../../static/images/service_(1).png')
	    		

	    	},
	    	{
	    		id:3,
	    		txt1:'人性化',
	    		txt2:'通过色彩处理、主图创意、布局创新、版块合理规划等方式,使网站平台更利于客户浏览.',
	    		imgSrc:require('../../../static/images/service_(1).png')
	    		

	    	},
	    	{
	    		id:4,
	    		txt1:'人性化',
	    		txt2:'通过色彩处理、主图创意、布局创新、版块合理规划等方式,使网站平台更利于客户浏览.',
	    		imgSrc:require('../../../static/images/service_(1).png')
	    		

	    	},
	    	{
	    		id:5,
	    		txt1:'人性化',
	    		txt2:'通过色彩处理、主图创意、布局创新、版块合理规划等方式,使网站平台更利于客户浏览.',
	    		imgSrc:require('../../../static/images/service_(1).png')
	    		
	    	},
	    	{
	    		id:6,
	    		txt1:'人性化',
	    		txt2:'通过色彩处理、主图创意、布局创新、版块合理规划等方式,使网站平台更利于客户浏览.',
	    		imgSrc:require('../../../static/images/service_(1).png')
	    		

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
	.outer-six{
		width: 100%;
	}
	.sixli{
		width: 27%;
		border-radius: 15px;
	  	display: inline-block;
		margin: 1.9% 3%;
	}
	.siximg{
	 overflow: hidden;
	  border: 0.2px solid white;
	}
	.siximg img{
	  cursor: pointer;
	  transition: all 0.6s;
	}
	.sixli:hover{
	 box-shadow:3px 3px 10px  10px rgba(100,100,100,0.5);
		margin-top: -10px;
	}
	.sixli:hover img{
		transform: scale(1.1);
	}
	.sixli .content{
		
	}
	img{
		width: 320px;
		float: left;

	}
	.content .text{
		background-color: #808080;
		color: #fff;
		padding: 15px;
		width: 90.5%;
		height:10%; 

	}
	.text h4{
		width: 100%;
		text-align:center;

	}
	.text p{
		width: 100%;
		text-align:center;
		text-overflow: ellipsis;
	}
</style>
