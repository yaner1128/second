<template>
  <el-container @mousewheel='enter'>
    <el-header style="height: 0px" >
      <div class="header" :class='{bgs:nobgc}'>
        <!--导航栏logo -->
        <div class="nav-left">
          <img src="../../../src/assets/logo-final.png" height="44" width="189" alt="">
        </div>
        <div v-if="isindex">
              <!-- 是首页 -->
          <div class="nav-right" v-if='isshow'>
            <ul>
              <li v-for='(list,index) in Headerlist' :key='list.id' @click='bgcAdd(index)' :class="{ active:index==current}" >
                <router-link :to='{name:list.name}'>{{list.title}}</router-link>
              </li>
            </ul>
           <!--  <div class="small" v-show='isnone'>
                <span class="iconfont" @click='open' >&#xe63b;</span>
            </div> -->
          </div>
             <!-- 小图标 -->

          <div v-else class="small" v-show='isnone'>
            <span class="iconfont" @click='open' >&#xe63b;</span>
          </div>
                    <!-- 小图标展开的 -->
          <div class="bigPage" v-if='isopen' @touchmove.prevent :style='style'>
            <span class="iconfont tuichu" @click='close()' v-show='issmall'>&#xe616;</span>
            <ul>
              <li v-for='(list,index) in Headerlist'  >
                <router-link :to='{name:list.name}' class='lis' @click.native='close(list.flag)'>{{list.title}}</router-link>
              </li>
            </ul>
          </div>
          <div class="phone">
              <div  class="small" >
                <span class="iconfont" @click='open' >&#xe63b;</span>
              </div>
                      <!-- 小图标展开的 -->
              <div class="bigPage" v-if='isopen' @touchmove.prevent :style='style'>
                <span class="iconfont tuichu" @click='close()' v-show='issmall'>&#xe616;</span>
                <ul>
                  <li v-for='(list,index) in Headerlist'  >
                    <router-link :to='{name:list.name}' class='lis' @click.native='close(list.flag)'>{{list.title}}</router-link>
                  </li>
                </ul>
              </div>
          </div>
          
        </div>

        <div v-else>
          <div class="nav-right">
            <ul>
              <li v-for='(list,index) in Headerlist' :key='list.id' @click='bgcAdd(index)' :class="{ active:index==current}" >
                <router-link :to='{name:list.name}'>{{list.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      style:{
        height:'',
      },
      screenWidth: document.body.clientWidth, 
      isnone:true,
      issmall:false,
      isshow:false,
      ishome:true,
      scroll:0,
      isopen:false,
      nobgc:true,
      isclose:false,
      current:0,
      Headerlist:[
        {flag:0,id:1,name:'Home',title:'首页'},
        {flag:1,id:2,name:'About',title:'关于我们'},
        {flag:2,id:3,name:'Server',title:'服务项目'},
        {flag:3,id:4,name:'Demo',title:'案例展示'},
        {flag:4,id:5,name:'News',title:'新闻动态'},
        {flag:5,id:6,name:'Contact',title:'联系我们'}
      ],
    };
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮 滚动事件

    this.$nextTick(function() {
        // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        this.style.height = document.documentElement.clientHeight+'px';
    });
  },
  methods:{
    handleScroll(){
      // console.log(this.screenWidth);
      // 页面滚动距顶部距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scroll = scrollTop - this.i;
        this.i = scrollTop;

        if(this.isindex==true){
            if(this.scroll>=0){
                this.isshow=true;
                this.nobgc=false
              }else if(scrollTop==0){
                this.isshow=false;
                this.nobgc=true;
              }else{
                this.isshow=true;
                this.nobgc=false;
              }
        }else{
          this.nobgc=false;
        }     

        event.stopPropagation(); 
   },
    bgcAdd(index){
      this.current=index;
      // event.stopPropagation();
    },
    enter(){
      this.isshow=true;
      event.stopPropagation();
    },
    open(){
      this.isopen=true;
      this.isnone=false;
      this.issmall=true;

      event.stopPropagation();
      var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动

    },
    close(val){
      // console.log(val);
      if (val==0){
          this.nobgc=true;
          this.isshow=false;
      }
      else{
        this.nobgc=false;
      }
        // this.current=val;
        this.isopen=false;
        this.isnone=true;
        this.issmall=false;
        event.stopPropagation();
         var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
    }
  },
  computed:{
    isindex(){
      // console.log(this.$store.state.isindex);
      this.ishome=this.$store.state.isindex;
      // console.log(this.$store.state.isindex);//为true代表是首页
      if (this.ishome && this.scroll==0) {
          this.nobgc=true;
      }
      else{
        this.nobgc=false;
      }

      for(let i=0;i<6;i++){
        if(this.Headerlist[i].name==this.$store.state.isname){
            if(this.$store.state.isname=="Home"){
              this.nobgc=true;
              this.isshow=false;
            }else{
            }
            this.current=this.Headerlist[i].id-1;
        }else{
          if(this.$store.state.isname=='newsdetail'){
              this.current=4;
          }
          if(this.$store.state.isname=='DemoDetail'){
              this.current=3;
          }
        }
      }
      return this.$store.state.isindex
    }
  }
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){ 
 .active{
    background-color: #89B3FC;
    border-bottom: 2px solid #89B3FC;
    /*color: #fff;*/
  }
  .active>a{
    color: #fff !important;
  }
  .el-container{
    width: 100%;
  }
  .el-header{
    padding: 0;
    width:97.915%;
    position: fixed;
    z-index: 1;
  }
  .header{
    float: left;
    z-index: 100;
    background-color: rgba(60,60,60,.35);
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
  }
  .bgs{
    background-color: rgba(49,49,49,0);
  }
  /*左边logo*/
  .nav-left{
    float:left;
    height: 100%;
    width:20%;
    z-index: 100;
    padding:0 5%;
  }
  .nav-left img{
    height:100%;
  }

  /*右边标题*/
  .nav-right{
    display: none;
    float: left;
    width: 70%;
    height: 100%;
  }
  .nav-right ul{
    display:none;
    float: left;
    width: 80%;
    height:58px;
    padding-left: 13%;
    /*display: none;*/
  }
  .nav-right  ul li{
    float: left;
    width: 16%;
    height:100%;
    text-align: center;
  }
  .twosmall{
    display: none;
  }
  .nav-right ul li a{
   /* background-color: pink;*/
    color: rgba(218,218,218,.92);
    width: 100%;
    height:100%;
    display: inline-block;
    float: left;
    z-index: 100;
    
  }
  .small,.bigPage{
    display: none;
  }
  .phone .small{
    width: 10%;
    height: 60px;
    float: right;
    margin-right: 6%;
  }
  .phone .small span{
    font-size: 40px;
    margin-right: 100%;
    color:rgb(80,131,180);
    cursor: pointer;
  }
  .phone .bigPage{
    width: 100%;
    height:auto;
    padding:100px 0;
    background-color: rgba(0,0,0,0.91);
    z-index:1000;
    text-align: center;
  }
  .phone .bigPage ul li{
    height:60px;
    font-size: 24px;
    margin: 25px 0;
  }
  .phone .bigPage ul li .lis{
    width: 100%;
    color: rgb(80,131,180);
  }
  .phone .tuichu{
    position: absolute;
    font-size: 50px;
    color: rgb(80,131,180);
    top: 0;
    right: 75px;
    cursor: pointer;
  }

}
</style>