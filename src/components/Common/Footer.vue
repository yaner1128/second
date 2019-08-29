<template>
	<div class="foots" >
		<!-- 上部分 -->
		<div class="footTop">
			<div class="topContainer">
				<h2>立即开始您的互联网营销之旅</h2>
				<div class="footContact">
					<input class="telInput" type="text" placeholder="您的称呼">
					<span class="iconfont icon1">&#xe60c;</span>
					<input class="telInput tel" type="text" name="" placeholder="输入手机号码，立即免费通话" >
					<span class="iconfont icon2">&#xe680;</span>
					<br>
					<input class="telbtn" type="submit" name="" value="免费通话">
				</div>
				<h4>可获得免费提供建站方案或免费网站诊断服务</h4>
			</div>
		</div>
		<!-- 下部分 -->
		<div class="footBottom">
			<div class="footcontainer">
				<ul>
					<li v-for="lis in Footerlist">{{lis.title}}</li>
				</ul>
				<div class="xinxi"  v-for='aboutus in aboutList'>
					<!-- 左边信息 -->
					<div>
						<p>{{aboutus.name}}</p>
						<p>电话：{{aboutus.tel}}</p>
						<p>地址：{{aboutus.address}}</p>
						<p>邮编：{{aboutus.post_code}}</p>
					</div>
					<!-- 右边信息 -->
					<div>
						<p>E-mail：{{aboutus.email}}</p>
						<p>网址：{{aboutus.url}}</p>
						<p>版权：{{aboutus.name}}</p>
						<p>备案：京ICP备11111111</p>
					</div>
					<!-- 右边二维码 -->
					<div class="codeImg">
						<img :src="aboutus.QR_code">
					</div>
				</div>
			</div>
			<!-- 最低端 -->
			<div class="Footdown">
				<div>Copyright@2018 株洲简码网络科技有限公司 All rights reserved.</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    	Footerlist:[
	        {id:'1',name:'Home',title:'首页'},
	        {id:'2',title:'|'},
	        {id:'3',name:'About',title:'关于我们'},
	        {id:'4',title:'|'},
	        {id:'5',name:'Server',title:'服务项目'},
	        {id:'6',title:'|'},
	        {id:'7',name:'Demo',title:'案例展示'},
	        {id:'8',title:'|'},
	        {id:'9',name:'News',title:'新闻动态'},
	        {id:'10',title:'|'},
	        {id:'11',name:'Contact',title:'联系我们'}
      	],
      	aboutList:[],//关于我们的信息

    };
  },

  created(){
    // console.log(this.$http);
    this.getaboutList();
  },
  methods:{
  	// 获取关于我们的数据
    getaboutList(){
      this.$http.aboutList()
      .then(res=>{
        // console.log(res);
        if(res.code==0){
          this.aboutList=res.data;
          // console.log(this.aboutList);
        }
      })
      .catch(err=>{
        console.log(err);
      })
  	},
  },
};
</script>

<style lang="css" scoped>

</style>
