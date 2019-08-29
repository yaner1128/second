<template>
<div class="container">
	<ul class="outer">
		<li  class="lii" v-for="(item,index) in fourContents" :key="item.id">
			<div class="four">
				<div class="fourimg">
					<img class="imgone" :src="item.imgSrc">
				</div>
				<div class="fourcode">
					<img class="imgtwo" :src='item.img'>
				</div>
			</div>
			
		</li>
	</ul>
	
		
	
</div>
	
</template>

<script>
export default {

  name: 'FourthAnimation',
  data() {
    return{
    	isActive:false,
    	// &#xe60d;
    	istext:true,
      fourContents:[
	    	{
	    		id:1,
	    		fonts:'&#xe60d;',
	    		txt1:'人才观',
	    		txt2:`崇尚知识 ，以人为本； 
	    			企业靠员工发展，员工靠企业立业； 
	    			先有满意的员工 , 后有满意的消费者。 &nbsp; `,
	    		imgSrc:require('../../../static/images/about (1).jpg'),
	    		img:require('../../../static/images/pan1.png')
	    	},
	    	{
	    		id:2,
	    		fonts:'&#xe61c;',
	    		txt1:'质量观',
	    		txt2:'产品质量是保障企业长期发展和创立品牌的前提条件。高标准、 精细化、求原创，全程监控，确保产品质量。',
	    		imgSrc:require('../../../static/images/about (4).png'),
	    		img:require('../../../static/images/pan2.png')

	    	},
	    	{
	    		id:3,
	    		fonts:'&#xe664;',
	    		txt1:'市场观',
	    		txt2:' 以客户为中心，研究市场，了解客户需求的变化趋势，关注竞争者在满足顾客期望方面的表现，创造相对竞争优势。',
	    		imgSrc:require('../../../static/images/about (2).png'),
	    		img:require('../../../static/images/pan3.png')

	    	},
	    	{
	    		id:4,
	    		fonts:'&#xe663;',
	    		txt1:'发展观',
	    		txt2:'实现企业、员工与社会之间价值的高度和谐，致力于所有者权益的充分实现,与员工共同成长，为社会作出贡献。',
	    		imgSrc:require('../../../static/images/about (3).jpg'),
	    		img:require('../../../static/images/pan4.png')

	    	}

    	]
    };
  },
  methods:{
  	
  }
};
</script>

