<template>
	<div class="outerlayer" ref='homePage'>
		<div class="textcontainer">
			<div>
				<h1 class="title">{{title}}</h1>
				<h6 class="linetitle">{{text}}</h6>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    props:{title:String,text:String},
  name: 'FristText',
    data(){
      	return {
        	clientHeight:'',
      	}
    },
    props:['title','text'],
};
</script>

<style lang="css" scoped>

</style>
