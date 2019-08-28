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
    <span class="iconfont icons" v-html='item.icon'></span>
	 	<div class="FiveTitle" :class="{Fivecolors:isstart}">{{item.title}}</div>
	 	<br>
	 	<div :class='{FiveText:isstart}' v-show='isstart'>
	 		<p>{{item.pone}}</p>
	 		<p>{{item.ptwo}}</p>
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
  props:['item'],
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
/*手机*/
@media screen and (max-width: 767px){ 
  .FiveBody{
  padding-top: 10px;
  width: 160px;
  height: 220px;
  text-align: center;
  position: relative;
}
.icons{
    position: absolute;
    top: 70px;
    left: 66px;
    font-size: 90px;
    color: rgb(71,92,141);
}
.FiveTitle{
  font-size: 18px;
}
.Fivecolors{
  color:  rgb(71,92,141);
}
.FiveBgc{

}
.FiveText{
  font-size: 14px;
  color:rgb(71,92,141);
}
.circleProgress_wrapper{
    width: 200px;
    height: 200px;
    margin: 5px auto;
    position: relative;

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
    border-top:20px solid rgb(71,92,141);
    border-right:20px solid rgb(71,92,141);
    right:0;

}
.rstart{
      -webkit-animation: circleProgressLoad_right 2s linear infinite;
}
.leftcircle{
    border-bottom:20px solid rgb(71,92,141);
    border-left:20px solid rgb(71,92,141);
    left:0;

}
.lstart{
      -webkit-animation: circleProgressLoad_left 2s linear infinite;
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
  }  
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1365px){ 
  .FiveBody{
  padding-top: 10px;
  width: 220px;
  height: 300px;
  text-align: center;
  position: relative;
}
.icons{
        position: absolute;
    top: 70px;
    left: 66px;
    font-size: 90px;
    color: rgb(71,92,141);
}
.FiveTitle{
  font-size: 18px;
}
.Fivecolors{
  color:  rgb(71,92,141);
}
.FiveBgc{

}
.FiveText{
  font-size: 14px;
  color:rgb(71,92,141);
}
.circleProgress_wrapper{
    width: 200px;
    height: 200px;
    margin: 5px auto;
    position: relative;
/*    background: url(../../assets/1111.jpg) no-repeat;*/
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
    border-top:20px solid rgb(71,92,141);
    border-right:20px solid rgb(71,92,141);
    right:0;

}
.rstart{
      -webkit-animation: circleProgressLoad_right 2s linear infinite;
}
.leftcircle{
    border-bottom:20px solid rgb(71,92,141);
    border-left:20px solid rgb(71,92,141);
    left:0;

}
.lstart{
      -webkit-animation: circleProgressLoad_left 2s linear infinite;
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
 }
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
  .FiveBody{
  padding-top: 10px;
  width: 220px;
  height: 300px;
  text-align: center;
  position: relative;
}
.icons{
        position: absolute;
    top: 70px;
    left: 66px;
    font-size: 90px;
    color: rgb(71,92,141);
}
.FiveTitle{
  font-size: 18px;
}
.Fivecolors{
  color:  rgb(71,92,141);
}
.FiveBgc{

}
.FiveText{
  font-size: 14px;
  color:rgb(71,92,141);
}
.circleProgress_wrapper{
    width: 200px;
    height: 200px;
    margin: 5px auto;
    position: relative;
/*    background: url(../../assets/1111.jpg) no-repeat;*/
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
    border-top:20px solid rgb(71,92,141);
    border-right:20px solid rgb(71,92,141);
    right:0;

}
.rstart{
      -webkit-animation: circleProgressLoad_right 2s linear infinite;
}
.leftcircle{
    border-bottom:20px solid rgb(71,92,141);
    border-left:20px solid rgb(71,92,141);
    left:0;

}
.lstart{
      -webkit-animation: circleProgressLoad_left 2s linear infinite;
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
 } 
/*超大pc*/
@media screen and (min-width: 1903px) {
  .FiveBody{
  padding-top: 10px;
  width: 220px;
  height: 300px;
  text-align: center;
  position: relative;
}
.icons{
        position: absolute;
    top: 70px;
    left: 66px;
    font-size: 90px;
    color: rgb(71,92,141);
}
.FiveTitle{
  font-size: 18px;
}
.Fivecolors{
  color:  rgb(71,92,141);
}
.FiveBgc{

}
.FiveText{
  font-size: 14px;
  color:rgb(71,92,141);
}
.circleProgress_wrapper{
    width: 200px;
    height: 200px;
    margin: 5px auto;
    position: relative;
/*    background: url(../../assets/1111.jpg) no-repeat;*/
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
    border-top:20px solid rgb(71,92,141);
    border-right:20px solid rgb(71,92,141);
    right:0;

}
.rstart{
      -webkit-animation: circleProgressLoad_right 2s linear infinite;
}
.leftcircle{
    border-bottom:20px solid rgb(71,92,141);
    border-left:20px solid rgb(71,92,141);
    left:0;

}
.lstart{
      -webkit-animation: circleProgressLoad_left 2s linear infinite;
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
  }


</style>
