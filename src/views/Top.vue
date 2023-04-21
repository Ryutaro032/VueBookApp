<template>
    <div class="top">
        <div class="header">
            <div class="header-contents"></div>
        </div>
        <Results/>
        <div class="footer">
            <p>@copy write Ryutaro Sakamoto</p>
        </div>
   </div>
</template>

<script>
import Results from '@/components/Results.vue'
export default {
    components:{
        Results
    }
}
</script>

<style lang="scss" scoped>

.header{
    margin: 0 auto;
    height: 250px;
}
.header h1{
    font-size: 3rem;
}
.header-contents{
    padding-top: 200px;
}
.footer{
    margin-top: 300px;
    padding-bottom: 50px;
}
</style>