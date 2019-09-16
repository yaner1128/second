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
					<li v-for="(lis,index) in Footerlist">
						<router-link :to='{name:lis.name}'>{{lis.title}}</router-link>
					</li>
				</ul>
				<div class="xinxi"  v-for='aboutus in aboutList'>
					<!-- 左边信息 -->
					<div class="onediv">
						<p>{{aboutus.name}}</p>
						<p>电话：{{aboutus.tel}}</p>
						<p>地址：{{aboutus.address}}</p>
						<p>邮编：{{aboutus.post_code}}</p>
					</div>
					<!-- 右边信息 -->
					<div class="twodiv">
						<p>E-mail：{{aboutus.email}}</p>
						<p>网址：{{aboutus.url}}</p>
						<p>版权：{{aboutus.name}}</p>
						<p>备案：湘ICP备19015120号-1</p>
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
	        if(res.code==0){
          		this.aboutList=res.data;
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

 /*手机*/
@media screen and (max-width: 767px){ 
	.foots{
		width: 100%;
		/*height: 615px;*/
	}
	.footTop{
		width: 100%;
		background: url(../../assets/95e6d590-4d56-4e29-ae22-4114ad323b9d.jpg) no-repeat;
		background-size:100% 100%;
		height: 200px;
		text-align: center;
	}
	.footTop .topContainer{
		width: 370px;
		margin:0 auto;
		padding-top: 12px;
		position: relative;
	}
	.footContact{
		width: 360px;
		height: 120px;
		padding: 10px 0;
		margin:0 10px;
	}
	.footContact>.icon1{
		    position: absolute;
	    font-size: 20px;
	    top: 54px;
	    left: 70px;
	    color: rgb(60,111,160);
	}
	.footContact>.icon2{
		position: absolute;
	    font-size: 20px;
	    top: 97px;
	    left: 70px;
	    color: rgb(60,111,160);
	}
	.footContact .telInput{
		height: 32px;
		width: 200px;
		border: none;
		border-radius: 8px;
		padding: 0 10px 0 40px;
	}
	.tel{
		margin: 10px 0;
	}
	.footContact .telbtn{
		    width: 250px;
	    height: 32px;
	    border: none;
	    border-radius: 8px;
	    background-color: #fff;
	    /* margin-left: 5px; */
	    color: rgb(60,111,160);
	    font-size: 14px;
	    font-weight: bold;
	    position: absolute;
	    top: 138px;
	    left: 62.5px;
	}
	.footBottom{
		background-color: #24262a;
		width: 100%;
		height: 290px;
		border-top: 2px solid #e61d13;
	}
	.footcontainer{
		width: 88%;
		margin: 0 auto;
		height: 100%;
	}
	.footBottom ul{
		display: none;
		width: 100%;
		margin:0 auto;
		padding:30px 0;
		height: 30px;
		color: #d2d2d2;
	}
	.footBottom li{
		float: left;
		width: 9%;
		text-align: center;
	}
	.footBottom .xinxi{
		width: 100%;
		margin: 0 auto;
		/*height: 160px;*/
		color:#fff;
	}
	.footBottom .xinxi>div{
		    width: 100%;
	    /*height: 160px;*/
	    float: left;
	    padding-left: 10px;
	    /* text-align: center; */
	}
	.foots .footBottom .twodiv{
		width: 67%;
	}
	.footBottom .xinxi>div>p{
		margin-top: 15px;
	}
	.footBottom .xinxi .codeImg{
		float: left;
	    width: 0;
	    margin-top: 35px;
	}
	.Footdown{
		width: 100%;
	    height: 40px;
	    background-color: #16171a;
	    color: #FFF;
	    font-size: 12px;
	}
	.Footdown>div{
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin :0 auto;
		text-align: center;
	}
}
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){ 
	.foots{
		width: 100%;
		/*height: 615px;*/
	}
	.footTop{
		width: 100%;
		background: url(../../assets/95e6d590-4d56-4e29-ae22-4114ad323b9d.jpg) no-repeat;
		background-size:100% 100%;
		height: 270px;
		text-align: center;
	}
	.footTop .topContainer{
		width: 370px;
		margin:0 auto;
		padding-top: 12px;
		position: relative;
	}
	.footContact{
		width: 360px;
		height: 140px;
		margin:20px 0;
	/*	background-color: #e61d13;*/
		padding: 10px 10px;
	}
	.footContact>.icon1{
		position: absolute;
		font-size: 28px;
		top: 72px;
		left: 20px;
		color: rgb(60,111,160);
	}
	.footContact>.icon2{
		/*float: left;*/
		position: absolute;
		font-size: 28px;
		top: 122px;
		left: 22px;
		color: rgb(60,111,160);
	}
	.footContact .telInput{
		height: 40px;
		width: 300px;
		border: none;
		border-radius: 8px;
		padding: 0 10px 0 40px;
	}
	.tel{
		margin: 10px 0;
	}
	.footContact .telbtn{
		width: 350px;
		height: 40px;
		border: none;
		border-radius: 8px;
		background-color: #fff;
		/*margin-left: 5px;*/
		color:rgb(60,111,160);
		font-size: 14px;
		font-weight: bold;
		position: absolute;
		top: 167px;
	    left: 11.5px;
	}
	.footBottom{
		background-color: #24262a;
		width: 100%;
		height: 250px;
		border-top: 2px solid #e61d13;
	}
	.footcontainer{
		width: 88%;
		margin: 0 auto;
		height: 100%;
	}
	.footcontainer>ul>li{
		cursor: pointer;
	}
	.footcontainer>ul>li a{
		color: #d2d2d2;
	}
	.footBottom ul{
		width: 100%;
		margin:0 auto;
		padding:30px 0;
		height: 30px;
		color: #d2d2d2;
	}
	.footBottom li{
		float: left;
		width: 9%;
		text-align: center;
	}
	.footBottom .xinxi{
		width: 100%;
		margin: 0 auto;
		height: 160px;
		color:#fff;
	}
	.footBottom .xinxi>div{
		width: 39%;
		height: 160px;
		float: left;
		padding-left: 10px;
	}
	.foots .footBottom .twodiv{
		width: 32%;
	}
	.footBottom .xinxi>div>p{
		margin-top: 15px;
	}
	.footBottom .xinxi .codeImg{
		width: 150px;
		text-align: center;
		padding-top: 40px;
		height: 110px;
	}

	.Footdown{
		width: 100%;
		height: 40px;
		background-color: #16171a;
		color:#FFF;
		font-size: 14px;
	}
	.Footdown>div{
		width: 88%;
		height: 40px;
		line-height: 40px;
		margin :0 auto;
		text-align: center;
	}
}
/*普通pc*/
@media screen and (min-width: 1024px) and (max-width: 1365px){ 
	.foots{
		width: 100%;
		/*height: 615px;*/
	}
	.footTop{
		width: 100%;
		background: url(../../assets/95e6d590-4d56-4e29-ae22-4114ad323b9d.jpg) no-repeat;
		background-size:100% 100%;
		height: 280px;
		text-align: center;
	}
	.footTop .topContainer{
		width: 370px;
		margin:0 auto;
		padding-top: 12px;
		position: relative;
	}
	.footContact{
		width: 360px;
		height: 140px;
		margin:20px 0;
	/*	background-color: #e61d13;*/
		padding: 10px 10px;
	}
	.footContact>.icon1{
		position: absolute;
		font-size: 28px;
		top: 72px;
		left: 20px;
		color: rgb(60,111,160);
	}
	.footContact>.icon2{
		/*float: left;*/
		position: absolute;
		font-size: 28px;
		top: 122px;
		left: 22px;
		color: rgb(60,111,160);
	}
	.footContact .telInput{
		height: 40px;
		width: 300px;
		border: none;
		border-radius: 8px;
		padding: 0 10px 0 40px;
	}
	.tel{
		margin: 10px 0;
	}
	.footContact .telbtn{
		width: 350px;
		height: 40px;
		border: none;
		border-radius: 8px;
		background-color: #fff;
		/*margin-left: 5px;*/
		color:rgb(60,111,160);
		font-size: 14px;
		font-weight: bold;
		position: absolute;
		top: 167px;
	    left: 11.5px;
	}
	.footBottom{
		background-color: #24262a;
		width: 100%;
		height: 250px;
		border-top: 2px solid #e61d13;
	}
	.footcontainer{
		width: 80%;
		margin: 0 auto;
		height: 100%;
	}
	.footcontainer>ul>li{
		cursor: pointer;
	}
	.footcontainer>ul>li a{
		color: #d2d2d2;
	}
	.footBottom ul{
		width: 100%;
		margin:0 auto;
		padding:30px 0 20px 0;
		height: 30px;
		color: #d2d2d2;
	}
	.footBottom li{
		float: left;
		width: 9%;
		text-align: center;
	}
	.footBottom .xinxi{
		width: 100%;
		margin: 0 auto;
		height: 160px;
		color:#fff;
	}
	.footBottom .xinxi>div{
		width: 39%;
		height: 160px;
		float: left;
		padding-left: 10px;
	}
	.foots .footBottom .twodiv{
		width: 32%;
	}
	.footBottom .xinxi>div>p{
		margin-top: 15px;
	}
	.footBottom .xinxi .codeImg{
		width: 150px;
		text-align: center;
		padding-top: 40px;
		height: 110px;
	}

	.Footdown{
		width: 100%;
		height: 40px;
		background-color: #16171a;
		color:#FFF;
		font-size: 14px;
	}
	.Footdown>div{
		width: 88%;
		height: 40px;
		line-height: 40px;
		margin :0 auto;
		text-align: center;
	}
}
 /*较大pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
	.foots{
		width: 100%;
		height: 615px;
	}
	.footTop{
		width: 100%;
		background: url(../../assets/95e6d590-4d56-4e29-ae22-4114ad323b9d.jpg) no-repeat;
		background-size:100% 100%;
		height: 270px;
		padding: 40px 0;
		text-align: center;
	}
	.footTop .topContainer{
		width: 370px;
		margin:0 auto;
		padding-top: 10px;
		position: relative;
	}
	.footContact{
		width: 360px;
		height: 140px;
		margin:20px 0;
	/*	background-color: #e61d13;*/
		padding: 10px 10px;
	}
	.footContact>.icon1{
		position: absolute;
		font-size: 28px;
		top: 72px;
		left: 20px;
		color: rgb(60,111,160);
	}
	.footContact>.icon2{
		/*float: left;*/
		position: absolute;
		font-size: 28px;
		top: 122px;
		left: 22px;
		color: rgb(60,111,160);
	}
	.footContact .telInput{
		height: 40px;
		width: 300px;
		border: none;
		border-radius: 8px;
		padding: 0 10px 0 40px;
	}
	.tel{
		margin: 10px 0;
	}
	.footContact .telbtn{
		width: 350px;
		height: 40px;
		border: none;
		border-radius: 8px;
		background-color: #fff;
		/*margin-left: 5px;*/
		color:rgb(60,111,160);
		font-size: 14px;
		font-weight: bold;
		position: absolute;
		top: 167px;
	    left: 11.5px;
	}
	.footBottom{
		background-color: #24262a;
		width: 100%;
		height: 250px;
		border-top: 2px solid #e61d13;
	}
	.footcontainer{
		width: 88%;
		margin: 0 auto;
		height: 100%;
	}
	.footcontainer>ul>li{
		cursor: pointer;
	}
	.footcontainer>ul>li a{
		color: #d2d2d2;
	}
	.footBottom ul{
	/*	background-color: red;*/
		width: 88%;
		margin:0 auto;
		padding:30px 0;
		height: 30px;
		color: #d2d2d2;
	}
	.footBottom li{
		float: left;
		width: 9%;
		text-align: center;
	}
	.footBottom .xinxi{
		width: 88%;
		margin: 0 auto;
		height: 160px;
		color:#fff;
	}
	.footBottom .xinxi>div{
		width: 42%;
		height: 160px;
		float: left;
		padding: 0px 0%;
	}
	.footBottom .xinxi>div>p{
		margin-top: 15px;
	}
	.footBottom .xinxi .codeImg{
		width: 150px;
		text-align: center;
		padding-top: 40px;
		height: 110px;
	}
	.Footdown{
		width: 100%;
		height: 40px;
		background-color: #16171a;
		color:#FFF;
		font-size: 14px;
	}
	.Footdown>div{
		width: 88%;
		height: 40px;
		line-height: 40px;
		margin :0 auto;
		text-align: center;
	}
} 
/*超大pc*/
@media screen and (min-width: 1903px){
	.foots{
		width: 100%;
		height: 615px;
	}
	.footTop{
		width: 100%;
		background: url(../../assets/95e6d590-4d56-4e29-ae22-4114ad323b9d.jpg) no-repeat;
		background-size:100% 100%;
		height: 270px;
		padding: 60px 0;
		text-align: center;
	}
	.footTop .topContainer{
		width: 370px;
		margin:0 auto;
		padding-top: 10px;
		position: relative;
	}
	.footContact{
		width: 360px;
		height: 140px;
		margin:20px 0;
	/*	background-color: #e61d13;*/
		padding: 10px 10px;
	}
	.footContact>.icon1{
		position: absolute;
		font-size: 28px;
		top: 72px;
		left: 20px;
		color: rgb(60,111,160);
	}
	.footContact>.icon2{
		/*float: left;*/
		position: absolute;
		font-size: 28px;
		top: 122px;
		left: 22px;
		color: rgb(60,111,160);
	}
	.footContact .telInput{
		height: 40px;
		width: 300px;
		border: none;
		border-radius: 8px;
		padding: 0 10px 0 40px;
	}
	.tel{
		margin: 10px 0;
	}
	.footContact .telbtn{
		width: 350px;
		height: 40px;
		border: none;
		border-radius: 8px;
		background-color: #fff;
		/*margin-left: 5px;*/
		color:rgb(60,111,160);
		font-size: 14px;
		font-weight: bold;
		position: absolute;
		top: 167px;
	    left: 11.5px;
	}
	.footBottom{
		background-color: #24262a;
		width: 100%;
		height: 250px;
		border-top: 2px solid #e61d13;
	}
	.footcontainer{
		width: 88%;
		margin: 0 auto;
		height: 100%;
	}
	.footcontainer>ul>li{
		cursor: pointer;
	}
	.footcontainer>ul>li a{
		color: #d2d2d2;
	}
	.footBottom ul{
	/*	background-color: red;*/
		width: 70%;
		margin:0 auto;
		padding:30px 0;
		height: 30px;
		color: #d2d2d2;
	}
	.footBottom li{
		float: left;
		width: 9%;
		text-align: center;
	}
	.footBottom .xinxi{
		width: 88%;
		margin: 0 auto;
		height: 160px;
		color:#fff;
	}
	.footBottom .xinxi>div{
		width: 25%;
	    height: 160px;
	    float: left;
	    padding-left: 11%;
	}
	.footBottom .xinxi>div>p{
		margin-top: 15px;
	}
	.footBottom .xinxi .codeImg{
		width: 150px;
		text-align: center;
		padding-top: 40px;
		height: 110px;
	}
	.Footdown{
		width: 100%;
		height: 40px;
		background-color: #16171a;
		color:#FFF;
		font-size: 14px;
	}
	.Footdown>div{
		width: 88%;
		height: 40px;
		line-height: 40px;
		margin :0 auto;
		text-align: center;
	}
}
</style>