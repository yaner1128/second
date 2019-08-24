<template>
  <el-container @mousewheel='enter'>
    <el-header height = '0px' >
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
          </div>
             <!-- 小图标 -->

          <div v-else class="small" v-show='isnone'>
            <span class="iconfont" @click='open' >&#xe63b;</span>
          </div>
                    <!-- 小图标展开的 -->
          <div class="bigPage" v-if='isopen' @touchmove.prevent>
            <span class="iconfont tuichu" @click='close()' v-show='issmall'>&#xe616;</span>
            <ul>
              <li v-for='(list,index) in Headerlist' @click='close(index)' >
                <router-link :to='{name:list.name}' class='lis' >{{list.title}}</router-link>
              </li>
            </ul>
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
        {id:1,name:'Home',title:'首页'},
        {id:2,name:'About',title:'关于我们'},
        {id:3,name:'Server',title:'服务项目'},
        {id:4,name:'Demo',title:'案例展示'},
        {id:5,name:'News',title:'新闻动态'},
        {id:6,name:'Contact',title:'联系我们'}
      ],
    };
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮 滚动事件
  },
  methods:{
    handleScroll(){
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
      event.stopPropagation();
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
      console.log(val);
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
      if (this.ishome && this.scroll==0) {
          this.nobgc=true;
      }
      else{
        this.nobgc=false;
      }
       for(let i=0;i<5;i++){
        if(this.Headerlist[i].name==this.$store.state.isname){
            if(this.$store.state.isname=="Home"){
              this.nobgc=true;
              this.isshow=false;
            }
            this.current=this.Headerlist[i].id-1;
        }
      }
      return this.$store.state.isindex
    }
  }
};
</script>

<style lang="css" scoped>
.active{
  /*background-color: orangered;*/

 border-bottom: 2px solid #89B3FC;

  /*color: #fff;*/
}
.el-header{
  width: 100%;
/* border-bottom: 1px solid orangered;*/
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
 /*padding-left:  20px ;*/
}
.bgs{
  background-color: rgba(49,49,49,0);
}
/*左边logo*/
.nav-left{
 float:left;
 height: 100%;
 /*width: 0%;*/
  z-index: 100;
  padding-left: 81px;
}
.nav-left img{
 height:100%;
}

/*右边标题*/
.nav-right{
 float: right;
 width: 60%;
 height: 100%;
}
.nav-right ul{
   /*overflow: hidden;*/
   width: 100%;
   height:58px;
}
.nav-right  ul li{
 float: left;
 width: 12%;
/* margin: 0 5px;*/
 /*padding: 0 5px;*/
 height:100%;
 text-align: center;
}
.nav-right ul li a{
color: rgba(218,218,218,.92);
 width: 100%;
 height:100%;
 display: inline-block;
  float: left;
  z-index: 100;
}
/*.nav-right ul li a:hover{
   background-color: orangered;
   color: #fff;
}*/
.small{
      width: 45px;
    height: 60px;
    float: right;
    right: 65px;
    top: 0;
}
.small span{
  font-size: 40px;
  float: right;
  padding-right: 75px;
  color:rgb(80,131,180);
  cursor: pointer;
}
.bigPage{
  width: 100%;
  height:auto;
  padding:100px 0;
  background-color: rgba(0,0,0,0.91);
  z-index:1000;
  text-align: center;
}
.bigPage ul li{
  height:60px;
  font-size: 24px;
  margin: 25px 0;
}
.bigPage ul li .lis{
  width: 100%;
  color: rgb(80,131,180);
}
.tuichu{
    position: absolute;
    font-size: 50px;
    color: rgb(80,131,180);
    top: 0;
    right: 75px;
    cursor: pointer;
}

/*@media screen and (max-width: 300px) {
    .nav-right{
        display: none;
    }
}*/

</style>