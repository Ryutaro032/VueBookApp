<template>
  <div class="pickUp">
    <div class="header-contents">
      <h1>PICK UP</h1>
    </div>
    <NewProduct/>
  </div>
</template>

<script>
import NewProduct from '@/components/NewProduct.vue'
export default {
  components:{
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
  // color:   rgb(250, 183, 58);
  color: #fff;
  text-shadow:
              4px 4px 0 black,
              0 3px 3px   rgb(250, 183, 58),
              -2px -2px 0   rgb(250, 183, 58),
              0 -2px 0   rgb(250, 183, 58)
              ;
}
@media(max-width:599px){
 
}
</style>