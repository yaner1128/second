<template>
    <div class="root">
<!--     <ul class="functionNav">
      <li v-for="(item, index) in functionList" :key="index"> -->
        <ul class="functionSubNav">
          <li :class="[(currentid === subItem.id) ? 'functionSubNav-image-opacity' :'functionSubNav-image']"           
            @mouseenter="Senter(subItem.id)"
            @mouseleave="Sleave(subItem.id)"
          >
            <a href="#">
              <img :src="subItem.thumb" class="Simg">
            </a>

            <div class="Secondtitle">
              {{subItem.title}}
            </div>
            <div class="ps">
              <p class="secondDesc">{{subItem.title}}</p>
            </div>
            <i class="mask"></i>
             <p class='iconfont searchIcon'>
                <span class="quan" @mouseenter='Cchange' @mouseleave='Cexchange'>&#xe62d;</span>
              </p>
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
      	var Stltle=document.getElementsByClassName("Secondtitle")[id-1];
      	Stltle.style.display='none';
      	var Imgs=document.getElementsByClassName("Simg")[id-1];
      	Imgs.style.width='100%';
      	Imgs.style.left='0';
    },
   Sleave(id) {
      	this.currentid = 0;
      	var Stltle=document.getElementsByClassName("Secondtitle")[id-1];
      	Stltle.style.display='';
      	var Imgs=document.getElementsByClassName("Simg")[id-1];
      	Imgs.style.width='140%';
      	Imgs.style.left='-20%';
    },
    Cchange(){
    	var Squan=document.getElementsByClassName("quan")[this.currentid-1];
    	Squan.style.backgroundColor='rgba(60,111,160)';
    },
    Cexchange(){
    	var Squan=document.getElementsByClassName("quan")[this.currentid-1];
    	Squan.style.backgroundColor='rgba(237,60,53,0)';
    }

  }
};
</script>

<style scoped>
/*手机*/
@media screen and (max-width: 767px){ 
      .root {
        width:100%;
        height: 200px;
       
      }
      .functionNav {
        
      }
      .functionNav > li {
        margin-top: 24px;
      }
      .functionSubNav li{
        margin: 5px 10px;
      }
      .functionSubNav-image-opacity,.functionSubNav-image {
        float: left;
        width: 300px;
        display: block;
        position: relative;
        height: 200px;
        border-radius: 12px;
      }
      .functionSubNav-image-opacity a,.functionSubNav-image a {
        width: 300px;
        display: block;
        position: relative;
        height: 200px;
        border-radius: 12px;
        overflow: hidden;
      }
      .functionSubNav-image-opacity img,.functionSubNav-image img {
        text-align: center;
        width: 120%;
        height: 200px;
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
        width: 300px;
        position: absolute;
        height: 200px;
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
}  
/*ipad*/
@media screen and (min-width: 768px) and (max-width: 1365px){ 
  .root {
    width:100%;
    height: 200px;
   
  }
  .functionNav {
    
  }
  .functionNav > li {
    margin-top: 24px;
  }
  .functionSubNav li{
    margin:10px  8px;
  }
  .functionSubNav-image-opacity,.functionSubNav-image {
    float: left;
    width: 320px;
    display: block;
    position: relative;
    height: 215px;
    border-radius: 12px;
  }
  .functionSubNav-image-opacity a,.functionSubNav-image a {
    width: 320px;
    display: block;
    position: relative;
    height: 215px;
    border-radius: 12px;
    overflow: hidden;
  }
  .functionSubNav-image-opacity img,.functionSubNav-image img {
    text-align: center;
    width: 120%;
    height: 215px;
    overflow: hidden;
    border-radius: 12px;
    position: absolute;
      left: -10%;
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
    display: none;
    width: 320px;
    position: absolute;
    height: 215px;
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
}
 /*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
    .root {
      width:100%;
      height: 200px;
     
    }
    .functionNav {
      
    }
    .functionNav > li {
      margin-top: 24px;
    }
    .functionSubNav li{
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
      cursor: pointer;
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
} 
/*超大pc*/
@media screen and (min-width: 1903px) {
    .root {
      width:100%;
      height: 200px;
     
    }
    .functionNav {
      
    }
    .functionNav > li {
      margin-top: 24px;
    }
    .functionSubNav li{
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
      cursor: pointer;
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
}
</style>