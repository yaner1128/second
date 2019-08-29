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

</style>
