<template>
<div class="container">
	<ul class="outer">
		<li  class="lii" v-for="(item,index) in fourContents" :key="item.id">
			<div class="four">
				<div class="fourimg">
					<img :src="item.imgSrc">
				</div>
				<div class="fourcode">
					<br><br>
					<i class="iconfont"  v-html='item.fonts'></i><br>
					<span v-html='item.txt1'></span>
					<p v-html='item.txt2'></p>
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
	    		imgSrc:require('../../../static/images/about (1).jpg')
	    	},
	    	{
	    		id:2,
	    		fonts:'&#xe61c;',
	    		txt1:'质量观',
	    		txt2:'产品质量是保障企业长期发展和创立品牌的前提条件。高标准、 精细化、求原创，全程监控，确保产品质量。',
	    		imgSrc:require('../../../static/images/about (4).png')

	    	},
	    	{
	    		id:3,
	    		fonts:'&#xe664;',
	    		txt1:'市场观',
	    		txt2:' 以客户为中心，研究市场，了解客户需求的变化趋势，关注竞争者在满足顾客期望方面的表现，创造相对竞争优势。',
	    		imgSrc:require('../../../static/images/about (2).png')

	    	},
	    	{
	    		id:4,
	    		fonts:'&#xe663;',
	    		txt1:'发展观',
	    		txt2:'实现企业、员工与社会之间价值的高度和谐，致力于所有者权益的充分实现,与员工共同成长，为社会作出贡献。',
	    		imgSrc:require('../../../static/images/about (3).jpg')

	    	}

    	]
    };
  },
  methods:{
  	
  }
};
</script>

<style lang="css" scoped>
.container{
	/*position: relative;*/
	perspective: 1000;
	transform-style: preserve-3d;
	height: 305px;
	
}
.outer{
	width:100%;
	height: 100%;
/*	background-color: red;*/

}
.lii{
	width: 265px;
	height: 100%;
	display: inline-block;
	padding: 0 15px;
/*	background-color: green;*/

}
.four{
	transition:all 1s;
    transform-style: preserve-3d;
	position: relative;
	/*margin-right: 20px;*/
	
	/*display:inline-block;*/
	
}
.fourimg img{
	width: 265px;
	height: 305px;
	
}
.fourimg img{
	backface-visibility: hidden;
	position: absolute;
	transition: all 1s;
	transform-style: preserve-3d;
}

.four:hover .fourimg img{
	/*transform: scale(1,-1);*/
	transform:rotate3d(1,1,0,180deg);
}
.four:hover .fourcode{
	/*transform:rotate3d(1,1,0,90deg);*/
	/*transform: rotateY(-180deg);*/
}
.fourimg img{
	z-index: 4;
}
.fourcode{
	width: 265px;
	height:305px;
	background-color: #DF715C;
	color: #fff;
	padding:0px;
}
.fourcode .text{
	/*-webkit-background-clip: text;*/
    /*display: none;*/
	/*opacity: 0;      事先规定文字的状态是不显示的*/
    /*animation: fade-in 1s ease 0s 1;*/
}
/*.active{
	-webkit-background-clip: text;
	-webkit-animation: shinetext 1s 0s ease-in-out;
    -webkit-animation-fill-mode: forwards;
	color: #fff;
}*/

/*@-webkit-keyframes shinetext{
	 0% {
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
        color: #fff;
        -webkit-background-clip: text;
    }
     35% {
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
        color:  #fff;
        -webkit-background-clip: text;
    }
	 77% {
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%);
        color:  #fff;
        -webkit-background-clip: text;
    }
	 100% {
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%);
        color:  #fff;
        -webkit-background-clip: text;
    }



}*/
.iconfont,span{
	display: block;
	
}
.fourcode .iconfont{
	font-size: 38px;
	width: inherit;
	text-align: center;
}
.fourcode span{
	font-size: 25px;
	width: inherit;
	text-align: center;
}
.fourcode p{
	font-size:18px; 
	/*padding-top: 20px;*/
	padding: 20px 30px 0;
	display:-webkit-box;
	--webkit-box-orient: vertical;
	-webkit-line-clamp:5;	
}
</style>
