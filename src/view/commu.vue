<template>
  <div>
    <img src="/static/add.png" style="width: 60px;">
    <div :style="commu" class="commu_class" ref="commu">
      
      <div style="background-color:#fbf9fe;">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div  id="testDiv" style="background-color: white;width:98%;height:100px;margin: 0 auto;border-radius: 5px;margin-top:5px;" v-for="item in list">
            <p style="font-size: 20px;padding-left: 15px;padding-right: 15px;">{{item.title}}</p>
            <span style="padding-left: 15px;padding-right: 15px;">{{item.userTime}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="/static/comment.png" style="width: 20px;">
            <span>{{item.commNum}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="/static/up.png" style="width: 20px;">
            <span>{{item.upNum}}</span>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<style>
#testDiv{  width: 100%;  
    height: auto;  
    word-wrap:break-word;  
    word-break:break-all;  
    overflow: hidden;  
}
.commu_class {
  overflow: hidden;
  position: absolute;
}
</style>
<script>
import BScroll from 'better-scroll'
export default{

   components: {
     
   },
   data(){
      return{
        list: [
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123三分钟前发表'
          },
        ],
        loading: false,
        finished: false,
        commu: {
          height: ""
        },
      }
    },
    methods: {
      _initBScroll() {
          this.commuScroll = new BScroll(this.$refs.commu,{});
      },
      onLoad() {
      },
      setHeight() {
        this.commu.height = window.innerHeight -151.5 + "px"
      },
    },
   mounted() { 
    this.$nextTick(()  =>  {
      this.setHeight()
      this._initBScroll()
      console.log("commu")
      console.log(this.commuScroll)
    })
  }
}
</script>