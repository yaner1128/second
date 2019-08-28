<template>
	<div>
		<!-- 图片组件 -->
		<my-Banner />
		<!-- 文字组件一 -->
		<my-FristText  :title='titleone' :text='textone'/>
		<!-- 联系方式 -->
		<div class="container contactway"  v-for='aboutus in aboutList'>
			<ul>
				<li class="wayLi">
					<div class="iconfont icons">&#xe640;</div>
					<div class="textway">{{aboutus.address}}</div>
				</li>
				<li class="wayLi">
					<div class="iconfont icons">&#xe680;</div>
					<div class="textway">{{aboutus.tel}}</div>
				</li>
				<li class="wayLi">
					<div class="iconfont icons">&#xe614;</div>
					<div class="textway">{{aboutus.email}}</div>
				</li>
			</ul>
		</div>

		<!-- 详细联系和地图 -->
		<div class="container detailmap"  v-for='aboutus in aboutList'>
			<div class="detail">
				<h3>{{aboutus.name}}</h3>
				<strong>全国服务热线：</strong><span>{{aboutus.tel}}</span>
				<p class='ppone'>有一个品牌项目想和我们谈谈吗?让我们了解您的项目需求，这是一个良好的开始， 我们将会尽快与你取得联系。欢迎您给我们写信或是打电话，让我们听到你的声音!</p>
				<ul>
					<li><img src="../../../static/images/contact_05.png"><br><strong>公司手机站</strong></li>
					<li><img :src="aboutus.QR_code"><br><strong>公司公众号</strong></li>
				</ul>
				<div class="add">
					<p>地址：{{aboutus.address}}</p>
					<p>电话：{{aboutus.tel}}</p>
					<p>邮箱：{{aboutus.email}}</p>
				</div>
			</div>
			<div class="mapouter">
				<baidu-map  class="bm-view" style="width: 50%;" ak="frIK1cWlgoaUS5Qf0QDvKB6iujyjzxv8" :center="center" :zoom="zoom" :scroll-wheel-zoom="true"
                @click="getClickInfo" @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom">
	                <bm-view style="width: 100%; height:425px;"></bm-view>
	                <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
	                </bm-marker>
	                <bm-control :offset="{width: '10px', height: '10px'}">
	                    <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 999999}">
	                        <input type="text" placeholder="请输入搜索关键字" class="serachinput">
	                    </bm-auto-complete>
	                </bm-control>    
	                <bm-local-search :keyword="keyword" :auto-viewport="true" style="width:0px;height:0px;overflow: hidden;"></bm-local-search>
        		</baidu-map>
			</div>
		</div>

		<!-- 脚部组件 -->
		<Footer />
	</div>
</template>

<script>
 import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch, BmMarker} from 'vue-baidu-map'
