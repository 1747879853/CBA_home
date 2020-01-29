<template>
  
    <v-touch v-on:swiperight="swiperright"  class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
    <Header></Header>
    <message_his style="width:100%;height:120px" ></message_his>
    <message_his style="width:100%;height:120px" ></message_his>
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
import message_his from '@/components/message_his.vue'
    export default{
     name: 'Search1',
     components: {
        Search,
        Footer,
        Alert,
        Header,
        message_his
     },
     data(){
            return{
              show: false,
              message:'',
              value:'',
              list:[1,1,1,1,,1,1]
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
            this.$router.push({name:"match_player_ranking"})
        }
        
     },
    }
 
</script>