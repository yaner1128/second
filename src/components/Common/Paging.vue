<template>
	<div class="pagingBody">
		<div class="paging" @click='isOne'>
			<div class="btncloth">
				<button v-if='isshow' @click='prevpage'><上一页</button>
			</div>
			<ul>
				<li id="onepage" v-if='isOne' class="nn">1</li>
				<li class="nn">2</li>
				<li class="nn">3</li>
				<li class="nn">4</li>
				<li id="lastpage" class="nn">5</li>
				<li v-if='isequl'>
					<span>.&nbsp;.&nbsp;.</span>
				</li>
				<li id="allpage" v-if='isequl'>14</li>
			</ul>
			<button @click='nextpage' v-if='isequl'>下一页></button>
			<input type="text" name="" class="pageSearch" id="page">
			<button  @click='openPage'>GO</button>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Paging',
  props:['pageList'],
  data() {
    return {
    	isshow:false,
    	isequl:true,
    	allnum:2
    };
  },
  methods:{
  	openPage(){
  		var page =document.getElementById('page');
  		//删除数字最前面的0
  		page=page.value.replace( /\b(0+)/gi, ''); 
  		// 删除数字前的空格
  		page = page.replace(/\s+/g,"");
  		// console.log(page); 
  		if(page.length===0||page==0){
  			alert('内容不能为空');
  		}else{
  			console.log(page);
  		}
  	},
  	isOne(){
  		var onepage =document.getElementById('onepage').innerHTML;
  		var lastpage =document.getElementById('lastpage').innerHTML;
  		// var allpage =document.getElementById('allpage').innerHTML;
  		console.log(onepage);
  		if(onepage==1){
  			this.isshow=false;
  			// console.log("11111");
  			// return false;
  		}else{
  			this.isshow=true;
  			// console.log("02222");
  			// return true;
  		}
			console.log(lastpage);
  			// console.log(allpage);
  		if(lastpage==this.allnum){
  			
  			this.isequl=false;
  			// return false;
  		}else{
  			this.isequl=true;
  			// return true;
  		}
  	},

  	nextpage(){
        this.$router.push({
          path:this.pageList.next,
          // this.getNewsDetail();
        })
        console.log(this.pageList);
  		// var pages=document.getElementsByClassName('nn');
  		// // console.log(pages);
  		// for(let i=0;i<5;i++){
  		// 	// console.log(pages[i].innerHTML);
			 // pages[i].innerHTML=parseInt(pages[i].innerHTML)+1;
  		// 	// console.log(pages[i].innerHTML);
    //   }
        
  	},
  	prevpage(){
  		var pages=document.getElementsByClassName('nn');
  		// console.log(pages);
  		for(let i=0;i<5;i++){
  			// console.log(pages[i].innerHTML);
			pages[i].innerHTML=parseInt(pages[i].innerHTML)-1;
  			// console.log(pages[i].innerHTML);
  		}
  	}
  }
};
</script>
<style lang="css" scoped>
#onepage{
  background-color: rgb(227,91,91);
}
.pagingBody{
	width: 100%;
	height: 30px;	
}
.pagingBody .paging{
	width: 600px;
	margin:0 auto;
	text-align: center;
}

.btncloth{
	width: 72.19px;
	height: 30px;
	float: left;
}
.pagingBody .paging button{
	padding: 5px 10px;
	float: left;
	height: 30px;
	border: 1px solid #e0e0e0;
	font-size: 14px;
	background-color: #fff;
}
.pagingBody .paging>ul{
	float: left;
}
.pagingBody .paging>ul li{
	float: left;
	padding: 0 12px;
	height: 28px;
	font-size: 14px;
	line-height: 30px;
	border: 1px solid #e0e0e0;
	margin:0 3px;
}
.pageSearch{
	float: left;
	width: 30px;
	text-align: center;
	height: 28px;
	line-height: 28px;
	margin: 0 5px 0 20px;
	border: 1px solid #e0e0e0;
}
</style>
