<template>
<div class="slideshow"  :style="style">
  	<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
  	<el-carousel indicator-position="none" style="height:100%">
  		
      <el-carousel-item  v-for="(Item,index) in SlideShow" :key="Item.id">
      <div class="carousel-explain"  style="height:100%">
        <img :src="Item.img" alt=""  style="height:100%">
  		<div class="">
  			<div class="italictext">
              	<p class="textp2"><span class="myAnimate bounceInDown delay0s">{{Item.title}}</span></p>
              	<p class="textp"><!--  v-html="item.txt2" --></p>
              	<img src="../../../static/images/mouse.png">
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
        }
      // 获取到图片后，调用this.imgLoad()方法定义图片初始高度
      this.imgLoad();
       
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  created(){
    this.getSlideShow();
  },
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){ 
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
      background-color: rgb(60,111,160);
      position: relative;
      z-index: 0;
      height: 100%;
      /*height:imgHeight;*/
    }
    .el-carousel{
      position: absolute;
      width: 100%;
    /*  height: 700px;*/
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
      object-fit:cover;
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
    .italictext img{
      width:41px;
      position:absolute;
      left:43%;
      top:55%;
    }
    .italictext .textp2{
      
        position: absolute;
        height: 100%;
        width:100%;
        top:40%;
        float: left;
        text-align: center;
        font-weight: 700;
        font-size:34px;
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
}  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
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
    /*  height: 700px;*/
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
    .italictext img{
      width:41px;
      position:absolute;
      left:46.5%;
      top:55%;
    }
    .italictext .textp2{
      position: absolute;
     height: 100%;
      width:100%;
      top:40%;
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
}
 /*真正普通pc*/
@media screen and (min-width: 1024px) and (max-width: 1365px){
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
  /*  height: 700px;*/
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
  .italictext img{
    width:41px;
    position:absolute;
    left:46.5%;
    top:55%;
  }
  .italictext .textp2{
    position: absolute;
   height: 100%;
    width:100%;
    top:40%;
    float: left;
      text-align: center;
      font-weight: 700;
      font-size:45px;

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

    margin-left: 1.5%;
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
}
 /*普通偏大pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
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
  /*  height: 700px;*/
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
  .italictext img{
    width:41px;
    position:absolute;
    left:48%;
    top:55%;
  }
  .italictext .textp2{
     position: absolute;
   height: 100%;
    width:100%;
    top:40%;
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
} 
/*超大pc*/
@media screen and (min-width: 1903px) {
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
  /*  height: 700px;*/
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
  .italictext img{
    width:41px;
    position:absolute;
    left:48%;
    top:55%;
  }
  .italictext .textp2{
     position: absolute;
   height: 100%;
    width:100%;
    top:40%;
    float: left;
      text-align: center;
      font-weight: 700;
      font-size:47px;

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
}
</style>