export default {

  name: 'About',

  data() {
    return {
    	aboutList:[],//存储关于我们的信息
      	titleone:'联系我们',textone:'我们信仰并一直坚持，为客户打造真正有价值的互联网平台',
       showMapComponent: this.value,
        keyword: '',
        mapStyle: {
          width: '90%',
          height: this.mapHeight + 'px'
        },
        center: {lng:113.128155, lat: 27.913076},
        zoom: 15,
    };
  },
   components: {
      BaiduMap,
      BmControl,
      BmView,
      BmAutoComplete,
      BmLocalSearch,
      BmMarker
    },
    watch: {
      value: function (currentValue) {
        this.showMapComponent = currentValue
        if (currentValue) {
          this.keyword = ''
        }
      }
    },
    methods: {
      /***
       * 地图点击事件。
       */
      getClickInfo (e) {
        this.center.lng = e.point.lng
        this.center.lat = e.point.lat
      },
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()
      },
      // 获取关于我们的数据
      getaboutList(){
      this.$http.aboutList()
      .then(res=>{
        console.log(res);
        if(res.code==0){
          this.aboutList=res.data;
          console.log(this.aboutList);
        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
    },

   created(){
    // console.log(this.$http);
    this.getaboutList();
  },
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){ 
	.serachinput {
        width: 300px;
        box-sizing: border-box;
        padding: 9px;
        border: 1px solid #dddee1;
        line-height: 20px;
        font-size: 16px;
        height: 38px;
        color: #333;
        position: relative;
        border-radius: 4px;
        -webkit-box-shadow: #666 0px 0px 10px;
        -moz-box-shadow: #666 0px 0px 10px;
        box-shadow: #666 0px 0px 10px;
    }
.contactway{
	height: 260px;
}
.wayLi{
    display: inline-block;
    margin: 2% 3%;
    width: 100%;
    height: 100%;
}
.icons{
    border: 3px solid rgb(31,49,93);
    border-radius: 13px;
    width: 55px;
    height: 55px;
    font-size: 28px;
    text-align: center;
    line-height: 55px;
    color: rgb(31,49,93);
    margin: 0% auto;
}
.icons:hover{
	color:  #fff;
	background-color:rgb(31,49,93);
}
.textway{
	font-weight: 550;
	font-size:15px;
	width:100%;
	text-align:center;
	color:rgb(60,111,160);
}
.detail{
	width:100%;
}
.detail h3{
	font-size: 25px;
	font-weight: 500;
	margin:3% 0;
	font-weight: bold;
}
.detail strong{
	font-size: 16px;
	
}
.detail span{
	font-size: 16px;
	font-weight: 550;
	color: rgb(227,91,91);
	

}
.detail>.ppone{
	margin:3% 0;
	color: #969292;
}
.detail ul>li{
	display:inline-block;
	margin:2% 3%;
}
.detail .add{
	font-size:14px;
	color: rgb(74,74,74);
	margin-top:5%;
}
.detail .add>p{
	/*display: inline-block;*/
	margin-bottom: 10px;
}
.detailmap{
	position: relative;
	margin-top: 15%;
	margin-bottom: 5%;
}
.bm-view{
	display:none;
	position: absolute;
	float: right;
	top:0;
	right: 0;
}

.mapouter{
	/*display: inline-block;*/
	
}
  }  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1365px){ 
	.serachinput {
        width: 300px;
        box-sizing: border-box;
        padding: 9px;
        border: 1px solid #dddee1;
        line-height: 20px;
        font-size: 16px;
        height: 38px;
        color: #333;
        position: relative;
        border-radius: 4px;
        -webkit-box-shadow: #666 0px 0px 10px;
        -moz-box-shadow: #666 0px 0px 10px;
        box-shadow: #666 0px 0px 10px;
    }
.contactway{
	height: 260px;
}
.wayLi{
	display: inline-block;
	margin:3%  4%;
	width:25%;
}
.icons{
	border:3px solid rgb(31,49,93);
	border-radius: 13px;
	/*width:100px;*/
	height: 100px;
	font-size: 40px;
	text-align: center;
	line-height: 100px;
	color: rgb(31,49,93);
	margin:10% 32%;
}
.icons:hover{
	color:  #fff;
	background-color:rgb(31,49,93);
}
.textway{
	font-weight: 550;
	font-size:15px;
	width:100%;
	text-align:center;
	color:rgb(60,111,160);
}
.detail{
	width:47%;
}
.detail h3{
	font-size: 27px;
	font-weight: 500;
	margin:3% 0;
	font-weight: bold;
}
.detail strong{
	font-size: 16px;
	
}
.detail span{
	font-size: 16px;
	font-weight: 550;
	color: rgb(227,91,91);
	

}
.detail>.ppone{
	margin:3% 0;
	color: #969292;
}
.detail ul>li{
	display:inline-block;
	margin:2% 3%;
}
.detail .add{
	font-size:14px;
	color: rgb(74,74,74);
	margin-top:5%;
}
.detail .add>p{
	/*display: inline-block;*/
	margin-bottom: 10px;
}
.detailmap{
	position: relative;
	margin-top: 5%;
	margin-bottom: 7%;
}
.bm-view{
	position: absolute;
	float: right;
	top:0;
	right: 0;
}

.mapouter{
	/*display: inline-block;*/
	
}
 }
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
	.serachinput {
        width: 300px;
        box-sizing: border-box;
        padding: 9px;
        border: 1px solid #dddee1;
        line-height: 20px;
        font-size: 16px;
        height: 38px;
        color: #333;
        position: relative;
        border-radius: 4px;
        -webkit-box-shadow: #666 0px 0px 10px;
        -moz-box-shadow: #666 0px 0px 10px;
        box-shadow: #666 0px 0px 10px;
    }
.contactway{
	height: 260px;
}
.wayLi{
	display: inline-block;
	margin:3%  4%;
	width:25%;
}
.icons{
	border:3px solid rgb(31,49,93);
	border-radius: 13px;
	/*width:100px;*/
	height: 100px;
	font-size: 40px;
	text-align: center;
	line-height: 100px;
	color: rgb(31,49,93);
	margin:10% 32%;
}
.icons:hover{
	color:  #fff;
	background-color:rgb(31,49,93);
}
.textway{
	font-weight: 550;
	font-size:15px;
	width:100%;
	text-align:center;
	color:rgb(60,111,160);
}
.detail{
	width:47%;
}
.detail h3{
	font-size: 27px;
	font-weight: 500;
	margin:3% 0;
	font-weight: bold;
}
.detail strong{
	font-size: 16px;
	
}
.detail span{
	font-size: 16px;
	font-weight: 550;
	color: rgb(227,91,91);
	

}
.detail>.ppone{
	margin:3% 0;
	color: #969292;
}
.detail ul>li{
	display:inline-block;
	margin:2% 3%;
}
.detail .add{
	font-size:14px;
	color: rgb(74,74,74);
	margin-top:5%;
}
.detail .add>p{
	/*display: inline-block;*/
	margin-bottom: 10px;
}
.detailmap{
	position: relative;
	margin-top: 5%;
	margin-bottom: 7%;
}
.bm-view{
	position: absolute;
	float: right;
	top:0;
	right: 0;
}

.mapouter{
	/*display: inline-block;*/
	
}
 } 
/*超大pc*/
@media screen and (min-width: 1903px) {
	.serachinput {
        width: 300px;
        box-sizing: border-box;
        padding: 9px;
        border: 1px solid #dddee1;
        line-height: 20px;
        font-size: 16px;
        height: 38px;
        color: #333;
        position: relative;
        border-radius: 4px;
        -webkit-box-shadow: #666 0px 0px 10px;
        -moz-box-shadow: #666 0px 0px 10px;
        box-shadow: #666 0px 0px 10px;
    }
.contactway{
	height: 260px;
}
.wayLi{
	display: inline-block;
	margin:3%  4%;
	width:25%;
}
.icons{
	border:3px solid rgb(31,49,93);
	border-radius: 13px;
	/*width:100px;*/
	height: 100px;
	font-size: 40px;
	text-align: center;
	line-height: 100px;
	color: rgb(31,49,93);
	margin:10% 32%;
}
.icons:hover{
	color:  #fff;
	background-color:rgb(31,49,93);
}
.textway{
	font-weight: 550;
	font-size:15px;
	width:100%;
	text-align:center;
	color:rgb(60,111,160);
}
.detail{
	width:47%;
}
.detail h3{
	font-size: 27px;
	font-weight: 500;
	margin:3% 0;
	font-weight: bold;
}
.detail strong{
	font-size: 16px;
}
.detail span{
	font-size: 16px;
	font-weight: 550;
	color: rgb(227,91,91);
}
.detail>.ppone{
	margin:3% 0;
	color: #969292;
}
.detail ul>li{
	display:inline-block;
	margin:2% 3%;
}
.detail .add{
	font-size:14px;
	color: rgb(74,74,74);
	margin-top:5%;
}
.detail .add>p{
	/*display: inline-block;*/
	margin-bottom: 10px;
}
.detailmap{
	position: relative;
	margin-top: 5%;
	margin-bottom: 7%;
}
.bm-view{
	position: absolute;
	float: right;
	top:0;
	right: 0;
}

.mapouter{
	/*display: inline-block;*/
	
}
  }
 
</style>
