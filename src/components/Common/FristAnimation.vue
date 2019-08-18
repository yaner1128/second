<template>
	<div class="Fcontainer">
	    <div class="front">
	    	<img src="../../assets/turn1.png" alt="">
	    </div>
	    <div class="clearfix"></div>
	    <div class="text">网站/商城系统定制开发</div>
	</div>
</template>

<script>
export default {

  name: 'FristAnimation',

  data() {
    return {
    	
    };
  },
};
</script>

<style lang="css" scoped>
.clearfix {
    clear: both;
}
.Fcontainer {
    position: relative;
    width: 220px;
    height: 320px;
    text-align: center;
}
.Fcontainer img{
    width: 220px;
    height: 280px;
}
.Fcontainer>.front {
    position: absolute;
    left: 0;
    top: 0;
}

/*设置滑过翻转，从0-180deg*/
.front {
    transform: rotateY(0deg);
}
.Fcontainer:hover .front {
    transform: rotateY(180deg);
}

.Fcontainer .front {
    transition: all 2s;
}
.Fcontainer .text{
	width: 100%;
	height: 30px;
	position: absolute;
	bottom:0px;
	left: 0;
}
</style>
