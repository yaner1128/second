<template>
	<div class="outerlayer" ref='homePage'>
		<div class="textcontainer">
			<div>
				<h1 class="title">我们可以做得更好</h1>
				<h6 class="linetitle">我们为您提供更具有优势的企业网络服务平台</h6>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'FristText',
    data(){
      	return {
        	clientHeight:'',
      	}
    },
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
}
.outerlayer .textcontainer{
	position: relative;
	text-align: center;
	width: 88%;
	height: 100%;
	margin: 0 auto;
}
.textcontainer .title{
	padding:30px 5px 20px 5px;
}
.textcontainer .title:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 4px;
    background: #e35b5b;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom:70px;
   }
 .textcontainer .linetitle{
  	font-size: 18px;
    color: #727272;
    margin: 20px 0 20px 0;
  } 
</style>
