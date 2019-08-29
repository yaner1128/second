<template>
		<div class="main">
                <!-- SIXTH EXAMPLE -->
                <div class="view view-sixth">
                    <img :src='subItem.thumb' />
                    <div class="mask">
                        <h2>{{subItem.title}}</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">了解更多</a>
                    </div>
                </div>
            </div>
</template>

<script>
export default {

  name: 'lastAnimation',

  data() {
    return {

    };
  },
  props:['subItem'],
};
</script>

<style lang="css" scoped>


</style>
