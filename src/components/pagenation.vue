<template>
    <div 
    class="row py-3 justtify-content-center" 
    v-if="totalPages"
    >
        <div class="col-auto">
            <nav aria-label="Page navigation">
                <ul class="pagenation">
                    <li 
                    class="page-item" 
                    :class="{'disabled':currentPageEdited == 1}"
                    >
                        <a  
                        class="page-link" 
                        href="#" 
                        v-on:click.prevent="setPage(1)"
                        >
                        ≪
                        </a>
                    </li>
                    <li 
                    class="page-item" 
                    :class="{'disabled':currentPageEdited == 1}"
                    >
                        <a  
                        class="page-link" 
                        href="#" 
                        v-on:click.prevent="setPage(currentPageEdited -1)"
                        :class="{'disable':currentPageEdited == 1}"
                        >
                        ≺
                        </a>
                    </li>
                    <li 
                    class="page-item"
                    v-for="num in showPageFix"
                    :key="num"
                    :class="{'active': numFix(num) == currentPageEdited}"
                    >
                    <template v-if="numFix(num) == currentPageEdited">
                        <span 
                        class="page-link"
                        >
                        {{numFix(num)}}
                        </span>
                    </template>
                    <a
                    class="page-link" 
                    href="#"
                    v-on:click.prevent="setPage(numFix(num))"
                    v-else
                    >{{numFix(num)}}
                    </a>
                    </li>
                    <li 
                    class="page-item" 
                    :class="{'disabled': currentPageEdited == totalPages}"
                    >
                       <a 
                       class="page-link" 
                       href="#" 
                       v-on:click.prevent="setPage(currentPageEdited + 1);"
                       >
                       >
                       </a>
                    </li>
                    <li 
                    class="page-item" 
                    :class="{'disabled': currentPageEdited == totalPages}"
                    >
                       <a 
                       class="page-link" 
                       href="#" 
                       v-on:click.prevent="setPage(totalPages);"
                       >
                       ≫
                       </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        showPages:Number, //ページネーションを何件表示するか
        currentPage:Number, //現在のページ
        totalCount:Number, //総件数
        totalPages:Number, //総ページ数
        perPage:Number, //1ページあたりの表示件数
    },
    watch:{
        //ページネーションを複数設置したときの対応
        currentPage(){
            var vm=this;
            vm.$set(vm,"currentPageEdited",vm.currentPage);
        },
    },
    data(){
        return{
            currentPageEdited:Number, //現在のページ
        };
    },
    computed:{
        //ページ番号を計算する
        numFix(){
            var vm=this;
            return function(num){
                var ajust=1 +(vm.showPages - 1) / 2;
                 var result=num;
                //前ページがマイナスになる場合は1からはじめる
                if(vm.currentPageEdited > vm.showPages / 2){
                     result=num + vm.currentPageEdited - ajust;
                 //後ページが最大ページを超える場合は最大ページを超えないようにする
                }
                if(vm.currentPageEdited + vm.showPages / 2 > vm.totalPages){
                     result=vm.totalPages - vm.showPages + num;
                }
                //総ページ数が表示ページ数に満たない場合、連番そのまま
                if(vm.totalPages <= vm.showPages){
                     result=num;
                }
                return result;
            };
        },
        //総記事数が表示ページ数以下の場合に調整する
        showPageFix(){
            var vm=this;
            if(vm.totalPages < vm.showPages){
                return vm.totalPages;
            }else{
                return vm.showPages;
            }
        },
    },
    mounted(){
        var vm=this;
        vm.$set(vm,"currentPageEdited",vm.currentPage);
    },
    methods:{
        //何ページ目を表示するか
        setPage(page){
            var vm=this;
            //マイナスにならないようにする
            if(page <= 0){
                vm.$set(vm,"currentPageEdited", 1);
            }else if(page > vm.totalPages){
                //最大ページを超えないようにする
                 vm.$set(vm, "currentPageEdited", vm.totalPages);
            }else{
                 vm.$set(vm, "currentPageEdited", page);
            }
              //親コンポーネントに現在のページを送る
            vm.$emit("currentPage", vm.currentPageEdited);
        }
    },
};
</script>

<style lang="scss" scoped>
ul{
    display: flex;
}
li{
    list-style: none;
}
.page-link{
    background-color: white;
    color: rgb(250, 183, 58);
}
.page-link:hover, .page-link:focus{
    color: rgb(250, 183, 58);
}
</style>