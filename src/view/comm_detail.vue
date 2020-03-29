<template>
     <v-touch  v-on:swiperight="swiperight" :swipe-options="{direction: 'horizontal'}">
    
        <x-header :left-options="{backText: '',preventGoBack: true}" style="background-color:#2d2d2d;"@on-click-back="return_()">回复</x-header>
        <div class="main_comm" ref="message" :style="main_comm_style">
          <div>
            <div  class="main_2"> 
               <van-divider />
              <div class="com_top">
                 <span class="photo">
                    <img src="/static/3.jpg" style="width: 45px;border-radius: 50%;height: 45px;margin-left: 10px;">
                 </span>
                 <span class="name">sss</span>
              </div>
              <div class="com_content">
                 <p style="background-color: #e0e0e0;font-size: 18px;">据新华社2月17日报道，拜耳和巴斯夫被罚18.5亿元。德国化工巨头拜耳和巴斯夫所生产的除草剂，2015年开始从一处大豆和棉花田飘到附近的一处桃园，不可恢复地毁坏了1000英亩桃树，被美国一法院判决须赔偿2.65亿美元（约合18.5亿元）</p> 
              </div>
              <br/>
              <div class="com_bottom">
                 <span class="time">2019.3.1</span>
                 <span >
                  <span>
                    <img src="/static/up.png" style="width: 25px;position: absolute;right: 85px;bottom: 1%;" >
                    <span style="position: absolute;right: 10px;bottom: 0%;">点赞(12)</span>
                  </span>
                 </span>
              </div>
            </div>
            <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">回复</van-divider>
            <div class="com_content">
                
            </div>
          
            <div style="background-color: #ffffff;">
              <div v-for="item in commu_" class="main_2"> 
                 <van-divider />
                <div class="com_top">
                   <span class="photo">
                      <img :src="item.img" style="width: 45px;border-radius: 50%;height: 45px;margin-left: 10px;">
                   </span>
                   <span class="name">{{item.name}}</span>
                </div>
                <div class="com_content">
                   {{item.content}}
                </div>
                <br/>
                <div class="com_bottom">
                   <span class="time">{{item.t}}</span>
                   <span >
                    <span>
                      <img src="/static/up.png" style="width: 25px;position: absolute;right: 85px;bottom: 1%;" >
                      <span style="position: absolute;right: 10px;bottom: 0%;">点赞({{item.up}})</span>
                    </span>
                   </span>
                </div>
              </div>
            </div>
          </div>
          <van-overlay :show="show">
            <div class="wrapper">
              <div class="block" catch:tap="noop" >
                
                <van-cell-group>
                  <van-field
                    v-model="message_comm"
                    label="评论"
                    type="textarea"
                    placeholder="请输入评论"
                    autosize
                    
                    adjust-position="true"
                  >
                  <van-button type="primary" @click="onClickHide" size="small" slot="button">发表</van-button>
                </van-field>
                </van-cell-group>
                <div style="position: absolute;right: 0px;bottom: 6px;">
                  
                </div>
                
              </div>
            </div>
          </van-overlay>
          <p>{{input_value}}</p>
          <group>
            <span @click="onClickShow">
              <span style="position: fixed;top: 94%;background-color: white;width: 100%;border-top: 1px solid #ffe7e7;bottom: 0px;" v-model="input_value" :max="200">
            <img slot="label" style="    position: fixed;bottom: 10px;left: 4px;" src="http://47.94.93.50:8080/dist/static/input.png" width="24" height="24">
            <span style="position: fixed;bottom: 10px;left: 54px;">
              我来评论...
            </span>
            
            </span>
            </span>
            
            
            <img src="http://47.94.93.50:8080/dist/static/up.png" style="position: fixed;width: 7%;top: 95%;right: 15%;">
            <span style="position: fixed;width: 7%;top: 96%;right: 7%;">112</span>
          </group>
        </div>
      </v-touch>
</template>
<style>
.ximg-demo {
  width: 100%;
  height: auto;
}
.main_comm{
  overflow: hidden;
  position: absolute;
  top: 46px;
  background-color: #ffffff;
  width: 100%;
}
.name {
  position: absolute;
  top: 13%;
  left: 16%;
  bottom: 45px;
}
.main_2 {
  position: relative;
}
.time {
  margin-left: 10px;
}
.com_top {
  
}
.com_content {
  margin-left: 10px;
}
.com_bottom .useful.usefulClick {
    color: #F32D27; 
    border: 1px solid #F32D27;
    position: fixed;
    top: 10%;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.input_ {
  background-color: #ffffff;
  width: 100%;
  height: 250px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 100%;
  height: 150px;
  background-color: #fff;
  bottom: 0px;
  position: fixed;
}
</style>

<script>
import {  Flexbox, FlexboxItem, XHeader, XButton, XImg, ViewBox, Panel, XInput, Group } from 'vux'
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
import {get_new_data} from '@/api/user.js'
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
              value:'',
              title:'',
              src:'',
              img_class: {
              height: "auto",
              width:"100%"
              },
              content:'',
              main_comm_style:{
                height:''
              },
              input_value:'',
              show_comment_flag:false,
              shwo_main_falg:true,
              show: false,
              message_comm:'',
              commu_:[
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              {
                'name': '-风起',
                'img': '/static/3.jpg',
                'time': '2017 3.12',
                'up': 1147,
                'content': 'sdaafsadfsadfsad'
              },
              ],
              new_time:'',
              new_title:'',

            }// 
     },

     methods: {
      ...mapMutations(['sethomeIndex']),
    //   textBlur(){
    //   document.body.scrollTop = 0;
    // },
      noop() {},
      onClickShow() {
        this.show =true
      },
      return_() {
        console.log("return_")
        this.sethomeIndex(4)
        this.$router.push({name:"home"})
      },
      onClickHide() {
        console.log("sdfas")
        console.log(this.message_comm)
        this.show = false
        this.commu_.push({
          'name': '-风起',
          'img': '/static/3.jpg',
          'time': '2017 3.12',
          'up': 1147,
          'content': this.message_comm
        })
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
        this.main_comm_style.height = window.innerHeight -89  + "px"
      },
      _initBScroll() {
        this.meunScroll = new BScroll(this.$refs.message,{click: true,})


        console.log(this.meunScroll)
      },
      fun() {
          console.log(this.$store.state.user.now_newpage_text)
      },
     },
     mounted() {
    
         this.setHeight()
         this._initBScroll()
        
     }
    }
 
</script>