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

</style>
