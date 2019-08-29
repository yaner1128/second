<template>
  <div class="about">
    <!-- 图片 -->
    <div class="banners">
      <my-Banner/>
    </div>

    <!-- 文字组件一 -->
    <div class="onetext">
      <my-FristText :title='titleone' :text='textone'/>
    </div>

    <!-- 内容1 -->
  <div class="bgcs" v-for='aboutus in aboutList'>
        <div class="ontextContainer">
        <!-- 左边图片 -->
        <div class="AboutImg">
          <img src="../../assets/about2.jpg">
        </div>
        <!-- 右边文字 -->
        <div class="AboutText" v-html='aboutus.content'></div>
      </div>
  </div>

    <!-- 文字组件一 -->
    <div class="onetext">
      <my-FristText :title='titletwo' :text='texttwo'/>
    </div>

    <!-- 动画组件4 -->
    <div class="AboutFourAni">
      <my-FourthAnimation/>
    </div>

    <!-- 脚部组件 -->
    <div>
      <Footer />
    </div>  
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      aboutList:[],
      FristText:[
            {id:1,titles:'关于我们',texts:'我们为您提供更具有优势的企业网络服务平台'},
            // {id:2,text:'',text2:''},
        ],
        titleone:'关于我们',
        textone:'我们为您提供更具有优势的企业网络服务平台',

        titletwo:'我们的态度',
        texttwo:'忠诚、奉献、责任、感恩',
    };
  },
  created(){
    // console.log(this.$http);
    this.getaboutList();
  },
  methods:{
    getaboutList(){
      this.$http.aboutList()
      .then(res=>{
        // console.log(res);
        if(res.code==0){
          this.aboutList=res.data;
          console.log(this.aboutList);
        }
      })
      .catch(err=>{
        // console.log('00000');
        console.log(err);
      })
    },
  },
};
</script>

<style lang="css" scoped>
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
  .about{
    width: 100%;
  }
  .about .onetext{
    margin:50px 0 20px 0;
  }
  .ontextContainer{
    width: 92%;
    height: 100%;
    margin: 0 auto;
  }
  .ontextContainer .AboutImg{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 40%;
    height: 100%;
    float: left;
    overflow: hidden;
  }
  .ontextContainer .AboutImg img{
    height: 100%;
    /*width: 100%;*/
    /*margin-top: 3%;*/
  }
  .ontextContainer .AboutText{
    width: 55%;
    margin:2.5%;
    /*padding-top: 50px;*/
    float: left;
    color: #e0e0e0;
    /*background-color: none !important;*/
  }
  .ontextContainer .AboutText p{
    margin-bottom: 30px;
    font-size: 14px;
  }
  .AboutFourAni{
    padding-bottom: 50px;
  }
  .bgcs{
    width: 100%;
    height:280px;
    background: url(../../assets/about.png) no-repeat;
    background-size: 100%;
  }
}
 /*我的电脑*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
  .about{
    width: 100%;
  }
  .about .onetext{
    margin:50px 0 20px 0;
  }
  .ontextContainer{
    width: 78%;
    height: 300px;
    margin: 0 auto;
  }
  .ontextContainer .AboutImg{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  /*  width: 30%;*/
    height: 100%;
    float: left;
  }
  .ontextContainer .AboutImg img{
    height: 100%;
    width: 100%;
    /*margin-top: 3%;*/
  }
  .ontextContainer .AboutText{
    width: 45%;
    margin:0 3.5%;
    padding-top: 50px;
    float: left;
    color: #e0e0e0;
    background-color: none !important;
  }
  .ontextContainer .AboutText p{
    margin-bottom: 30px;
    font-size: 14px;
  }
  .AboutFourAni{
    padding-bottom: 50px;
  }
  .bgcs{
    width: 100%;
    height:300px;
    background: url(../../assets/about.png) no-repeat;
    background-size: 100%;
  }
} 
/*超大pc*/
@media screen and (min-width: 1903px){
  .about{
    width: 100%;
  }
  .about .onetext{
    margin:50px 0 20px 0;
  }
  .ontextContainer{
    width: 70%;
    height: 300px;
    margin: 0 auto;
  }
  .ontextContainer .AboutImg{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  /*  width: 30%;*/
    height: 100%;
    float: left;
  }
  .ontextContainer .AboutImg img{
    height: 100%;
    width: 100%;
    /*margin-top: 3%;*/
  }
  .ontextContainer .AboutText{
    width: 55%;
    margin-left: 7%;
    padding-top: 50px;
    float: left;
    color: #e0e0e0;
    background-color: none !important;
  }
  .ontextContainer .AboutText p{
    margin-bottom: 30px;
    font-size: 14px;
  }
  .AboutFourAni{
    padding-bottom: 50px;
  }
  .bgcs{
    width: 100%;
    height:300px;
    background: url(../../assets/about.png) no-repeat;
    background-size: 100%;
  }
}
</style>
