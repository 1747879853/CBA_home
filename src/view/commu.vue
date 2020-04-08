<template>
  <div>
    <div>
      <div :style="commu" class="commu_class" ref="commu" v-show="show">
        
        <div style="background-color:#fbf9fe;">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div  id="testDiv" style="background-color: white;width:98%;height:100px;margin: 0 auto;border-radius: 5px;margin-top:5px;" v-for="item in list">
              <div style="height: 69px;">
                <p style="font-size: 20px;padding-left: 15px;padding-right: 15px;">{{item.title}}</p>
                
              </div>
              <div>
                <span style="padding-left: 15px;padding-right: 15px;font-size: 10px;display: inline-block">{{item.userTime}}</span>
                <div style="display: inline-block;float: right;margin-right: 20px;">
                  <img src="/static/comment.png" style="padding-left: 34px;width: 20px;" @click="show_comm_detail">
                  <span>{{item.commuNum}}</span>
                </div>
                
              </div>
              
              
              
             
              
            </div>
          </van-list>
        </div>
      </div>
      <img  src="http://47.94.93.50:8080/dist/static/add.png" style="width: 60px;position:fixed;top: 490px;left: 2030px;" @click="onClickShow">
  </div>
    <div class="wrapper" @click.stop v-show="show_login">
       <div  style="background-color:#fbf9fe;height:100%;">
        <div style="padding-top: 61px;width: 80%;margin: 0 auto;">
          
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            @blur="textBlur()"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            @blur="textBlur()"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" @click="onSubmit">
              提交
            </van-button>
          </div>
        
        </div>
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
import { mapMutations } from 'vuex'
import {get_new_data, login,comment,up} from '@/api/user.js'
import { Toast } from 'vant'
export default{
   components: {
   },
   data(){
      return{
        show_login:false,
        username: '',
        password: '',
        show:true,
        list: [
          {
            'title': '为英雄哀悼，向奉献者致敬',
            'upNum': 25,
            'commuNum': 1,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '易建联到底是中锋还是大前锋',
            'upNum': 25,
            'commuNum': 0,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '是什么原因让大家感觉我辽这赛季很困难',
            'upNum': 25,
            'commuNum': 11,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '不懂就问，15-19年谁是NBA联盟第一人？',
            'upNum': 25,
            'commuNum': 18,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '谁会是英格兰未来的一号巨星?',
            'upNum': 25,
            'commuNum': 14,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '未来三年国家队理想阵容',
            'upNum': 25,
            'commuNum': 15,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '麦迪动作飘逸出手如丝滑般美妙为什么命中率比卡顿版的伦纳德还差一大截 ',
            'upNum': 25,
            'commuNum': 19,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '如果不起作用，说明是与原来的有冲突，所以',
            'upNum': 25,
            'commuNum': 25,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '大加索尔：应学习科比的精神，把逆境视为老师和成长机会',
            'upNum': 25,
            'commuNum': 114,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
          {
            'title': '曝NBA考虑取消本赛季',
            'upNum': 25,
            'commuNum': 17,
            'userTime': '用户123 2020-04-04 13:01发表'
          },
        ],
        loading: false,
        finished: false,
        
        commu: {
          height: ""
        },
        name_:''
        
      }
    },
    methods: {
      ...mapMutations(['setUserInfo','setSrt']),
      onSubmit(values) {
        
        login(this.username,this.password)
        .then(res => {
         
         
         this.name_ = res.data.name
         
         
         this.setUserInfo({
          'num':this.username,
          'password':this.password,
          'id': res.data.id,
          'name':res.data.name,
          'img':res.data.img,
          'sign':res.data.sign,
          'next':res.data.next,
          'score':res.data.score,
          'inscore':res.data.inscore
         })
         
          Toast.success('登录成功');
          this.show_login = false
          this.show = true
          
        })
        .catch(err => {
          console.log(err)
        })
        
      },
      textBlur(){ //手机弹出键盘会把页面向上推动，还原页面
        document.body.scrollTop = 0;
      },
      show_comm_detail() {
        this.$router.push({name:"comm_detail"})
      },
      onClickShow() {
        if(this.$store.state.user.user_num==''){
          this.show = false
          this.show_login = true
        }else {
          this.$router.push({name:"input_commu"})

          this.list.unshift({
            'title': this.$store.state.user.str,
            'upNum': 0,
            'commuNum': 0,
            'userTime': '用户'+this.$store.state.user.name+' 在 '+this.$store.state.user.time+'发表'
          })
        }

        console.log("show")
      },
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
      if(this.$store.state.user.str!=''){
      this.list.push({
        'title': this.$store.state.user.str,
        'upNum': 0,
        'commuNum': 0,
        'userTime': this.$store.state.user.name+' '+this.$store.state.user.time+'发表'
      })
      this.setSrt({'str':'','time':''})
    }
    })
  }
}
</script>