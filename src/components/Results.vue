<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col">
        <input
          type="text"
          class="form-control"
          v-model="keyword"
          v-on:keydown.enter="search(keyword,1)"
          placeholder="本を探す"
        />
        
      </div>
      <div class="col-auto">
        <button 
        class="btn" 
        v-on:click="search(keyword,1)"
        >
        検索
        </button>
      </div>
    </div>
     <div>
        <p>{{message}}</p>
      </div>
    <div class="row" v-if="totalCount">
      <div class="col">
        <strong>{{totalCount}}</strong> 件の結果が見つかりました。
      </div>
    </div>
 
    <div class="page-contents flex-column" v-if="list">
      <div 
      class="col col-item" 
      v-for="(item,index) in list" 
      :key="index"
      >
        <a 
        :href="item.Item.itemUrl" 
        target="_blank" 
        class="text-dark border p-2 d-block mb-3" 
        rel="noopener noreferrer"
        >
          <div class="row item-img">
            <div class="col-auto">
              <img
                :src="item.Item.mediumImageUrl"
                class="img-fluid"
                v-if="item.Item.mediumImageUrl"
              />
            </div>
            <div class="item-text col">
              <h2 class="item-title font-weight-bold">
                {{ item.Item.title }}
                <h3>{{item.Item.subTitle}}</h3>
              </h2>
              <div>
                <p>{{ item.Item.author }}</p>
              </div>
              <div>
                <p>({{item.Item.publisherName}})</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
 
    <pagination
      class="paginationr"
      :showPages="showPages"
      :currentPage="currentPage"
      :totalCount="totalCount"
      :perPage="perPage"
      :totalPages="totalPages"
      @currentPage="getCurrentPage"
    ></pagination>
  </div>
</template>

<script>
import pagination from "@/components/pagination.vue";
export default {
    data() {
    return {
      message:"",
      //ページネーションの設定
      currentPage: 1, //現在のページ（初期は1）
      showPages: 5, //ページネーションを何ページ表示するか（奇数でないとずれる）
      perPage: 7, //1ページの表示件数
 
      //API用の設定
      keyword: "",
      totalCount: 0, //取得したアイテムの総件数
      totalPages: 0, //総ページ数
      list: [],
    };
  },
  components: {
    pagination,
  },
  methods: {
    //currentPageがページネーションコンポーネントから送られる現在のページ
    getCurrentPage(currentPage) {
        var vm=this;
      vm.$set(vm,"currentPage", currentPage);
      //APIを呼び直す
      vm.search(vm.keyword, vm.currentPage);
    },
    //APIからのデータ取得
    search(keyword, page) {
      if (!keyword) {
        console.log("入力してください")
        return;
      }else{
        console.log("検索されました")
         var vm=this;
         var url = "https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&applicationId=1046108220994016209";
         var param = {
           keyword:keyword,
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
            vm.$set(vm,"totalCount", res.data.count);
            vm.$set(vm,"currentPage", res.data.page);
            vm.$set(vm,"totalPages", res.data.pageCount);
          }
        })
        .catch(function () {
          //エラーのとき
          console.log("error");
        });
      }
     
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.row{
    margin-top: 100px;
}
h1 {
  font-size: 1.4rem;
  margin-bottom: 0;
}
h3 {
  font-size: 1.2rem;
}
.col-item a {
  text-decoration: none;
}
.btn{
  background-color: rgb(250, 183, 58);
  color: white;
}
.btn:hover{
  opacity: 0.7;
  color: white;
}
.item-title{
  color: white;
  text-shadow: 1px 0 0 black,
              0 1px 0   rgb(0, 0, 0),
              -2px 0 0   rgb(250, 183, 58),
              0 -2px 0   rgb(250, 183, 58);
}

@media(max-width: 599px){
  .row{
    width: 500px;
    width: 80%;
    display: inline-block;
  }
  .btn{
    margin-top: 10px;
  }
  .item-text{
    margin-top: 20px;
  }
  
}
</style>