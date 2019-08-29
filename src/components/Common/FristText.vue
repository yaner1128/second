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
/*手机*/
@media screen and (max-width: 767px){
    .outerlayer{
        width: 100%;
        height:160px;
        text-align: center;
        margin-top: 0px;
    }
    .outerlayer .textcontainer{
        position: relative;
        text-align: center;
        width: 88%;
        height: 100%;
        margin: 0 auto;

    }
    .textcontainer h1,h6{
        display: inline-block;
    }
    .textcontainer h1{
        font-size:19px;
        border-bottom: 3px solid  rgb(57,78,121);
    }
    .textcontainer h6{
        font-weight: 500;
    }
    .textcontainer .title{
        
        margin:50px 10px 40px 5px;
        padding-bottom: 10px;
    }

     .textcontainer .linetitle{
        width:100%;
        font-size: 15px;
        color: #727272;
        margin: -25px 0 20px 0;
      } 
 }  
/*ipad*/
@media screen and (min-width: 768px) and (max-width: 1365px){ 
    .outerlayer{
        width: 100%;
        height:160px;
        text-align: center;
        margin-top: 30px;
    }
    .outerlayer .textcontainer{
        position: relative;
        text-align: center;
        width: 88%;
        height: 100%;
        margin: 0 auto;

    }
    .textcontainer h1,h6{
        display: inline-block;
    }
    .textcontainer h1{
        border-right: 3px solid  rgb(57,78,121);
    }
    .textcontainer h6{
        font-weight: 500;
    }
    .textcontainer .title{

        margin:50px 10px 40px 5px;
        padding-right: 20px;
    }

     .textcontainer .linetitle{
        font-size: 18px;
        color: #727272;
        margin: 20px 0 20px 0;
      } 
}
/*普通pc*/
@media screen and (min-width: 1366px) and (max-width: 1902px){
    .outerlayer{
        width: 100%;
        height:160px;
        text-align: center;
        margin-top: 30px;
    }
    .outerlayer .textcontainer{
        position: relative;
        text-align: center;
        width: 88%;
        height: 100%;
        margin: 0 auto;

    }
    .textcontainer h1,h6{
        display: inline-block;
    }
    .textcontainer h1{
        border-right: 3px solid  rgb(57,78,121);
    }
    .textcontainer h6{
        font-weight: 500;
    }
    .textcontainer .title{

        margin:50px 10px 40px 5px;
        padding-right: 20px;
    }

     .textcontainer .linetitle{
        font-size: 18px;
        color: #727272;
        margin: 20px 0 20px 0;
      } 
} 
/*超大pc*/
@media screen and (min-width: 1903px) {
    .outerlayer{
        width: 100%;
        height:160px;
        text-align: center;
        margin-top: 30px;
    }
    .outerlayer .textcontainer{
        position: relative;
        text-align: center;
        width: 88%;
        height: 100%;
        margin: 0 auto;

    }
    .textcontainer h1,h6{
        display: inline-block;
    }
    .textcontainer h1{
        border-right: 3px solid  rgb(57,78,121);
    }
    .textcontainer h6{
        font-weight: 500;
    }
    .textcontainer .title{

        margin:50px 10px 40px 5px;
        padding-right: 20px;
    }

     .textcontainer .linetitle{
        font-size: 18px;
        color: #727272;
        margin: 20px 0 20px 0;
      } 
}

</style>
