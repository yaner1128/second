<template>
	<div>
		<my-Banner />

		<!-- 按钮组件 -->
		<div class="newsBtn container">
			<ul>
				<li v-for='(btns,index) in btnList' :key='btns.id' @click='addBgc(index,btns.id)'>
					<my-FristButton :firstBtns='btns' :class="{active:index==current}"  />
				</li>
			</ul>
		</div>
		<!-- 新闻组件二 -->
		<div class='newscont'>
			<ul>
				<li v-for='(item,id) in newsList' @click='viewDetails(item.id,item.date)'>
					<my-SecondNew  :item='item' />
				</li>
			</ul>
		</div>

		<el-row :gutter="10" style="margin-left: 0px; margin-right: 0px;">
			<el-col :xs=" {span: 1, offset: 0}">
				<div class="pageing">
					<el-pagination
						hide-on-single-page
						@prev-click="prve(page)"
						@next-click="next(page)"
						@current-change="handleCurrentChange"
					    :current-page="page"
					    :page-sizes="[4]"
					    :page-size="nummber"
					    layout="total, sizes, prev, pager, next, jumper"
					    :total="pagenum">
		    		</el-pagination>
				</div>
			</el-col>
		</el-row>

		<!-- 脚部组件 -->
		<div>
			<Footer />
		</div>
	</div>
</template>

