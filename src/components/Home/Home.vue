<template>
	<!-- <div class="ban">
      <my-Banner />
    </div> -->
<div class="mainbody">
    <!-- 轮播图 -->
  	<my-Slideshow />
  	
    
  <!-- 关于我们 -->
	<div class="aboutour clearfix container">
		<div class="left clearfix"  @mouseenter='enterHandler' @mouseleave='leaveHandler' :class='{fadeIn:isActive}'>
			<div class="title">
				<span >ABOUT</span><br>
			 关于我们
			</div>
      <div class="toolone"></div>
      <div class="tooltwo"></div>
			<div class="aboutdetail">
				<p>株洲简码网络科技有限公司是一家专注于互联网开发的高新技术公司。公司拥有一支国内高端的开发技术团队。
					以消费者需求为设计出发点，以客户利益至上为目的，一直致力于网站开发、微信开发、美工UI设计、云服务等应用。只做最赏心悦目的产品。
					通过多年的努力和积累，已助力各行各业的客户成功进入互联网的大时代。依靠积极的价值观念、先进的技术实力、灵活的合作模式，周到的贴心服务获得了客户和企业的高度赞誉
				</p>
			</div>
			<button @click='moreabout'>了解更多</button>
		</div>
		<div class="right">
			<div class="aboutimg">
				
				<img class="cimg" src="../../../static/images/home-3-689x469.png">
				<img class="bimg" src="../../../static/images/home-2-508x341.png">
				<img class="aimg" src="../../../static/images/home-1-243x199.png">

			</div>
			

		</div>
	</div>
  
<div class="oneAni">
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
</div>
    
  <!-- 文字组件一 -->
  <my-FristText :title='titletwo' :text='texttwo'/>
  
  <!-- 动画组件二 -->
  <div class="container">
    <div class="secAni">
      <ul>
        <li v-for="subItem in cases" class="secAniLi" @click='detailHandler(subItem.id)'>
           <my-SecondAnimation :subItem='subItem'/>
        </li>
      </ul>
    </div>
  </div>

  <!-- 背景图固定，文字滑动 -->
  <div class="imgfixed">
    <div class="imgcode">
        <span class="spanone">
          我们是设计师、工程师、梦想缔造者
          <p>也是您的互联网服务保障</p> 
        </span>
        <br>
        <div class="btns">
          <button class="btnOne">了解更多</button>
          <button class="btnTwo">资询我们</button>
        </div>
    </div>
  </div>
<!-- 文字组件一 -->
  <div class="textbgs">
    <my-FristText :title='titlethree' :text='textthree'/>
  </div>
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
      <li v-for='firstNews in allNewsList' class="firstNewLi" @click='viewDetails(firstNews.id)'>
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
      allNewsList:[],
      cases:{},
    	ishome:'',
      isActive:false,
      fristImgs:[
    		{id:1,imgSrc:require('../../assets/turn1.png'),text:'网站/商城系统定制开发',textcolor:'#95ADBE'},
    		{id:2,imgSrc:require('../../assets/turn2.png'),text:'交互H5设计开发',textcolor:'rgb(227,91,227)'},
    		{id:3,imgSrc:require('../../assets/turn3.png'),text:'小程序/公众号/Wap设计开发',textcolor:'rgb(74,177,254)'},
    		{id:4,imgSrc:require('../../assets/turn4.png'),text:'APP项目定制开发',textcolor:'rgb(249,158,33)'},
    	],
      titleone:'我们可以做得更好',textone:'我们为您提供更具有优势的企业网络服务平台',
      titletwo:'我们的成功案例',texttwo:'专业的团队，为您提供专业的服务',
      titlethree:'我们的服务品质',textthree:'不同的媒介，拥有同样的精彩',
      titlefour:'新闻中心',textfour:'每天都发生着不同的事，我们将为未来更加的努力！',
      thirdAnimat:[
        {id:1,icon1:'&#xe697;',icon2:'&#xe600;',icon3:'&#xe603;',p1:'触及视觉灵魂的设计趋势',p2:'精心布局的用户体验',p3:'毫无顾忌地通过任何终端',p4:'呈现在客户的眼前'},
        {id:2,icon1:'&#xe604;',icon2:'&#xe6b7;',icon3:'&#xe72e;',p1:'Html5 + CSS3 响应式布局',p2:'卓越的浏览器兼容性',p3:'因为高端，所以出众',p4:''},
        {id:3,icon1:'&#xe75e;',icon2:'&#xe64d;',icon3:'&#xe695;',p1:'基于 B/S 架构的网站建设',p2:'无障碍的跨平台应用',p3:'无须用户下载安装即可使用',p4:'云端管理，轻松维护'}
        ],
    };
  },
   mounted () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮 滚动事件
  },
  methods:{
    moreabout(){
      this.$router.push({
        name:'About'
      })
    },
  	handleScroll(){
      // 页面滚动距顶部距离
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.scroll = scrollTop - this.i;
        this.i = scrollTop;
        var la=document.getElementsByClassName('left')[0];
        var ra=document.getElementsByClassName('right')[0];
        var so=document.getElementsByClassName('spanone')[0];
        var bts=document.getElementsByClassName('btns')[0];
        this.ishome=this.$store.state.isname;
        if(this.ishome=='Home'){
            if(scrollTop>=600&&scrollTop<=1250){
                  la.setAttribute('id','leftani');
                  ra.setAttribute('id','rightani');
           }else{
            la.removeAttribute('id','leftani');
            ra.removeAttribute('id','rightani');
           }
            if(scrollTop>=2200&&scrollTop<=2900){
                  so.setAttribute('id','down');
                  bts.setAttribute('id','upward');
           }else{
            so.removeAttribute('id','down');
            bts.removeAttribute('id','upward');
           }
        }  
   },
	   enterHandler(){
      this.isActive = ! this.isActive;
    },
    leaveHandler(){
      this.isActive = ! this.isActive;
    },
    detailHandler(id){
      this.$router.push({
        name:"DemoDetail",
       params:{
          casesId:id
        }
    })
    },
	// 获取案例
    getAllCase(){
      this.$http.AllCase()
      .then(res=>{
        // console.log(res); 
        if (res.code === 0) {
                this.cases=res.data.results;  
                // console.log(this.cases);
          }
         
      }).catch(err=>{
        console.log(err);
      })
    },
    getallNewsList(){
        this.$http.allNewsList()
          .then(res=>{
            // console.log(res);
            if(res.code==0){
                this.allNewsList=res.data.results;
                // console.log(this.allNewsList);
            }
          })
          .catch(err=>{
            console.log(err);
          })
      },
    viewDetails(id){
        this.$router.push({
            name:'newsdetail',
            params:{
                newsId:id
              }
          })
      }
  },
   created(){
    this.getAllCase();
    this.getallNewsList();
  },

};
</script>

<style lang="css" scoped>

</style>

