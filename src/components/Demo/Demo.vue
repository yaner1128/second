<template>
<div>
	<!-- 图片组件 -->
	<my-Banner />
	<!-- 按钮组件 -->
	<div class="container oneBtn">
		<ul>
			<li v-for="(firstBtns,index) in firstBtn" class="oneBtnLi"  @click='addBgc(index,firstBtns.id)' >
				<my-FristButton :firstBtns='firstBtns' :class="{active:index==current}"/>
			</li>
		</ul>
	</div>
	<!-- 动画组件二last -->
	<div class="containers">
		<div class="secAni">
	      <ul>
	        <li v-for="subItem in cases"  class="secAniLi" @click='detailHandler(subItem.id)'>
	           <my-lastAnimation :subItem='subItem' />
	        </li>
	      </ul>
		</div>
	</div>	

    <el-row :gutter="10" style="margin-left: 0px; margin-right: 0px;">
       <el-col :xs=" {span: 1, offset: 0}">
        <div class="paging">
         <el-pagination 
            hide-on-single-page
            @prev-click="prevPage(pageId)"
            @next-click="nextPage(pageId)"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageId"
            :page-sizes="[6]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pages.count">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  
	<!-- 脚部组件 -->
	<Footer />
</div>
	
	
</template>

<script>
export default {

  name: 'About',

  data() {
    return {
      currentPage:3,// 当前页码
       pageSize:6,// 每页大小
       total:1000,
      Pages:1,
      pageId:1,
      categoryList:[],
      categoryId:'',
      cases:{},
      pages:{},
      current:0,
    	firstBtn:[
        {id:0,text:'全部'},
      	{id:1,text:'网站建设'},
      	{id:2,text:'移动APP'},
      	{id:3,text:'小程序'},
      	{id:4,text:'互联网产品'}
    	],
      pageItem:[],
    	
    };
  },
  computed:{
    countpages(){
      this.Pages=Math.ceil(this.pages.count/6);
      for(let i=1;i<=this.Pages;i++){
          this.pageItem.push(i);
      }  
    return this.Pages
    }
  },
  methods:{
    //? 长度改变----改变每页显示的条数的时候  自动触发
       handleSizeChange(val){
          
       },
       // 当前改变----当前页码改变之后，触发这个函数
       handleCurrentChange(val,pageId){
         if(this.pages.next==null){
          
          }else{
            this.pageId=val;
            this.getCase(pageId);
          }      
       },

       detailHandler(id){
          this.$router.push({
            name:"DemoDetail",
            params:{
              casesId:id
            }
        })
    },
    // 按钮分类
    addBgc(index,id){
      this.current=index;
      if(id==0){
        this.categoryId='';
      }else{
        this.categoryId=id;  
      }
      this.pageId=1;
      this.getCase();     
    },
    // 下一页
    nextPage(pageId){
      if(this.pages.next==null){
        this.$message({
          message: '这已经是最后一页了哦',
          type: 'warning'
        });
      }else{
        this.pageId++;
        this.getCase(pageId);
      }      
    },
    //上一页
    prevPage(pageId){
      if(this.pages.previous==null){
         this.$message({
          message: '这已经是第一页了哦',
          type: 'warning'
        });
      }else{
        this.pageId--;
        this.getCase(pageId);
      }      
    },
    // 获取案例
    getCase(){
      this.$http.Case(this.categoryId,this.pageId)
      .then(res=>{
        // console.log(res); 
        if (res.code === 0){
                this.pages=res.data;
                this.cases=res.data.results;  
                console.log(this.cases);
          }
      }).catch(err=>{
        console.log(err);
      })
    },
  },
  created(){
    this.getCase();
  },
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){ 
  .oneBtn{
     width:92%;
    margin:0 auto;
    margin-top: 3%;
  }
  .oneBtnLi{
    width: 19%;
    height: 60px;
    margin:0 0.5%;
    display: inline-block;
  }
  .oneBtnLi .active{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .secAniLi{
     display: inline-block;
  }
  .paging{
    width:88%;
    text-align: center;
    height:30px;
    margin:50px auto;
  }
  .containers{
    width: 100%;
  }
  .secAni{
    /*width: 88%;*/
    margin: 0 auto;
  }
  .secAni ul{
    width:290px;
    margin :0 auto;
  }
  .secAni ul li{
      padding: 0 0.2%;
      width: 100%;
      margin:0 auto;
      text-align: center;
  }
} 
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
  .oneBtn{
    width:88%;
    margin:0 auto;
    margin-top: 5%;
  }
  .oneBtn>ul{
    padding-left: 2%;
  }
  .oneBtnLi{
    width: 15%;
    height: 70px;
    margin:0 1.5%;
    display: inline-block;
  }
  .oneBtnLi .active{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .secAniLi{
     display: inline-block;
  }
  .paging{
    text-align: center;
    margin-top: 4%;
    margin-bottom: 8%;
  }

  .paging ul,.paging li{
    display:inline-block;
  }
  .paging li{
    width:30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    border:1px solid rgb(60,111,160);
    border-radius: 5px;
    cursor: pointer;
  }
  .paging li:hover{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .containers{
    width: 100%;
  }
  .secAni{
    width: 88%;
    margin: 0 auto;
  }
  .secAni ul{
    width:100%;
    margin :0 auto;
  }
  .secAni ul li{
      padding: 0 2.2%;
      width: 28%;
      margin:0 auto;
      text-align: center;
  }
}
/*真的普通pc*/
@media screen and (min-width: 1024px) and (max-width: 1365px){
  .oneBtn{
    width: 70%;
    margin:0 auto;
    margin-top: 3%;
  }
    .oneBtn ul{
      text-align: center;
    }
  .oneBtnLi{
    height: 65px;
    margin:0 1.5%;
    display: inline-block;
  }
  .oneBtnLi .active{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .secAniLi{
     display: inline-block;
  }
  .paging{
    text-align: center;
    margin-top: 4%;
    margin-bottom: 8%;
  }

  .paging ul,.paging li{
    display:inline-block;
  }
  .paging li{
    width:30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    border:1px solid rgb(60,111,160);
    border-radius: 5px;
    cursor: pointer;
  }
  .paging li:hover{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .containers{
    width: 100%;
  }
  .secAni{
    width: 88%;
    margin: 0 auto;
  }
  .secAni ul{
    width:100%;
    margin :0 auto;
  }
  .secAni ul li{
      margin: 1% 2%;
      width: 29%;
      text-align: center;
  }
  .secAni ul li .main{
    width: 100%;
  }
}
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
  .oneBtn{
    width:60%;
    margin:0 auto;
    margin-top: 3%;
  }
  .oneBtnLi{
    height: 70px;
    margin:0 1.5%;
    display: inline-block;
  }
  .oneBtnLi .active{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .secAniLi{
     display: inline-block;
  }
  .paging{
    text-align: center;
    margin-top: 4%;
    margin-bottom: 8%;
  }

  .paging ul,.paging li{
    display:inline-block;
  }
  .paging li{
    width:30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    border:1px solid rgb(60,111,160);
    border-radius: 5px;
    cursor: pointer;
  }
  .paging li:hover{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .containers{
    width: 100%;
  }
  .secAni{
    width: 88%;
    margin: 0 auto;
  }
  .secAni ul{
    width:1086px;
    margin :0 auto;
  }
  .secAni ul li{
      padding: 0 11px;
      width: 340px;
      margin:0 auto;
      text-align: center;
  }
} 
/*超大pc*/
@media screen and (min-width: 1903px){
  .oneBtn{
    width:65%;
    margin:0 auto;
    margin-top: 3%;
  }
  .oneBtn ul{
    text-align: center;
  }
  .oneBtnLi{
    height: 70px;
    margin:0 1.5%;
    display: inline-block;
  }
  .oneBtnLi .active{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .secAniLi{
    display: inline-block;
  }
  .paging{
    text-align: center;
    margin-top: 4%;
    margin-bottom: 8%;
  }
  .paging ul,.paging li{
    display:inline-block;
  }
  .paging li{
    width:30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    border:1px solid rgb(60,111,160);
    border-radius: 5px;
    cursor: pointer;
  }
  .paging li:hover{
    background-color: rgb(60,111,160);
    color: #fff;
  }
  .containers{
    width: 100%;
  }
  .secAni{
    width: 70%;
    margin: 0 auto;
  }
  .secAni ul{
    width:100%;
    margin :0 auto;
  }
  .secAni ul li{
    padding: 0 4.1%;
    width: 25%;
    margin:0 auto;
    text-align: center;
  }
}
</style>