<script>
export default {

  	name:'About',

	data(){
	    return{
	    	arrcount:[],
	    	arr:[],
	    	allpage:'',//页面总数
	    	noprve:false,
	    	nonext:true,
	    	nummber:4,//每页新闻数量
	    	categoryId:'',
	    	newsList:[],//获取新闻信息
	    	pagenum:0,
	    	current:0,
	    	page:1,
	    	btnList:[
	    		{id:0,text:'所有新闻'},
	    		{id:1,text:'企业新闻'},
	    		{id:2,text:'企业公告'},
	    		{id:3,text:'行业新闻'}
	    	],
	    };
	  },
	  computed:{
	  	allpages(){
	  		// console.log(this.pagenum);
	  		var n=this.pagenum/this.nummber;//页数2.25
  			n=Math.ceil(n);//3
  			this.allpage=n;

  			for(let i=1;i<=n;i++){
				this.arr.push(i);
				// console.log(this.arr);
			}
			this.arrcount=this.arr;
	  		return n;
	  	},
	  },
  	methods:{
  		handleCurrentChange(val){
  			this.page=val;
           	// console.log("当前改变："+val)
           	this.getnewsList(this.page);
       },
  		prve(page){
  			console.log(page);
  			if(page==2){
  				this.noprve=false;
  				this.nonext=true;
  			}else{
  				this.noprve=true;
  			}
  			this.page--;
  			this.getnewsList(page);
  		},
  		next(page){
  			var n=this.pagenum/this.nummber;//页数2.25
  			n=Math.ceil(n);//3
  			
  			// console.log(n);//3
  			// console.log(page);//2
  			if(page>=n-1){
  				this.nonext=false;
  				this.noprve=true;
  			}else{
  				this.nonext=true;
  				this.noprve=true;
  			}
  			this.page++;
  			this.getnewsList(page);
  		},
	  	addBgc(index,id){
	  		this.current=index;
	  		// console.log(id);
	  		if(id==0){
	  			this.categoryId='';
	  		}else{
	  			this.categoryId=id;
	  		}
	  		this.page=1;
	  		this.getnewsList();
	  		this.nonext=true;
			this.noprve=false;	
	  	},
	  	//获取新闻
  		getnewsList(){
	  		this.$http.newsList(this.categoryId,this.page)
	      	.then(res=>{
	        	// console.log(res);
		        if(res.code==0){
		          	this.newsList=res.data.results;
		          	this.pagenum=res.data.count;
		          	// console.log(this.pagenum);
		          	if(this.pagenum<=4){
			  			this.nonext=false;
			  			this.noprve=false;
  					}
		        }
	      	})
	      	.catch(err=>{
	        	console.log(err);
	      	})
	  	},
	  	viewDetails(id,dates){
	  		this.$router.push({
		        name:'newsdetail',
		        params:{
	          		newsId:id,
	          		dates:dates
	          	}
        	})
  		}
  	},
  	created(){
  		this.getnewsList();
  	},
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){ 
 .pageing{
  width:88%;
  text-align: center;
  height:30px;
  margin:50px auto;
 }
 .newsBtn .active{
  background-color: rgb(60,111,160);
  color: #fff;
 }
 .newsBtn{
  width: 88%;
  height: 50px;
  padding: 60px 0 0 0;
 }
 .newsBtn>ul{
  margin: 0 auto;
  height: 50px;
 }
 .newsBtn>ul>li{
  display: inline-block;
  width: 66px;
  height: 45px;
  margin: 0 8px;
 }
 .newscont{
  width: 100%;
  height: auto;
 }
 .newscont>ul{
  width: 88%;
  height: auto;
  margin: 0 auto;
 }
 .newscont>ul>li{
  width: 100%;
  margin: 0 auto;
  height: 250px;
  
 }
 /*.pagedivce{
  width: 100%;
  height: 50px;
  margin: 30px 0 50px 0;
 }*/
}  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1365px){ 
	.pageing{
		width: 100%;
		text-align: center;
		height:30px;
		margin:50px 0;
	/*	background-color: green;*/
	}
	.newsBtn .active{
		background-color: rgb(60,111,160);
		color: #fff;
	}
	.newsBtn{
		width: 100%;
		height: 50px;
		padding: 30px 0 30px 0;
		/*background-color: red;*/
	}
	.newsBtn>ul{
		width: 88%;
		margin: 0 auto;
		height: 50px;
	/*	background-color: green;*/
	}
	.newsBtn>ul>li{
		float: left;
	    width: 120px;
	    height: 45px;
	    margin: 0 1%;
	    margin-right: 20px;
	}
	.newscont{
		width: 100%;
		height: auto;
	}
	.newscont>ul{
		width: 88%;
		height: auto;
		margin: 0 auto;
	}
	.newscont>ul>li{
		width: 100%;
		margin: 0 auto;
		height: 180px;
		/*background-color: red;*/
	}
	.pagedivce{
		width: 100%;
		height: 50px;
		margin: 30px 0 50px 0;
	}
}
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
	.pageing{
		width: 100%;
		text-align: center;
		height:30px;
		margin:50px 0;
	/*	background-color: green;*/
	}
	.newsBtn .active{
		background-color: rgb(60,111,160);
		color: #fff;
	}
	.newsBtn{
		width: 100%;
		height: 50px;
		padding: 60px 0 40px 0;
		/*background-color: red;*/
	}
	.newsBtn>ul{
		width: 768px;
		margin: 0 auto;
		height: 50px;
	/*	background-color: green;*/
	}
	.newsBtn>ul>li{
		float: left;
		width: 132px;
		height: 45px;
		margin: 0 30px
	}
	.newscont{
		width: 100%;
		height: auto;
	}
	.newscont>ul{
		width: 70%;
		height: auto;
		margin: 0 auto;
	}
	.newscont>ul>li{
		width: 100%;
		margin: 0 auto;
		height: 200px;
		/*background-color: red;*/
	}
	.pagedivce{
		width: 100%;
		height: 50px;
		margin: 30px 0 50px 0;
	}
} 
/*超大pc*/
@media screen and (min-width: 1903px){
	.pageing{
		width: 100%;
		text-align: center;
		height:30px;
		margin:50px 0;
	/*	background-color: green;*/
	}
	.newsBtn .active{
		background-color: rgb(60,111,160);
		color: #fff;
	}
	.newsBtn{
		width: 100%;
		height: 50px;
		padding: 60px 0 40px 0;
		/*background-color: red;*/
	}
	.newsBtn>ul{
		width: 768px;
		margin: 0 auto;
		height: 50px;
	/*	background-color: green;*/
	}
	.newsBtn>ul>li{
		float: left;
		width: 132px;
		height: 45px;
		margin: 0 30px
	}
	.newscont{
		width: 100%;
		height: auto;
	}
	.newscont>ul{
		width: 70%;
		height: auto;
		margin: 0 auto;
	}
	.newscont>ul>li{
		width: 100%;
		margin: 0 auto;
		height: 200px;
		/*background-color: red;*/
	}
	.pagedivce{
		width: 100%;
		height: 50px;
		margin: 30px 0 50px 0;
	}
}
</style>