<style lang="css" scoped>
 /*我的电脑*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
	.container{
		perspective: 1000;
		transform-style: preserve-3d;
		height: 370px;
		width: 78%;
	}
	.outer{
		width:100%;
		height: 100%;
	}
	.lii{
		width: 19%;
		height: 100%;
		display: inline-block;
		margin: 0 1%;
		padding: 0 2%;
		border-radius: 20px;
		overflow: hidden;
	}
	.four{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.four .fourimg .imgone{
		-webkit-transition: all 0.4s ease-in-out 0.2s;
	   -moz-transition: all 0.4s ease-in-out 0.2s;
	   -o-transition: all 0.4s ease-in-out 0.2s;
	   -ms-transition: all 0.4s ease-in-out 0.2s;
	   transition: all 0.4s ease-in-out 0.2s;
	   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
	   filter: alpha(opacity=100);
	   opacity: 1;
	}
	.fourimg{
		width: 100%;
		height:100%;
		
	}
	.fourimg .imgone{
		width: 100%;
		/*height: 100%;*/
		border-radius: 20px;
		overflow: hidden;
	}
	.fourimg .imgone{
		backface-visibility: hidden;
		position: absolute;
		transition: all 1s;
		transform-style: preserve-3d;
	}
	.four:hover .imgone{
		 -webkit-transform: scale(0);
	   -moz-transform: scale(0);
	   -o-transform: scale(0);
	   -ms-transform: scale(0);
	   transform: scale(0);
	   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
	   filter: alpha(opacity=0);
	   opacity: 0;
	   -webkit-transition-delay: 0s;
	   -moz-transition-delay: 0s;
	   -o-transition-delay: 0s;
	   -ms-transition-delay: 0s;
	   transition-delay: 0s;
	}

	.fourcode{
		width: 100%;
	    height: 100%;
		/*background-color: #DF715C;*/
		color: #fff;
		padding:0px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.fourcode .imgtwo{
	width: 100%;
		/*height: 100%;*/
		border-radius: 20px;
		overflow: hidden;
	}
	.four .fourcode{
		/*background-color: #697C8F;*/
	   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
	   filter: alpha(opacity=0);
	   opacity: 0;
	   -webkit-transform: scale(0) rotate(-180deg);
	   -moz-transform: scale(0) rotate(-180deg);
	   -o-transform: scale(0) rotate(-180deg);
	   -ms-transform: scale(0) rotate(-180deg);
	   transform: scale(0) rotate(-180deg);
	   -webkit-transition: all 0.4s ease-in;
	   -moz-transition: all 0.4s ease-in;
	   -o-transition: all 0.4s ease-in;
	   -ms-transition: all 0.4s ease-in;
	   transition: all 0.4s ease-in;
	   -webkit-border-radius: 0px;
	   -moz-border-radius: 0px;
	   border-radius: 0px;
	}
	.four:hover .fourcode{
		-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
	   filter: alpha(opacity=100);
	   opacity: 1;
	   -webkit-transform: scale(1) rotate(0deg);
	   -moz-transform: scale(1) rotate(0deg);
	   -o-transform: scale(1) rotate(0deg);
	   -ms-transform: scale(1) rotate(0deg);
	   transform: scale(1) rotate(0deg);
	   -webkit-transition-delay: 0.2s;
	   -moz-transition-delay: 0.2s;
	   -o-transition-delay: 0.2s;
	   -ms-transition-delay: 0.2s;
	   transition-delay: 0.2s;
	}
	.four .fourcode .imgtwo{
		-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
	   filter: alpha(opacity=0);
	   opacity: 0;
	   /*background: transparent;*/
	/*   margin: 20px 40px 0px 40px;*/
	   -webkit-transition: all 0.5s ease-in-out;
	   -moz-transition: all 0.5s ease-in-out;
	   -o-transition: all 0.5s ease-in-out;
	   -ms-transition: all 0.5s ease-in-out;
	   transition: all 0.5s ease-in-out;
	}

	.four:hover .imgtwo{
		-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
	   filter: alpha(opacity=100);
	   opacity: 1;
	   -webkit-transition-delay: 0.5s;
	   -moz-transition-delay: 0.5s;
	   -o-transition-delay: 0.5s;
	   -ms-transition-delay: 0.5s;
	   transition-delay: 0.5s;
	}
} 
/*超大pc*/
@media screen and (min-width: 1903px){
  	.container{
		perspective: 1000;
		transform-style: preserve-3d;
		height: 385px;
		width: 70%;
	}
	.outer{
		width:100%;
		height: 100%;
	}
	.lii{
		width: 19%;
		height: 100%;
		display: inline-block;
		margin: 0 1%;
		padding: 0 2%;
		border-radius: 20px;
		overflow: hidden;
	}
	.four{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.four .fourimg .imgone{
		-webkit-transition: all 0.4s ease-in-out 0.2s;
	   -moz-transition: all 0.4s ease-in-out 0.2s;
	   -o-transition: all 0.4s ease-in-out 0.2s;
	   -ms-transition: all 0.4s ease-in-out 0.2s;
	   transition: all 0.4s ease-in-out 0.2s;
	   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
	   filter: alpha(opacity=100);
	   opacity: 1;
	}
	.fourimg{
		width: 100%;
		height:100%;
		
	}
	.fourimg .imgone{
		width: 100%;
		/*height: 100%;*/
		border-radius: 20px;
		overflow: hidden;
	}
	.fourimg .imgone{
		backface-visibility: hidden;
		position: absolute;
		transition: all 1s;
		transform-style: preserve-3d;
	}
	.four:hover .imgone{
		 -webkit-transform: scale(0);
	   -moz-transform: scale(0);
	   -o-transform: scale(0);
	   -ms-transform: scale(0);
	   transform: scale(0);
	   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
	   filter: alpha(opacity=0);
	   opacity: 0;
	   -webkit-transition-delay: 0s;
	   -moz-transition-delay: 0s;
	   -o-transition-delay: 0s;
	   -ms-transition-delay: 0s;
	   transition-delay: 0s;
	}

	.fourcode{
		width: 100%;
	    height: 100%;
		/*background-color: #DF715C;*/
		color: #fff;
		padding:0px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.fourcode .imgtwo{
	width: 100%;
		/*height: 100%;*/
		border-radius: 20px;
		overflow: hidden;
	}
	.four .fourcode{
		/*background-color: #697C8F;*/
	   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
	   filter: alpha(opacity=0);
	   opacity: 0;
	   -webkit-transform: scale(0) rotate(-180deg);
	   -moz-transform: scale(0) rotate(-180deg);
	   -o-transform: scale(0) rotate(-180deg);
	   -ms-transform: scale(0) rotate(-180deg);
	   transform: scale(0) rotate(-180deg);
	   -webkit-transition: all 0.4s ease-in;
	   -moz-transition: all 0.4s ease-in;
	   -o-transition: all 0.4s ease-in;
	   -ms-transition: all 0.4s ease-in;
	   transition: all 0.4s ease-in;
	   -webkit-border-radius: 0px;
	   -moz-border-radius: 0px;
	   border-radius: 0px;
	}
	.four:hover .fourcode{
		-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
	   filter: alpha(opacity=100);
	   opacity: 1;
	   -webkit-transform: scale(1) rotate(0deg);
	   -moz-transform: scale(1) rotate(0deg);
	   -o-transform: scale(1) rotate(0deg);
	   -ms-transform: scale(1) rotate(0deg);
	   transform: scale(1) rotate(0deg);
	   -webkit-transition-delay: 0.2s;
	   -moz-transition-delay: 0.2s;
	   -o-transition-delay: 0.2s;
	   -ms-transition-delay: 0.2s;
	   transition-delay: 0.2s;
	}
	.four .fourcode .imgtwo{
		-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
	   filter: alpha(opacity=0);
	   opacity: 0;
	   /*background: transparent;*/
	/*   margin: 20px 40px 0px 40px;*/
	   -webkit-transition: all 0.5s ease-in-out;
	   -moz-transition: all 0.5s ease-in-out;
	   -o-transition: all 0.5s ease-in-out;
	   -ms-transition: all 0.5s ease-in-out;
	   transition: all 0.5s ease-in-out;
	}

	.four:hover .imgtwo{
		-ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
	   filter: alpha(opacity=100);
	   opacity: 1;
	   -webkit-transition-delay: 0.5s;
	   -moz-transition-delay: 0.5s;
	   -o-transition-delay: 0.5s;
	   -ms-transition-delay: 0.5s;
	   transition-delay: 0.5s;
	}
}

</style>
