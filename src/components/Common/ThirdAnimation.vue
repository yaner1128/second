<template>
	<div class="thirdcontainer">
	    <div class="prve">
	    	<img src="../../assets/prve.png" alt="">
			<div class="icontext">
				<div class="icons">
					<span class="iconfont">&#xe697;</span>
					<span class="iconfont">&#xe600;</span>
					<span class="iconfont">&#xe603;</span>
				</div>
				<div class="texts">
					<p>触及视觉灵魂的设计趋势</p>
					<p>精心布局的用户体验</p>
					<p>毫无顾忌地通过任何终端</p>
					<p>呈现在客户的眼前</p>
				</div>
			</div>
	    </div>
	    <div class="next">
	    	<img src="../../assets/next.png" alt="">
			<div class="Nicontext">
				<div class="Nicons">
					<span class="iconfont">&#xe697;</span>
					<span class="iconfont">&#xe600;</span>
					<span class="iconfont">&#xe603;</span>
				</div>
				<div class="Ntexts">
					<p>触及视觉灵魂的设计趋势</p>
					<p>精心布局的用户体验</p>
					<p>毫无顾忌地通过任何终端</p>
					<p>呈现在客户的眼前</p>
				</div>
			</div>
	    </div>
	</div>
</template>

<script>
export default {

  name: 'ThirdAnimation',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
.thirdcontainer {
    position: relative;    
/*    //给container一个相对定位,其中两个子div绝对定位，使之重叠*/
    width: 300px;
    height: 340px;
}
img {
    width: 300px;
}
.thirdcontainer>div {
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility: hidden;
  /*  //当元素不面向屏幕时，不可见*/
}
.prve {
    transform: rotateY(0deg);
}
.next {
    transform: rotateY(-180deg)
}
.thirdcontainer:hover .prve {
    transform: rotateY(180deg);
}
.thirdcontainer:hover .next {
    transform: rotateY(0deg);
}
/*//两个图片都设置了滑过翻转，一个从0-180deg，一个从-180-0deg*/
.prve,.next {
    transition: all 1s;
}
.thirdcontainer .icontext{
	width: 100%;
	height: 160px;
	padding: 70px 0;
	position: absolute;
	top:17px;
	left: 0;
	text-align: center;
}
.thirdcontainer .Nicontext{
	width: 100%;
	height: 160px;
	padding: 70px 0;
	position: absolute;
	top:17px;
	left: 0;
	text-align: center;
	color: #fff;
}
.thirdcontainer .icontext .icons,.thirdcontainer .Nicontext .Nicons{
	width: 88%;
	margin: 0 auto;
	padding-bottom: 10px;
}
.thirdcontainer .icontext .iconfont,.thirdcontainer .Nicontext .iconfont{
	font-size: 34px;
	margin: 20px 20px;
}
.thirdcontainer .icontext .texts,.thirdcontainer .Nicontext .Ntexts{
	width: 88%;
	margin: 20px auto;
	display: block;
}
.thirdcontainer .icontext p,.thirdcontainer .Nicontext p{
	margin: 8px 0;
}
</style>
