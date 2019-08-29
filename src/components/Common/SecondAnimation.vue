<template>
    <div class="root">
<!--     <ul class="functionNav">
      <li v-for="(item, index) in functionList" :key="index"> -->
        <ul class="functionSubNav">
          <li          
            :class="[(currentid === subItem.id) ? 'functionSubNav-image-opacity' :'functionSubNav-image']"           
            @mouseover="Senter(subItem.id)"
            @mouseout="Sleave(subItem.id)"
          >
            <a href="#">
              <img :src="subItem.thumb" class="Simg">
            </a>

            <div class="Secondtitle">
              {{subItem.title}}
            </div>

            <div class="ps">
              <p class='iconfont searchIcon'>
                <span class="quan" @mouseenter='Cchange' @mouseleave='Cexchange'>&#xe62d;</span>
              </p>
              <p class="secondDesc">{{subItem.title}}</p>
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
  props:['subItem'],
  data() {
    return {
      currentid: 0,
      
        
      
    };
  },
  methods: {
    Senter(id) {
      	this.currentid = id;
      	// console.log(id);
      	var Stltle=document.getElementsByClassName("Secondtitle")[id-1];
      	Stltle.style.display='none';
      	var Imgs=document.getElementsByClassName("Simg")[id-1];
      	// console.log(Imgs);
      	Imgs.style.width='100%';
      	Imgs.style.left='0';
      
    },
   Sleave(id) {
   		// console.log(id);
      	this.currentid = 0;
      	var Stltle=document.getElementsByClassName("Secondtitle")[id-1];
      	Stltle.style.display='';
      	var Imgs=document.getElementsByClassName("Simg")[id-1];
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

</style>