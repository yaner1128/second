<template>
	<div class="FiveBody" :class='{FiveBgc:isstart}' @mouseenter='startRotate' @mouseleave='endRotate'>
		<div class="circleProgress_wrapper">
	        <div class="wrapper right" >
	            <div class="circleProgress rightcircle" :class='{rstart:isstart}'></div>
	        </div>
	        <div class="wrapper left">
	            <div class="circleProgress leftcircle" :class='{lstart:isstart}'></div>
	        </div>
	 	</div>
	 	<div class="FiveTitle" :class="{Fivecolors:isstart}">高端企业制造研发</div>
	 	<br>
	 	<div :class='{FiveText:isstart}' v-show='isstart'>
	 		<p>企业高端网站设计</p>
	 		<p>彰显品牌形象</p>
	 	</div>
	</div>
</template>

<script>
export default {

  name: 'FiveAnimation',

  data() {
    return {
    	isstart:false
    };
  },
  methods:{
  	startRotate(){
  		// console.log("hhhh");
  		this.isstart=true;
  	},
  	endRotate(){
  		this.isstart=false;
  	}
  }
};
</script>

<style lang="css" scoped>
.FiveBody{
	padding-top: 10px;
	width: 220px;
	height: 300px;
	text-align: center;
}
.FiveTitle{
	font-size: 18px;
}
.Fivecolors{
	color:  rgb(47,208,181);
}
.FiveBgc{

}
.FiveText{
	font-size: 14px;
	color: rgb(47,208,181);
}
.circleProgress_wrapper{
    width: 200px;
    height: 200px;
    margin: 5px auto;
    position: relative;
    background: url(../../assets/1111.jpg) no-repeat;
}
.wrapper{
    width: 100px;
    height: 200px;
    position: absolute;
    top:0;
    overflow: hidden;
}
.right{
    right:0;
}
.left{
    left:0;
}
.circleProgress{
    width: 160px;
    height: 160px;
    border:20px solid transparent;
    border-radius: 50%;
    position: absolute;
    top:0;
    -webkit-transform: rotate(360deg);
}
.rightcircle{
    border-top:20px solid rgb(47,208,181);
    border-right:20px solid rgb(47,208,181);
    right:0;

}
.rstart{
	    -webkit-animation: circleProgressLoad_right 5s linear infinite;
}
.leftcircle{
    border-bottom:20px solid rgb(47,208,181);
    border-left:20px solid rgb(47,208,181);
    left:0;

}
.lstart{
	    -webkit-animation: circleProgressLoad_left 5s linear infinite;
}
@-webkit-keyframes circleProgressLoad_right{
 	0%{
        -webkit-transform: rotate(45deg);
    }
    50%{
		-webkit-transform: rotate(90deg);
    }
    100%{
        -webkit-transform: rotate(225deg);
    }
}
@-webkit-keyframes circleProgressLoad_left{
 	0%{
        -webkit-transform: rotate(45deg);
    }
    50%{
		-webkit-transform: rotate(90deg);
    }
    100%{
        -webkit-transform: rotate(225deg);
    }
}

</style>
