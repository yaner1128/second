<template>
	<!-- <div class="ban">
      <my-Banner />
    </div> -->
  <div>
  	<my-Slideshow />
  	<!-- <my-Banner /> -->
   
  <div style="height:1000px;background-color:pink;width:88%;margin:0 auto"></div>
	
		<my-FourthAnimation />
	
</div>

  

</template>

<script>

export default {

  name: 'Home',
  
    
  data() {
    return {
    	
      show:true
    };
  },
  methods:{
  	
	
}
};
</script>

<style lang="css" scoped>
.FourAni{
	/*width: 280px;
	height: 310px;*/
	/*float: left;*/
}
/*@keyframes mymove
{
	from {top:35%;}
	to {top:38%;}
}

@-webkit-keyframes mymove 
{
	from {top:35%;}
	to {top:38%;}
}*/
.ban{
	/*position: relative;
	z-index:100;*/
}
.ban >>> .bannerimg{
      
      
     /* height: auto;*/
    
  }
</style>
