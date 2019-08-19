<template>
	<!-- <div class="ban">
      <my-Banner />
    </div> -->
<div>
    <!-- 轮播图 -->
  	<my-Slideshow />
  	
    
  <!-- 关于我们 -->
	<div class="aboutour clearfix container">
		<div class="left clearfix" @mouseenter='enterHandler' @mouseleave='leaveHandler' :class='{fadeIn:isActive}'>
			<div class="title">
				<span >ABOUT</span><br>
			 关于我们
			</div>
			<div class="aboutdetail">
				<p>株洲简码网络科技有限公司是一家专注于互联网开发的高新技术公司。公司拥有一支国内高端的开发技术团队。
					以消费者需求为设计出发点，以客户利益至上为目的，一直致力于网站开发、微信开发、美工UI设计、云服务等应用。只做最赏心悦目的产品。
					通过多年的努力和积累，已助力各行各业的客户成功进入互联网的大时代。依靠积极的价值观念、先进的技术实力、灵活的合作模式，周到的贴心服务获得了客户和企业的高度赞誉
				</p>
			</div>
			<button>了解更多</button>
		</div>
		<div class="right">
			<div class="aboutimg">
				
				<img class="cimg" src="../../../static/images/home-3-689x469.png">
				<img class="bimg" src="../../../static/images/home-2-508x341.png">
				<img class="aimg" src="../../../static/images/home-1-243x199.png">

			</div>
			

		</div>
	</div>
  <!-- 文字组件一 -->
    <my-FristText  :title='titleone' :text='textone'/>
	
  <!-- 动画组件一 -->
  <div class="container">
    <div class="fristAniouter">
      <ul>
        <li  v-for='fristImg in fristImgs' class="firstAniLi">
          <my-FristAnimation :fristImg='fristImg'/>
        </li>
      </ul>
      
    </div>
  </div>
    
  <!-- 文字组件一 -->
  <my-FristText :title='titletwo' :text='texttwo'/>
  
  <!-- 动画组件二 -->
  <div class="container">
    <div class="secAni">
      <ul>
        <li v-for="subItem in functionList" class="secAniLi">
           <my-SecondAnimation :subItem='subItem'/>
        </li>
      </ul>
     
    </div>
  </div>
 
  

  <!-- 背景图固定，文字滑动 -->
  <div class="imgfixed">
    <div class="imgcode">
        <span class="spanone">
        我们是设计师、工程师、梦想缔造者<br>也是您的互联网服务保障 
      </span>
        <br>
      <button class="btnOne">了解更多</button>
      <button class="btnTwo">资询我们</button>

    </div>
  </div>
<!-- 文字组件一 -->
  <my-FristText :title='titlethree' :text='textthree'/>
<!-- 动画组件三 -->
<div class="container">
  <ul>
    <li v-for='thirdAnimation in thirdAnimat' class="thirdAniLi">
      <my-ThirdAnimation :thirdAnimation='thirdAnimation'/>
    </li>
  </ul>
  
</div>
  <!-- 文字组件一 -->
  <my-FristText :title='titlefour' :text='textfour'/>
  <!-- 新闻组件一 -->
  <div class="container firstNews">
    <ul>
      <li v-for='firstNews in firstNew' class="firstNewLi">
         <my-FristNew :firstNews='firstNews'/>
      </li>
    </ul>
   
  </div>
  <!-- 脚部 -->
  <Footer />
</div>
</template>

<script>

