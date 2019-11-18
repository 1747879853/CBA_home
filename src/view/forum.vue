<template>
  <div>
    <Header></Header>
    <view-box ref="viewBox">

        <tab bar-active-color="#668599" active-color="#000000">
            <tab-item selected @on-item-click="onClick_follow()">关注</tab-item>
            <tab-item @on-item-click="onClick_recommend()">推荐</tab-item>
            <tab-item @on-item-click="onClick_hot()">热榜</tab-item>
        </tab>
        
    </view-box>
   <Footer></Footer>
 </div>
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

        },
        onClick_recommend() {

        },
        onClick_hot() {

        }
     },
    }
 
</script>