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


</style>
