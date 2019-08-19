<template>
<div>
	<!-- 图片组件 -->
	<my-Banner />
	<!-- 按钮组件 -->
	<div class="container oneBtn">
		<ul>
			<li v-for="firstBtns in firstBtn" class="oneBtnLi">
				<my-FristButton :firstBtns='firstBtns'/>
			</li>
		</ul>
		
	</div>
	<!-- 动画组件二 -->
	<div class="container">
		<div class="secAni">
	      <ul>
	        <li v-for="subItem in functionList" class="secAniLi" @click='detailHandler'>
	           <my-SecondAnimation :subItem='subItem'/>
	        </li>
	      </ul>
		</div>
	</div>	

	<!-- 分页组件 -->
	<div class="container paging">
		<my-Paging />
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
    	firstBtn:[
    	{id:1,text:'全部'},
    	{id:2,text:'网站建设'},
    	{id:3,text:'移动APP'},
    	{id:4,text:'软件界面'},
    	{id:5,text:'互联网产品'},
    	{id:6,text:'电子商务'},
    	{id:7,text:'品牌&平面'}

    	],
    	 functionList: 
        [
          {
            desc: "数学竞赛网",
            flag: 1,
            imageUrl: require("../../assets/index (6).png")
          },
          {
            desc: "生物工程",
            flag: 2,
            imageUrl: require("../../assets/index (7).png")
          },
          {
            desc: "上海超辉",
            flag: 3,
            imageUrl: require("../../assets/index (8).png")
          },
          {
            desc: "军民追溯网",
            flag: 4,
            imageUrl: require("../../assets/index (9).png")
          },
          {
            desc: "北京赛德美",
            flag: 5,
            imageUrl: require("../../assets/index (10).png")
          },
          {
            desc: "听心悦",
            flag: 6,
            imageUrl: require("../../assets/index (11).png")
          }
        ]
    };
  },
  methods:{
    detailHandler(){
      this.$router.push({
        name:"DemoDetail"
       
    })
    }
  }
};
</script>

<style lang="css" scoped>
.oneBtn{
	margin-top: 4%;

}
.oneBtnLi{
	height: 70px;
	margin:0 1.5%;
	display: inline-block;
}
.secAniLi{
   display: inline-block;
}
.paging{
	margin-top: 4%;
	margin-bottom: 8%;
}
</style>
