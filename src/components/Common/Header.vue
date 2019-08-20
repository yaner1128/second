<template>
 <el-container> 
    <el-header height = '0px' >
        <div class="header" :class='{bgs:nobgc}'>

            <!--导航栏logo -->
            <div class="nav-left">
                <img src="../../../src/assets/logo.png" height="44" width="189" alt="">
            </div>
                <!-- 导航栏右侧标题 -->
            <div class="nav-right" v-if='isshow'  ><!-- v-show="this.$route.meta.show" -->
                <ul>
                   <li v-for='(list,index) in Headerlist' :key='list.id' @click='bgcAdd(index)' :class="{ active:index==current}" >
                     <!-- a标签不进行跳转，应该使用router-link --> 
                     <router-link :to='{name:list.name}' exact>{{list.title}}</router-link>
                    </li>
                </ul>
            </div>
            <!-- 小图标 -->
            <div v-if='!isshow' class="small">
              <span class="iconfont" @click='open'>&#xe64a;</span>
            </div>
            <!-- 小图标展开的 -->
            <div class="bigPage" v-if='isopen'>
              <span class="tuichu" @click='close'>X</span>
              <ul>
                <li v-for='(list,index) in Headerlist' @click='close(index)' >
                  <router-link :to='{name:list.name}' class='lis'>{{list.title}}</router-link>
                </li>
              </ul>
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
      isshow:false,
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
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
    var scroll=scrollTop-this.i;
    this.i = scrollTop;
    if(scroll>=0){      
      this.isshow=true;
      this.nobgc=false;
       
    }else if(scrollTop==0){  
      this.isshow=false;
      this.nobgc=true;
      }
    },
  

    bgcAdd(index){
      this.current=index;
    },
    enter(){
      console.log(this.isshow);
      this.isshow=true;
      console.log(this.isshow);
    },
    open(){
      this.isopen=true;
    },
    close(){
      this.isopen=false;
    }
  },
  
};
</script>

<style lang="css" scoped>
.active{
  /*background-color: orangered;*/
 border-bottom: 2px solid orangered;
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
  background-color: rgba(49,49,49,.55);

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

.small span{
  font-size: 50px;
  float: right;
  color:rgb(227,91,91);
  padding-right: 6%;
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
  color: rgb(227,91,91);
}
.tuichu{
  position: absolute;
  font-size: 30px;
  color: rgb(227,91,91);
  top: 0;
  right: 40px;
  cursor: pointer;
}

/*@media screen and (max-width: 300px) {
    .nav-right{
        display: none;
    }
}*/

</style>