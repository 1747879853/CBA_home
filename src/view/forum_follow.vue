<template>
  
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
    <Header></Header>
    <view-box ref="viewBox">

        <tab bar-active-color="#668599" active-color="#000000">
            <tab-item @on-item-click="onClick_recommend">推荐</tab-item>
            <tab-item selected >关注</tab-item>
            
            <tab-item @on-item-click="onClick_hot">热榜</tab-item>
        </tab>
        <p>关注页面啊</p>
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

        onClick_recommend() {
          this.$router.push({name:"forum"})
        },
        onClick_hot() {
          this.$router.push({name:"forum_hotspot"})
        },
        swiperleft: function () {  //左划切换到推荐页面
            this.$router.push({name:"forum_hotspot"})
            
        },
        swiperright: function () { //右滑切换热点页
            this.$router.push({name:"forum"})
            
        }
     },
    }
 
</script>