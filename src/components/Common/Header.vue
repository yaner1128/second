<template>
 <el-container>
    <el-header height = '0px' >
        <div class="header">
            <!--导航栏logo -->
            <div class="nav-left">
                <img src="../../../static/images/logo_ecodenet.png" height="44" width="189" alt="">
            </div>
                <!-- 导航栏右侧标题 -->
            <div class="nav-right">
                <ul>
                   <li v-for='(list,index) in Headerlist' :key='list.id'>
                     <!-- a标签不进行跳转，应该使用router-link --> 
                     <router-link :to='{name:list.name}'>{{list.title}}</router-link>
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
      Headerlist:[
        {id:'1',name:'Home',title:'首页'},
        {id:'2',name:'About',title:'关于我们'},
        {id:'3',name:'Server',title:'服务项目'},
        {id:'4',name:'Demo',title:'案例展示'},
        {id:'5',name:'News',title:'新闻动态'},
        {id:'6',name:'Contact',title:'联系我们'}
      ],
    };
  },
};
</script>

<style lang="css" scoped>

.el-header{
  width: 100%;
 border-bottom: 1px solid orangered;
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
 width: 65%;
 height: 100%;
}
.nav-right ul{
   overflow: hidden;
   width: 100%;
}
.nav-right  ul li{
 float: left;
 width: 12%;
 margin: 0 5px;
 padding: 0 5px;
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
.nav-right ul li a:hover{
   background-color: orangered;
   color: #fff;
}
/*.nav-right ul li a.is-active{
    background-color: orangered;
   color: #fff;
}*/
</style>

