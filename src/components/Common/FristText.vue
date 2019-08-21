<template>
	<div class="outerlayer" ref='homePage'>
		<div class="textcontainer">
			<div>
				<h1 class="title">{{title}}</h1>
				<h6 class="linetitle">{{text}}</h6>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    props:{title:String,text:String},
  name: 'FristText',
    data(){
      	return {
        	clientHeight:'',
      	}
    },
    props:['title','text'],
    // mounted(){
	   //  // 获取浏览器可视区域高度
	   //  this.clientHeight = `${document.documentElement.clientHeight}`        
	   //  console.log(this.clientHeight);

	   //  window.onresize = function temp() {
	   //  	this.clientHeight = `${document.documentElement.clientHeight}`;
	   //  };
    // },
    // watch: {
    //   	// 如果 `clientHeight` 发生改变，这个函数就会运行
    //   	clientHeight: function () {
    //     	this.changeFixed(this.clientHeight);
    //   	}
    // },
    // methods:{
    //   	changeFixed(clientHeight){                        //动态修改样式
    //     	console.log(clientHeight);
    //     	this.$refs.homePage.style.height = clientHeight*0.5 +'px';
    //     	console.log(this.$refs.homePage.style.height);
    //   	},
    // },


};
</script>

<style lang="css" scoped>
.outerlayer{
	width: 100%;
	height:160px;
	text-align: center;
    margin-top: 30px;
}
.outerlayer .textcontainer{
	position: relative;
	text-align: center;
	width: 88%;
	height: 100%;
	margin: 0 auto;

}
.textcontainer h1,h6{
    display: inline-block;
}
.textcontainer h1{
    border-right: 3px solid  rgb(57,78,121);
}
.textcontainer h6{
    font-weight: 500;
}
.textcontainer .title{

	margin:50px 10px 40px 5px;
    padding-right: 20px;
}
/*.textcontainer .title:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 4px;
    background: #e35b5b;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom:70px;
   }*/
 .textcontainer .linetitle{
  	font-size: 18px;
    color: #727272;
    margin: 20px 0 20px 0;
  } 
</style>
