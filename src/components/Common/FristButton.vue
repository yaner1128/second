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
};
</script>

<style lang="css" scoped>
.Fristbutton{
	height: 42px;
    width: 130px;
    line-height: 42px;
    cursor: pointer;
    font-family: '微软雅黑';
    font-size: 16px;
    border-radius: 50px;
    text-align: center;
    
    border: 1px solid #e35b5b;
    transition: all 0.4s ease;
    color: #e35b5b;
    float: left;
}
</style>
