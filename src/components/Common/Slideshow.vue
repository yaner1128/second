<template>
<div class="slideshow"  :style="style">
  	<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
  	<el-carousel indicator-position="none" style="height:100%">
  		
      <el-carousel-item  v-for="(Item,index) in SlideShow" :key="Item.id">
      <div class="carousel-explain">
        <img :src="Item.img" alt="" >
  		<div class="">
  			<div class="italictext">
              	<p class="textp2"><span class="myAnimate bounceInDown delay0s">{{Item.title}}</span></p>
              	<p class="textp"><!--  v-html="item.txt2" --></p>
              	<img src="../../../static/images/mouse.png" style="width:41px;position:absolute;left:48%;top:55%">
        </div>
  		</div>
      </div>

      </el-carousel-item>
  	
    </el-carousel>
  
  </div>
</template>

<script>
export default {

  name: 'Slidesshow',

  data() {
    return {
      style:{
        height:'0px'
      },
      imgHeight:'',
      SlideShow:{},
    	lunboImgs:[
        {
          id:1,
          img:'../../../static/images/cover-one.jpg',
          title: '质监部门',
          txt2:
            '降低专业门槛，清晰掌握电梯运行数据'
        },
         {
          id:2,
          img:'../../../static/images/cover-two.jpg',
          src: '/images/company/v2/解决方案01-1_06.jpg',
          title: '物业部门',
          txt2:
            '降低专业门槛，清晰掌握电梯运行数据'
         },
           {
            id:3,
            img:'../../../static/images/cover-three.jpg',
            title: '生产厂家',
           	txt2:
              '降低专业门槛，清晰掌握电梯运行数据'
          }
      ]
    };
  },
  methods:{
    imgLoad() {
      this.$nextTick(function() {
        // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        this.style.height = document.documentElement.clientHeight+'px';
      });
    },
    // 获取轮播图
    getSlideShow(){
      this.$http.SlideShow()
    .then(res=>{
      // console.log(res); 
      if (res.code === 0) {
              this.SlideShow=res.data;  
              // console.log(this.SlideShow) ;
        }
      // 获取到图片后，调用this.imgLoad()方法定义图片初始高度
      this.imgLoad();
       
    }).catch(err=>{
      console.log(err);
    })
    }
  },
  created(){
    // console.log(this.$http);
    this.getSlideShow();

    // 监听窗口变化，使得轮播图高度自适应图片高度
    // window.addEventListener("resize", () => {
    //   this.imgHeight = this.SlideShow.img.height;
    // });
    
  },
};
</script>

<style lang="css" scoped>
.el-carousel__container{
    position: relative;
    height: 100%;
}
.clearfix::after{
  content: '';
  clear: both;
  display: block;
}
.slideshow{
  background-color: pink;
	position: relative;
	z-index: 0;
  height: 100%;
  /*height:imgHeight;*/
}
.el-carousel{
	position: absolute;
	width: 100%;
/*	height: 700px;*/
	 background-position: center;
}
.el-carousel__container {
    position: absolute;
    /*height: 1000px !important;*/
}

.el-carousel-item img{
	position: absolute;
	top:0;
  
	background-repeat:no-repeat; 
	background-size:100% 100%;
	-moz-background-size:100% 100%;	
	width: 100%;
}
.el-carousel__container {
    position: absolute;
    /*height: 980px;*/
}

.carousel-explain>img{
  width: 100%;
}
.italictext{
	position: absolute;
	z-index: 33;
	top:0;
	left:0;
	/*margin-top: 350px;*/
	float: left;
	width: 100%;
	height: 100%;
	margin:0 auto;
	color:#fff;
   
    background-color:rgba(0,0,0,.3);
    text-align: center;
}
.italictext .textp2{
	/*position: absolute;
	top:38%;
	left:45.3%;*/
  width:100%;
  margin-top:20%;
  float: left;
    text-align: center;
    font-weight: 700;
    font-size:38px;

}
.italictext .textp{
	position: absolute;
  float: left;
	top:46%;
	left:39.5%;
    text-align: center;
	font-size:16px ;

}
.italictext .textp,.textp2{
 /* float: left;*/

  /*width:400px;
  height:500px;*/
  animation: bounceInBelow 2.4s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
}
@keyframes bounceInBelow {
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0,25px , 0);
  }
  75% {
    transform: translate3d(0,10px , 0);
  }
  90% {
    transform: translate3d(0,5px , 0);
  }
  100% {
    transform: none;
  }
}
.italictext img{

  margin-left: 0.9%;
  /*float: left;*/
  animation: bounceIn 2s 1  cubic-bezier(0.215, 0.355, 0.610, 1.000);
}
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translate3d(0,390px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0,350px , 0);
  }
  75% {
    transform: translate3d(0,55% , 0);
  }
  90% {
    transform: translate3d(0,350px , 0);
  }
  100% {
    transform: translate3d(0,55% , 0);
  }
}
.myAnimate{
	animation-duration: 2s;
	animation-delay: .5s;
	animation-iteration-count:2; 
	
	/*animation-name:mymove;*/
}
</style>
