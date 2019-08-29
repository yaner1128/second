<template>
	<div class="Fristbutton">
		{{firstBtns.text}}
	</div>
</template>

<script>
export default {

  name: 'FristButton',
  props:['firstBtns'],
  data() {
    return {

    };
  },
  props:["firstBtns"]
};
</script>

<style lang="css" scoped>
 /*ipad*/
@media screen and (min-width: 768px) and (max-width: 1023px){
  .Fristbutton{
    height: 42px;
    width: 100%;
    line-height: 42px;
    cursor: pointer;
    font-family: '微软雅黑';
    font-size: 16px;
    border-radius: 50px;
    text-align: center;

    border: 1px solid rgb(60,111,160);
    transition: all 0.4s ease;
    color: rgb(60,111,160);
    float: left;
  }
}
/*我的电脑*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
  .Fristbutton{
     height: 42px;
    width: 130px;
    line-height: 42px;
    cursor: pointer;
    font-family: '微软雅黑';
    font-size: 16px;
    border-radius: 50px;
    text-align: center;

    border: 1px solid rgb(60,111,160);
    transition: all 0.4s ease;
    color: rgb(60,111,160);
    float: left;
    }
} 
/*超大pc*/
@media screen and (min-width: 1903px){
  .Fristbutton{
     height: 42px;
    width: 130px;
    line-height: 42px;
    cursor: pointer;
    font-family: '微软雅黑';
    font-size: 16px;
    border-radius: 50px;
    text-align: center;

    border: 1px solid rgb(60,111,160);
    transition: all 0.4s ease;
    color: rgb(60,111,160);
    float: left;
  }
}

</style>