export default {

  name: 'Home',
  
    
  data() {
    return {
    	
      isActive:false,
      fristImgs:[
    		{id:1,imgSrc:require('../../assets/turn1.png'),text:'网站/商城系统定制开发',textcolor:'rgb(227,91,91)'},
    		{id:2,imgSrc:require('../../assets/turn2.png'),text:'交互H5设计开发',textcolor:'rgb(227,91,227)'},
    		{id:3,imgSrc:require('../../assets/turn3.png'),text:'小程序/公众号/Wap设计开发',textcolor:'rgb(74,177,254)'},
    		{id:4,imgSrc:require('../../assets/turn4.png'),text:'APP项目定制开发',textcolor:'rgb(249,158,33)'},
    	],
      titleone:'我们可以做得更好',textone:'我们为您提供更具有优势的企业网络服务平台',
      titletwo:'我们的成功案例',texttwo:'专业的团队，为您提供专业的服务',
      titlethree:'我们的服务品质',textthree:'不同的媒介，拥有同样的精彩',
      titlefour:'新闻中心',textfour:'每天都发生着不同的事，我们将为未来更加的努力！',
      functionList: 
        [
          {
            desc: "数学竞赛网",
            flag: 1,
            imageUrl: require("../../assets/index (6).png")
          },
          {
            desc: "生物工程",
            flag: 2,
            imageUrl: require("../../assets/index (7).png")
          },
          {
            desc: "上海超辉",
            flag: 3,
            imageUrl: require("../../assets/index (8).png")
          },
          {
            desc: "军民追溯网",
            flag: 4,
            imageUrl: require("../../assets/index (9).png")
          },
          {
            desc: "北京赛德美",
            flag: 5,
            imageUrl: require("../../assets/index (10).png")
          },
          {
            desc: "听心悦",
            flag: 6,
            imageUrl: require("../../assets/index (11).png")
          }
        ],
        thirdAnimat:[
        {id:1,icon1:'&#xe697;',icon2:'&#xe600;',icon3:'&#xe603;',p1:'触及视觉灵魂的设计趋势',p2:'精心布局的用户体验',p3:'毫无顾忌地通过任何终端',p4:'呈现在客户的眼前'},
        {id:2,icon1:'&#xe604;',icon2:'&#xe6b7;',icon3:'&#xe72e;',p1:'Html5 + CSS3 响应式布局',p2:'卓越的浏览器兼容性',p3:'因为高端，所以出众',p4:''},
        {id:3,icon1:'&#xe75e;',icon2:'&#xe64d;',icon3:'&#xe695;',p1:'基于 B/S 架构的网站建设',p2:'无障碍的跨平台应用',p3:'无须用户下载安装即可使用',p4:'云端管理，轻松维护'}
        ],
        firstNew:[
        {id:1,month:'二月',day:'23',newtitle:'想在北京网站开发是真实的吗？',newtext:'在进行北京网站开发过程当中不仅要使得整个网站以及界面的功能实现能力强，相关使用者操作起来也需要便利。除此之外，美化网页的视lalalalallalalllabal'},
        {id:2,month:'二月',day:'28',newtitle:'想在北京网站开发是真实的吗？',newtext:'在进行北京网站开发过程当中不仅要使得整个网站以及界面的功能实现能力强，相关使用者操作起来也需要便利。除此之外，美化网页的视lalalalallalalllaballllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'},
        {id:3,month:'四月',day:'03',newtitle:'想在北京网站开发是真实的吗？',newtext:'在进行北京网站开发过程当中不仅要使得整个网站以及界面的功能实现能力强，相关使用者操作起来也需要便利。化网页的视lalalalallalalllabal'},
        {id:4,month:'五月',day:'13',newtitle:'想在北京网站开发是真实的吗？',newtext:'在进行北京网站开发过程当中不仅要使得整个网站以及界面的功能实现能力强，相关使用者操作起来也需要便利。'},

        ]
    };
  },
  methods:{
  	
	enterHandler(){
      this.isActive = ! this.isActive;
    },
    leaveHandler(){
      this.isActive = ! this.isActive;
    }
	
  }
};
</script>

<style lang="css" scoped>
.clearfix::after{
	content: '';
	clear: both;
	display: block;
}

.left .title{
  font-size: 34px;
  font-weight: 550;
  margin-top: 24%;
}
.left .title span{
  font-size: 54px;
  font-weight: 750;
  color: rgb(227,91,91);
}
.left .aboutdetail{
  padding: 27px 0;
  color: #2B2929;
}
.left button{
  width: 300px;
  height: 80px;
  border-radius: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color:rgb(227,91,91) ;
  color: #FFF;
  font-weight: 500;
  font-size: 15px;
  margin-left: 12.5%;
  margin-top: 5%;
}
.left button:hover{
  background-color:rgb(210,80,80);
  color: #FFF ;
}
.left{
	float: left;

  width:400px;
  height:500px;
	animation: bounceInLeft 2s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
}
@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  100% {
    transform: none;
  }
}
.right{
	height: inherit;
  width: 66%;
  float: right;
	/*animation: bounceInRight 2s 2 cubic-bezier(0.215, 0.355, 0.610, 1.000);*/
}
@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(1300px, 0, 0);
  }
  75% {
    transform: translate3d(800px, 0, 0);
  }
  90% {
    transform: translate3d(500px, 0, 0);
  }
  100% {
    transform: none;
  }
}
.aboutimg{
	position: relative;
	height: 500px;
}
.aimg{
	position: absolute;
	bottom:0%;
	right: 66%;
	width: 26%;
	animation: bounceInRight 0.6s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);
}
.bimg{
	position: absolute;
	bottom:0%;
	right: 36%;
	width: 58%;
	animation: bounceInRight 1.2s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);

}
.cimg{
	position: absolute;
	bottom:0%;
	right: 0%;
	width: 72%;
	animation: bounceInRight 2s 1 cubic-bezier(0.215, 0.355, 0.610, 1.000);

}
.fristAniouter{
  margin-top: 2%;
}
.firstAniLi{
   display: inline-block;
    margin:0  3.23%;
}
.secAniLi{
   display: inline-block;
}
.imgfixed{
  width: 100%;
  height: 500px;
  margin-top: 4%;
  background:url("../../../static/images/5b46b68b4b320.jpg") no-repeat fixed ;
  background-size:100% 100%;
  /*z-index:-1;*/
}
.imgcode{
  width:100%;
  height: 500px;
  background-color: rgba(44,44,44,.3);
  text-align: center;
}
.imgcode span{
  text-align: center;
  height: 200px;
  line-height: 190px;
  color: #fff;
  font-size: 39px;
}

.imgcode button{
  width: 260px;
  height: 80px;
  border-radius: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color:rgb(227,91,91) ;
  color: #FFF;
  font-size:24px;
  margin:0 3%; 
}
.imgcode button:hover{
  background-color:#FFF;
  color: rgb(227,91,91) ;
}
.thirdAniLi{
  display: inline-block;
  /*width:80%;*/
  width:inherit;
  margin:0 4%;
}
.firstNewLi{
  display: inline-block;
  margin: 1% 0.5%;
}
.firstNews{
  margin-bottom: 7%;
}
</style>

