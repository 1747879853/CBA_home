<template>
  
    <v-touch v-on:swiperight="swiperright"  class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
    <Header></Header>
   <p>更多页面</p>
    
   <Footer></Footer>
 </div>
 </v-touch>
 
</template>
<style>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
<script>
import {  Search, Alert,Flexbox, FlexboxItem  } from 'vux'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
    export default{
     name: 'Search1',
     components: {
        Search,
        Footer,
        Alert,
        Header
     },
     data(){
            return{
              show: false,
              message:'',
              value:''
            }
     },
     methods: {
       onSubmit() {
        this.onShow()
       },
       onShow () {
            this.show = true
        },
        onHide () {
       
        },
        swiperright: function () {  //左划切换赛事页
            this.$router.push({name:"match"})
        }
        
     },
    }
 
</script>