<template>
    <div class="header">
      <div class="header-contents">
        <div class="header-left">
          <h1 class="header-logo">Bookarch</h1>
        </div>
        <div id="nav">
          <router-link  class="link" to="/">トップ</router-link> 
          <router-link class="link" to="/TopPickup">ピックアップ</router-link>
          <router-link class="link" to="/Category">カテゴリー別検索</router-link>
        </div>
        <div class="nav-toggle" v-on:click="activeBtn=!activeBtn">
          <span class="line line01" :class="{'btnLine1':activeBtn}"></span>
          <span class="line line02" :class="{'btnLine2':activeBtn}"></span>
          <span class="line line03" :class="{'btnLine3':activeBtn}"></span>
        </div>
      </div>
      <transition class="nav-wrapper">
        <div class="menu" v-show="activeBtn">
          <ul>
            <li>
              <router-link class="res-link top" to="/">トップ</router-link>
            </li>
            <li>
              <router-link class="res-link pickUp" to="/TopPickup">ピックアップ</router-link>
            </li>
            <li>
              <router-link class="res-link category" to="/Category">カテゴリー別検索</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  data(){
    return{
      activeBtn:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 70px;
  background-color: rgba(255, 156, 7, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
}
.header-contents{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header-logo{
  color: #ffffff;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: rgb(255, 255, 255);
    }
  }
}
.link{
  padding: 35px 40px;
}
.nav-toggle {
    display: none;
  }
.nav-wrapper{
    display: none;
}
@media(max-width:599px){
  #nav{
        display: none;
    }
    .nav-toggle{
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px 10px 0 auto;
        display: block;
    }
    .nav-toggle  span {
        display: block;
        height: 5px;
        width: 40px;
        margin: 10px 10px;
        border-radius: 2px;
        background-color: white;
        
    }
   
    .btnLine1{
        transform: translateY(17px) rotate(-45deg);
        transition: 0.4s;
    } 
    .btnLine2{
      transition: 0.4s;
        opacity: 0;
    }
    .btnLine3{
        transform: translateY(-13px) rotate(45deg);
        transition: 0.4s;
    }
    .menu ul{
      display: flex;
      flex-direction: column;
    }
    .menu li{
      text-align: center;
      list-style: none;
      margin: 10px ;
    }
    .menu-enter-active, .menu-leave-active{
      transition: opacity 1s;
    }
    .menu-enter, .menu-leave-to{
      opacity: 0;
    }
    .menu-leave, .menu-enter-to{
      opacity: 1;
    }
    .menu {
      background-color: rgba(255, 255, 255);
      z-index: 0.5;
      margin-top: -10px;
      position: fixed;
      position: relative;
      top: 0;
    }
    .res-link{
        display: block;
        width: 80%;
        color: rgb(250, 183, 58);
        padding: 10px 15px;
        font-size: 1.1rem;
        text-decoration: none;
    }
    .res-link:hover{
       background-color: rgb(250, 183, 58,0.9);
        border-radius: 50px;
        color: white;
    }
}
</style>