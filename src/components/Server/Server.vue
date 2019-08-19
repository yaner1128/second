<template>
	<div>
		<my-Banner />

		<!-- 文字组件一 -->
		<div class="onetext">
			<my-FristText :title='titleone' :text='textone'/>
		</div>

		<!-- 动画组件五 -->
		<div class="FiveAni">
			<ul>
				<li v-for='item in FiveList' :key='id'>
					<my-FiveAnimation :item='item' />
				</li>
			</ul>
		</div>

		<!-- 文字组件一 -->
		<div class="twotext">
			<my-FristText :title='titletwo' :text='texttwo'/>
		</div>
		
		<!--动画组件六 -->
		<div>
			<ul>
				<li>
					<my-SixAnimation/>
				</li>
			</ul>
		</div>


		<div class="tt"></div>
		<!-- 文字组件一 -->
		<div class="twotext">
			<my-FristText :title='titlethree' :text='textthree'/>
		</div>

		<!-- 动画组件三 -->
		<div class="ThreeAni">
			<ul>
				<li v-for='thirdAnimation in thirdAnimat'>
					<my-ThirdAnimation :thirdAnimation='thirdAnimation'/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {

  name: 'About',

  data() {
    return {
    	titleone:'我们可以做得更好',
    	textone:'我们为您提供更具有优势的企业网络服务平台',

    	FiveList:[
    		{id:1,title:'高端企业制造研发',pone:'企业高端定制网站设计',ptwo:'彰显品牌形象'},
    		{id:2,title:'APP项目定制开发',pone:'基于 iOS / Android 应用开发',ptwo:'掌控智能终端时代'},
    		{id:3,title:'交互H5设计开发',pone:'QUERY动态特效QUERY动态特效',ptwo:'兼容手机、IPAD等触屏设备'},
    		{id:4,title:'小程序/公众号/Wap设计开发',pone:'定制手机网站 / 微网站制作',ptwo:'布局移动互联网'},
    	],

    	titletwo:'创意与创新的桥梁',
    	texttwo:'根据一定要求，完成视觉传达的目的',

    	thirdAnimat:[
	        {id:1,icon1:'&#xe697;',icon2:'&#xe600;',icon3:'&#xe603;',p1:'触及视觉灵魂的设计趋势',p2:'精心布局的用户体验',p3:'毫无顾忌地通过任何终端',p4:'呈现在客户的眼前'},
	        {id:2,icon1:'&#xe604;',icon2:'&#xe6b7;',icon3:'&#xe72e;',p1:'Html5 + CSS3 响应式布局',p2:'卓越的浏览器兼容性',p3:'因为高端，所以出众',p4:''},
	        {id:3,icon1:'&#xe75e;',icon2:'&#xe64d;',icon3:'&#xe695;',p1:'基于 B/S 架构的网站建设',p2:'无障碍的跨平台应用',p3:'无须用户下载安装即可使用',p4:'云端管理，轻松维护'}
        ],

    	titlethree:'我们的服务品质',
    	textthree:'不同的媒介，拥有同样的精彩',

    };
  },
};
</script>

<style lang="css" scoped>
.tt{
	height: 500px;
	width: 100%;
	background-color: pink;
}

.FiveAni{
	width: 100%;
	height: 300px;
	padding: 30px 0;
}
.FiveAni ul{
	width: 88%;
	margin: 0 auto;
	height:300px;
}
.FiveAni li{
	float: left;
	width: 200px;
	margin: 0 48px;
}
.ThreeAni{
	width: 100%;
	height: 400px;
	/*background-color: red;*/
}
.ThreeAni ul{
	width: 88%;
	height:400px;
	margin: 0 auto;
	padding:30px 0;
/*	background-color: green;*/
}
.ThreeAni ul li{
	float: left;
	margin: 0 47px;
}
</style>
