<template>
    <div class="new-product-wrapper">
      <div class="new product-title">
        <h3>注目の新着作品</h3>
      </div>
      <div class="new-product-contents">
        <hooper
    class="hooper"
    :settings="hooperSettings"
    @slide="slide"
    >
    <slide>
      <div class="slide-item">
      <a 
       :href="list[0].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[0].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[0].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[0].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
        :href="list[1].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
        <div class="row">
            <div class="col-auto">
              <img
                :src="list[1].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[1].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[1].Item.itemName }}
              </h2>
            </div>
            </div>
         </div>
        </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[2].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[2].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[2].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[2].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[3].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[3].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[3].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[3].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[4].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[4].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[4].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[4].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[5].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[5].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[5].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[5].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[6].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[6].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[6].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[6].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[7].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[7].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[7].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[7].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[8].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[8].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[8].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[8].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[9].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[9].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[9].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[9].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[10].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[10].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[10].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[10].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[11].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[11].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[11].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[11].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[12].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[12].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[12].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[12].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[13].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[13].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[13].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[13].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
    <slide>
      <div class="slide-item">
        <a 
       :href="list[14].Item.itemUrl" 
        target="_blank" 
        class="d-block" 
        rel="noopener noreferrer"
        >
         <div class="row">
            <div class="col-auto">
              <img
                :src="list[14].Item.mediumImageUrls[0].imageUrl"
                class="img-fluid"
                v-if="list[14].Item.mediumImageUrls[0].imageUrl"
              />
              <div class="col">
              <h2 class="item-name font-weight-bold">
                {{ list[14].Item.itemName }}
              </h2>
              </div>
            </div>
         </div>
       </a>
      </div>
    </slide>
     <hooper-navigation slot="hooper-addons"/>
      </hooper>
      </div> 
    </div>
</template>

<script>
import {Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  components:{
    Hooper,
    Slide,
    HooperNavigation,
  },
  data(){
    return{
      list:[],
       hooperSettings: {
          itemsToShow: 3,
          itemsToSlide:1,
          infiniteScroll:true,
          trimWhiteSpace:true,
        },
    }
  },
  created(){
    this.NewProduct()
  },
  methods:{
     NewProduct(page){
        var vm=this;
         var url = "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=200162&applicationId=1046108220994016209";
         var param = {
           page: page,
           hits: vm.perPage,
        };
        vm.$axios
        .get(url, {
          params: param,
        })
        .then(function (res) {
             console.log(res);
          if(res.data){
            vm.$set(vm,"list", res.data.Items);
          }
        })
        .catch(function () {
          console.log("error");
        });
     }
  }
}
</script>

<style lang="scss" scoped>
.hooper{
  padding-top: 50px;
  font-size: 4rem;
  height: 550px;
}
.slide-item {
  //border: 2px solid rgb(250, 183, 58);
  height: 470px;
  width: 250px; 
  margin:  0 auto;
  justify-content: center; 
  color: black;
}
.row{
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}
img{
  width: 80%;
}
h3{
  font-size: 1.5rem;
}
.item-name{
  margin-top: 30px;
  color:   rgb(255, 255, 255);
  text-shadow:
              1px 0 0 black,
              0 1px 0   rgb(0, 0, 0),
              -2px 0 0   rgb(250, 183, 58),
              0 -2px 0   rgb(250, 183, 58)
              ;
  font-size: 1.3rem;
}

@media(max-width:599px){

.slide-item{
  width: 140px;
  height: 290px;
}
.hooper{
  height: 750px;
}
.item-name{
  font-size: 15px;
}
}
</style>