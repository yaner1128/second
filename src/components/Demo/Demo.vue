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
	<!-- 动画组件二 -->
	<div class="containers">
		<div class="secAni">
	      <ul>
	        <li v-for="subItem in cases"  class="secAniLi" @click='detailHandler(subItem.id)'>
	           <my-lastAnimation :subItem='subItem' />
	        </li>
	      </ul>
		</div>
	</div>	

	<!-- 分页组件 -->
	<!-- <div class="container paging" >
		<my-Paging :Pages='Pages'/>
	</div> -->
<div class="container paging">
 <el-pagination
            hide-on-single-page
            background
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
      console.log('页数',this.Pages);
      

      for(let i=1;i<=this.Pages;i++){
          this.pageItem.push(i);
      }  
    console.log(this.pageItem);
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
      console.log('categoryId',this.categoryId);

      
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
      console.log(res); 
      if (res.code === 0){
              this.pages=res.data;
              this.cases=res.data.results;  
              console.log('````',this.pages);
        }
       
    }).catch(err=>{
      console.log(err);
    })
    },
    
  },
  created(){
    this.getCase();
    
  },
  mounted(){

  }
};
</script>

<style lang="css" scoped>


</style>
