<template>
    <v-touch  v-on:swiperight="swiperight" :swipe-options="{direction: 'horizontal'}">
      <div style="background-color:#ffffff;">
        <img src="/static/b1.jpg" style="width: 85px;height: 85px;
    border-radius: 50%;">
      </div>
       
    </v-touch>
</template>
<style>

</style>

<script>
import {  Flexbox, FlexboxItem, XHeader, XButton, XImg, ViewBox, Panel, XInput, Group } from 'vux'
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default{
    
     components: {
        Flexbox,
        FlexboxItem,
        XHeader,
        XButton,
        XImg,
        ViewBox,
        Panel,
        XInput,
        Group
     },
     data(){
            return{
              
            }
     },

     methods: {
    
 
      ...mapMutations(['sethomeIndex','setUserInfo']),
      testt() {
        this.setUserInfo('yyd')
        console.log("succ")

      },
      swiperight: function () {  
      this.sethomeIndex(0)
      this.$router.push({name:"home"})
      // if (this.show_data_analysis) {
      //   this.$router.push({name:"match"})
      //   console.log(this.show_video)
      // }else if(this.show_video) {
      //   this.onItemClick_data()
      //   console.log(this.show_video)
      // }else if(this.show_guess) {
      //   this.onItemClick_video()
      //   console.log(this.show_video)
      // }
    },
      setHeight() {
        this.main_.height = window.innerHeight -89  + "px"
      },
      _initBScroll() {
        this.meunScroll = new BScroll(this.$refs.message,{click: true,})


        console.log(this.meunScroll)
      },
     },
     mounted() {
        this.$nextTick(()  =>  {
        this.setHeight()
        this._initBScroll()
        console.log(this.meunScroll)
      })
     }
    }
 
</script>