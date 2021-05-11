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
  background: linear-gradient(-225deg, #dff385 0%, #f7e7c3 56%, #fcd9c9 100%);
}

</style>
