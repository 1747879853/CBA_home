<template>
  
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
        <div>
    <Header></Header>
    <view-box ref="viewBox">

        <tab bar-active-color="#668599" active-color="#000000">
            <tab-item  selected >推荐</tab-item>
            <tab-item  @on-item-click="onClick_follow">关注</tab-item>
            
            <tab-item @on-item-click="onClick_hot">热榜</tab-item>
        </tab>
        <p>推荐页面</p>
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
        onClick_follow(index) {
            this.$router.push({name:"forum_follow"})
            //this.$router.push({'path':'/forum_follow'});
            console.log("111")
        },
        onClick_hot(index) {
            this.$router.push({name:"forum_hotspot"})
        },
        swiperleft: function () {  //左划切换到首页
           this.$router.push({name:"forum_follow"})
            //this.$router.push({'path':'/'});
        },
        swiperright: function () { //右滑切换关注页
            
             this.$router.push({name:"home"})
            //this.$router.push({'path':'/forum_follow'});
        }
     },
    }
 
</script>