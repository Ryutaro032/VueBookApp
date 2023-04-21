<template>
  <div id="app">
    <header>
      <Header/>
    </header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header,
  }
}
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  width: 100%;
  height: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  background: linear-gradient(0deg, #96d8f0 0%, #c4f7c1 56%, #fafcc9 85%);
}

</style>
