<template>
 
            <div class="header">
                <div class="nav-left">
                    <img src="../../../static/images/logo_ecodenet.png" alt="">
                </div>
                <div class="nav-center">
                  	<ul>
                  		<li>
                  			<a href = '#'>
                  			 导航链接
                  			</a>
                  		</li>
                  	</ul>
                </div>
                
                
            </div>
     


</template>

<script>

export default {

  name: 'Header'
};
</script>

<style lang="css" scoped>

.header{
  float: left;
  z-index: 100;
  background-color: rgba(240,240,240,.6);
  /*height: 80px;*/
}
img{
  float: left;
  z-index: 100;

}

a{
  float: left;
  z-index: 100;
  
}


</style>
