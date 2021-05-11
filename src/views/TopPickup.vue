<template>
  <div class="pickUp">
    <div class="header-contents">
      <h1>PICK UP</h1>
    </div>
    <NewProduct/>
    <!--<Attention/>-->
  </div>
</template>

<script>
//import Attention from '@/components/Attention.vue'
import NewProduct from '@/components/NewProduct.vue'
export default {
  components:{
   //Attention,
    NewProduct,
  },
}
</script>

<style lang="scss" scoped>
.header-contents{
    padding-top: 150px;
    padding-bottom: 30px;
}
h1{
   color:   rgb(250, 183, 58);
  text-shadow:
              2px 0 0 black,
              0 2px 0   rgb(250, 183, 58),
              -2px 0 0   rgb(250, 183, 58),
              0 -2px 0   rgb(250, 183, 58)
              ;
}
@media(max-width:599px){
 
}
</style>