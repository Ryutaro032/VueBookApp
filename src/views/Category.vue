<template>
<div class="category-container">
    <div class="category-table">
        <h1>Search by Category</h1>
        <div class="table">
            <div class="tr">
                <div class="td">
                    <a id="comic" href="https://books.rakuten.co.jp/book/comic/?l-id=header-subnavi-book-g001001">
                        <p>コミック</p>
                        <img src="../assets/コミック.jpg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="rightnobel" href="https://books.rakuten.co.jp/book/lightnovel/?l-id=parts-genrenavi-book-lightnovel">
                        <p>ライトノベル</p>
                        <img src="../assets/ラノベ.jpg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="nobel" href="https://books.rakuten.co.jp/book/literature/?l-id=parts-genrenavi-book-literature">
                        <p>小説・評論</p>
                        <img src="../assets/小説.jpeg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="com" href="https://books.rakuten.co.jp/book/computer/?l-id=parts-genrenavi-book-computer">
                        <p>コンピューター・IT</p>
                        <img src="../assets/IT.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="tr">
                <div class="td">
                    <a id="life" href="https://books.rakuten.co.jp/book/lifestyle/?l-id=parts-genrenavi-book-lifestyle">
                        <p>生活・子育て</p>
                        <img src="../assets/life.jpg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="bis" href="https://books.rakuten.co.jp/book/business/?l-id=parts-genrenavi-book-business">
                        <p>ビジネス・経済</p>
                        <img src="../assets/bisiness.jpg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="test" href="https://books.rakuten.co.jp/book/qualification/?l-id=parts-genrenavi-book-qualification">
                        <p>資格・検定</p>
                        <img src="../assets/test.jpg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="tech" href="https://books.rakuten.co.jp/book/science/?l-id=parts-genrenavi-book-science">
                        <p>技術・科学</p>
                        <img src="../assets/tech.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="tr">
                <div class="td">
                    <a id="hobby" href="https://books.rakuten.co.jp/book/hobby-sports-art/?l-id=parts-genrenavi-book-hobby-sports-art">
                        <p>趣味・実用</p>
                        <img src="../assets/hobby.jpeg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="study" href="https://books.rakuten.co.jp/book/study/?l-id=parts-genrenavi-book-study">
                        <p>語学・参考書</p>
                        <img src="../assets/study.jpg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="pic" href="https://books.rakuten.co.jp/book/child/?l-id=parts-genrenavi-book-child">
                        <p>絵本・児童書</p>
                        <img src="../assets/pic.jpg" alt="">
                    </a>
                </div>
                <div class="td">
                    <a id="magazine" href="https://books.rakuten.co.jp/book/culture/?l-id=parts-genrenavi-book-culture">
                        <p>人文・社会</p>
                        <img src="../assets/magazine.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.category-container{
    margin: 0 auto;
    width: 100%;
    padding-top: 40px;
}
.category-table{
    width: 80%;
    margin: 0 auto;
    margin-top: 170px;
    padding-bottom: 80px;
}
.td img{
    width: 100%;
    border-radius: 50%;
    transition-duration: .5s;
}
.table{
    width: 100%;
    margin-top: 50px;
}
.tr{
    display: flex;
}
.td{
    border: none;
    opacity: 0.5;
    position: relative;
    width: 25%;
}
h1{
    color: #fff;
    text-shadow:
        4px 4px 0 black,
        0 3px 3px   rgb(250, 183, 58),
        -2px -2px 0   rgb(250, 183, 58),
        0 -2px 0   rgb(250, 183, 58)
        ;
}
.td p{
    position: absolute;
    margin: 0;
    top: 50%;
    left: 0;
    right:0;
    font-weight: bold;
    font-size: 1.1rem;
    color: #fff;
    text-shadow:
            1.5px 0 0 black,
            0 1.5px 0  black,
            -1.5px 0 0 black,
            0 -1.5px 0 black
            ;
}
.td:hover{
    opacity: 1;
}
.td img:hover{
    border-radius: 0%;
}
@media(max-width:599px){
    .category-table{
        width: 100%;
        margin-top: 100px;
    }
    .category-table h1{
        font-size: 2rem;
    }
    .tr{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .td{
        width: 80%;
    }
    .td p{
        font-size: 1.1rem;
    }
    
}
@media(max-width:1020px){
    .category-table{
        width: 90%;
    }
    .td p{
        font-size: 1.1rem;
    }
}
</style>