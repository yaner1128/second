<template>
	<!-- <div class="ban">
      <my-Banner />
    </div> -->
<div class="slideshow">
	<el-carousel indicator-position="none" class='change'>
    <el-carousel-item v-for="(item,index) in lunboImgs" :key="item.id">
    <div class="carousel-explain">
      <img :src="item.imgSrc" alt="">
		<div class="bannercode">
			<div class="italictext">
            	<p class="textp2">{{item.txt}}</p>
            	<p class="textp" v-html="item.txt2"></p>
            	<img src="../../../static/images/mouse.png">
       		 </div>
		</div>
		
    </div>

    </el-carousel-item>
	
  </el-carousel>
  <div class="bannerbottom">
	
  </div>
</div>
  

</template>

<script>

export default {

  name: 'Home',
  
    
  data() {
    return {
    	lunboImgs:[
        {
          id:1,
          imgSrc:'../../../static/images/cover-one.jpg',
          txt: '质监部门',
          txt2:
            '建立无纸化的电子档案，数据处理提高效率<br>所有电梯年检定时提醒，状态全程跟踪反馈<br>'

        },
         {
          id:2,
          imgSrc:'../../../static/images/cover-two.jpg',
          src: '/images/company/v2/解决方案01-1_06.jpg',
          txt: '物业部门',
          txt2:
            '降低专业门槛，清晰掌握电梯运行数据<br>'
         },
           {
            id:3,
            imgSrc:'../../../static/images/cover-three.jpg',
            txt: '生产厂家',
         	txt2:
            '建立销售产品资产管理平台，产品运行过程可视化'
          }
      ],
      show:true
    };
  },
 //  methods:{
 //  	enterHandler(){
 //      this.show = ! this.show;
 //    },
 //    leaveHandler(){
 //      this.show = ! this.show;
 //    }
	
	// }
};
</script>

<style lang="css" scoped>
.slideshow{
	position: relative;

	z-index: -3;
	/*background-image: url(../../../static/images/banner.jpg);*/
	
    /*background-position: center;*/
    
	height: 100%;
}
.el-carousel{
	position: absolute;
	width: 100%;
	
	 background-position: center;
}
.change /deep/.el-carousel__container {
    position: absolute;
    height: 1000px;
}
.el-carousel-item img{
	position: absolute;
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	width: 100%;
}
.el-carousel__container {
    position: absolute;
    height: 980px;
}
.bannercode{
	/*width: 100%;*/
	height: 1000px;
	}
.italictext{
	position: absolute;
	z-index: 33;
	top:0;
	left:0;
	/*margin-top: 350px;*/
	float: left;
	width: 100%;
	height: 1000px;
	margin:0 auto;
	color:#fff;
    font-size:30px;
    background-color:rgba(0,0,0,.3);
}
.italictext .textp2{
	position: absolute;
	top:40%;
	left:45%;
}
.italictext .textp{
	position: absolute;
	top:44%;
	left:30%;
}
.ban{
	/*position: relative;
	z-index:100;*/
}
.ban >>> .bannerimg{
      
      
     /* height: auto;*/
    
  }
</style>
