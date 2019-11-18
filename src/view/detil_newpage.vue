<template>

    <view-box ref="viewBox">
        <x-header :left-options="{backText: ''}" style="background-color:#CC0000;">CBA新闻</x-header>
        <div class="main">
            <h2>{{title}}</h2>
            <div align="center">
                <x-img :src="src"  :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" :style="img_class" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
            </div>
            <p>{{content}}</p>
             <panel   :list="panel_list" type="4" @on-click-item="onclick_newpage" ></panel>
        </div>

    </view-box>


</template>
<style>
.ximg-demo {
  width: 100%;
  height: auto;
}
.main{
    margin: 5px 5px 5px 5px;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
<script>
import {  Flexbox, FlexboxItem, XHeader, XButton, XImg, ViewBox, Panel } from 'vux'
    export default{
    
     components: {
        Flexbox,
        FlexboxItem,
        XHeader,
        XButton,
        XImg,
        ViewBox,
        Panel
     },
     data(){
            return{
              value:'',
              title:'',
                src:'/cba/static/newpages/1.png',
                img_class: {
                height: "auto",
                width:"100%"
            },
            content:''
            }
     },
     methods: {
        fun() {
            console.log(this.$store.state.user.now_newpage_text)
        },
         success (src, ele) {
      console.log('success load', src)
      //const span = ele.parentNode.querySelector('span')
      //ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      //const span = ele.parentNode.querySelector('span')
      //span.innerText = 'load error'
    }
     },
     mounted() {
        this.title = this.$store.state.user.now_newpage_text
        this.content = this.$store.state.user.now_newpage_content
        //this.img_class.width=window.innerWidth*0.9 + "px"
        //this.img_class.height=this.img_class.width*1.3+"px"
       this.$nextTick(function () {
        
    })
     }
    }
 
</script>