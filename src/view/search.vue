<template>
  
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
    <Header></Header>
    <search
      
      
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
     
      
      @on-submit="onSubmit"
      ref="search"></search>
      <alert v-model="show"  @on-show="onShow" @on-hide="onHide"> {{message}}</alert>
    
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
import {  Search, Alert  } from 'vux'
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
        console.log('on hide')
        },
        swiperleft: function () {  //左划切换论坛页
           // this.$router.push({'path':'/forum'});
            
            this.$router.push({name:"match"})
        },
        swiperright: function () { //右滑切换赛事页
            this.$router.push({name:"forum"})
        }
     },
    }
 
</script>