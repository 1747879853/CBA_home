<template>
  
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
    <Header></Header>
    <view-box ref="viewBox">

        <tab bar-active-color="#668599" active-color="#000000">
            <tab-item @on-item-click="onClick_recommend">推荐</tab-item>
            <tab-item  @on-item-click="onClick_follow">关注</tab-item>
            
            <tab-item selected >热榜</tab-item>
        </tab>
        <p>热点页面</p>
    </view-box>
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
import {  Flexbox, FlexboxItem, XButton,ViewBox, Tab, TabItem } from 'vux'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
    export default{
     name: 'Forum',
     components: {
        Flexbox,
        FlexboxItem,
        XButton,
        ViewBox,
        Tab, 
        TabItem,
        Footer,
        Header
     },
     data(){
            return{
              value:''
            }
     },
     methods: {
        onClick_follow() {
          this.$router.push({name:"forum_follow"})
        },
        onClick_recommend() {
          this.$router.push({name:"forum_follow"})
        },
        swiperleft: function () {  //左划切换到推荐页面
            this.$router.push({name:"search"})
           // this.$router.push({'path':'/forum_follow'});
        },
        swiperright: function () { //右滑切换热点页
          
          this.$router.push({name:"forum_follow"})
            //this.$router.push({'path':'/search'});
        }
     },
    }
 
</script>