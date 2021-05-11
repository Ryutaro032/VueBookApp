<template>
    <div class="Attention">
        <h3>おすすめ</h3>
    <hooper
    class="hooper"
    :settings="hooperSettings"
    @slide="slide"
    >
    <slide>
      <div class="slide-item">
      Slide 1
      </div>
    </slide>
    <slide>
      <div class="slide-item">
      Slide 2
      </div>
    </slide>
    <slide>
      <div class="slide-item">
      Slide 3
      </div>
    </slide>
    <slide>
      <div class="slide-item">
      Slide 4
      </div>
    </slide>
    <slide>
      <div class="slide-item">
      Slide 5
      </div>
    </slide>
    <slide>
      <div class="slide-item">
      Slide 6
      </div>
    </slide>
    <slide>
      <div class="slide-item">
      Slide 4
      </div>
    </slide>
    <slide>
      <div class="slide-item">
      Slide 4
      </div>
    </slide>
    <hooper-pagination slot="hooper-addons" v-if="!isLastSlide"/>
    <hooper-navigation slot="hooper-addons" v-if="!isLastSlide"/>
  </hooper>
  </div>
</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  components:{
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  data() {
      return {
        hooperSettings: {
          itemsToShow: 3,
          itemsToSlide:1,
          wheelControl: false,
        },
        currentSlide: 0,
      }
    },
}
</script>

<style lang="scss" scoped>
.slide-item {
  height: 200px;
  width: 150px;
  background-color: #3FB811; 
  display: flex;
  margin:  0 auto; 
  justify-content: center; 
  align-items: center; 
  color: #fff;  
  font-size: 35px; 
  border-radius: 20px;
}
h3{
  font-size: 1.5rem;
}
.hooper{
  padding: 50px 0;
  height: 350px;
}
</style>