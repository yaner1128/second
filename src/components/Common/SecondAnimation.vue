<template>
  <div class="root">
<!--     <ul class="functionNav">
      <li v-for="(item, index) in functionList" :key="index"> -->
        <ul class="functionSubNav">
          <li
            v-for="(subItem, index) in functionList"
            :class="[(currentFlag === subItem.flag) ? 'functionSubNav-image-opacity' :'functionSubNav-image']"
            :key="index"
            @mouseover="Senter(subItem.flag)"
            @mouseout="Sleave(subItem.flag)"
          >
            <a href="#">
              <img :src="subItem.imageUrl" class="Simg">
            </a>

            <div class="Secondtitle">
            	{{subItem.desc}}
            </div>

            <div class="ps">
            	<p class='iconfont searchIcon'>
            		<span class="quan" @mouseenter='Cchange' @mouseleave='Cexchange'>&#xe62d;</span>
            	</p>
           		<p class="secondDesc">{{subItem.desc}}</p>
            </div>
            <i class="mask">
            	<p class='iconfont searchIcon'>
            		<span class="quan" @mouseenter='Cchange' @mouseleave='Cexchange'>&#xe62d;</span>
            	</p>
            </i>
          </li>
        </ul>
<!--       </li>
    </ul> -->
  </div>
</template>

<script>
export default {

  name: 'SecondAnimation',
  data() {
    return {
      currentFlag: 0,
      functionList: 
        [
          {
            desc: "数学竞赛网",
            flag: 1,
            imageUrl: require("../../assets/index (6).png")
          },
          // {
          //   desc: "生物工程",
          //   flag: 2,
          //   imageUrl: require("../../assets/index (7).png")
          // },
          // {
          //   desc: "上海超辉",
          //   flag: 3,
          //   imageUrl: require("../../assets/index (8).png")
          // },
          // {
          //   desc: "军民追溯网",
          //   flag: 4,
          //   imageUrl: require("../../assets/index (9).png")
          // },
          // {
          //   desc: "北京赛德美",
          //   flag: 5,
          //   imageUrl: require("../../assets/index (10).png")
          // },
          // {
          //   desc: "听心悦",
          //   flag: 6,
          //   imageUrl: require("../../assets/index (11).png")
          // }
        ]
      
    };
  },
  methods: {
    Senter(flag) {
      	this.currentFlag = flag;
      	// console.log(flag);
      	var Stltle=document.getElementsByClassName("Secondtitle")[flag-1];
      	Stltle.style.display='none';
      	var Imgs=document.getElementsByClassName("Simg")[flag-1];
      	// console.log(Imgs);
      	Imgs.style.width='100%';
      	Imgs.style.left='0';
      
    },
   Sleave(flag) {
   		// console.log(flag);
      	this.currentFlag = 0;
      	var Stltle=document.getElementsByClassName("Secondtitle")[flag-1];
      	Stltle.style.display='';
      	var Imgs=document.getElementsByClassName("Simg")[flag-1];
      	// console.log(Imgs);
      	Imgs.style.width='140%';
      	Imgs.style.left='-20%';
    },
    Cchange(){
    	var Squan=document.getElementsByClassName("quan")[0];
    	// console.log(Squan);
    	Squan.style.backgroundColor='rgba(237,60,53,0.8)';
    },
    Cexchange(){
    	var Squan=document.getElementsByClassName("quan")[0];
    	// console.log(Squan);
    	Squan.style.backgroundColor='rgba(237,60,53,0)';
    }

  }
};
</script>

<style scoped>
.root {
/*  background-color: red;*/
  width:100%;
  height: 262px;
 /* display: flex;
  justify-content: center;
  align-items: center;*/
}
.functionNav {
  /*display: flex;
  margin: 0 auto;
  flex-direction: column;*/
}
.functionNav > li {
  margin-top: 24px;
}
.functionSubNav li{
  /*display: flex;
  flex-direction: row;*/
  margin: 20px;
}
.functionSubNav-image-opacity,.functionSubNav-image {
  float: left;
  width: 350px;
  display: block;
  position: relative;
  height: 222px;
  border-radius: 12px;
}
.functionSubNav-image-opacity a,.functionSubNav-image a {
  width: 350px;
  display: block;
  position: relative;
  height: 222px;
  border-radius: 12px;
  overflow: hidden;
}
.functionSubNav-image-opacity img,.functionSubNav-image img {
	text-align: center;
  width: 120%;
  height: 222px;
  overflow: hidden;
  border-radius: 12px;
  position: absolute;
    left: -10%;
  
}

.ps{
	width: 100%;
	height: 80px;
	position: absolute;
	top: 0;
	left: 0;
}
.ps p{
	width: 100%;
	text-align: center;
	font-size: 18px;
    font-weight: bold;
}
.searchIcon{
	width: 100%;
	text-align: center;
	font-size: 18px;
    font-weight: bold;
}
.quan{
	display:inline-block;
	border: 2px solid gray;
	width: 50px;
	height: 50px;
	border-radius: 30px;
	line-height: 50px;
}
.Secondtitle{
	width: 100%;
	height: 40px;
	background-color: rgba(0,0,0,0.3);
	position: absolute;
	bottom:0;
	left: 0;
	color: #fff;
	text-align: center;
	line-height: 40px;
}



.functionSubNav-image-opacity .secondDesc,.functionSubNav-image .secondDesc{
  position: absolute;
  top: 70px;
  color: #fff;
  left: 0px;
}
.functionSubNav-image-opacity .searchIcon,.functionSubNav-image .searchIcon{
  position: absolute;
  top: 110px;
  color: #fff;
  left: 0px;
}


.functionSubNav-image-opacity img {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}
.functionSubNav-image .mask,.functionSubNav-image-opacity .mask {
  display: block;
  width: 350px;
  position: absolute;
  height: 222px;
  top: 0;
  left: 0;
  background-color: #000;
  border-radius: 12px;
}

.functionSubNav-image-opacity p {
  opacity: 1;
}
.functionSubNav-image p {
  opacity: 0;
}
.functionSubNav-image .mask {
  opacity: 0;
}
.functionSubNav-image-opacity .mask {
  opacity: 0.3;
}
/*.functionSubNav li:first-child {
  margin-right: 16px;
}
.functionSubNav li:last-child {
  margin-left: 16px;
}
.functionSubNav li:nth-child(2) {
  margin-right: 8px;
  margin-left: 8px;
}*/
</style>