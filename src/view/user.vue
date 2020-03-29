<template>
    <v-touch  v-on:swiperight="swiperight" :swipe-options="{direction: 'horizontal'}">
      <div ref="user" :style="user_style">
        <div>
          <div>
            <div v-show="main_">
              <div class="main_user">
              <div>
                <img :src="user_img" style="width: 85px;height: 85px;
                  border-radius: 50%;margin-top: 52px;margin-left: 14px;border: solid 3px white;">
              </div>
              
              <div style="position: absolute;top: 83px;left: 112px;color: #ffffff;">
                <span style="font-weight: bold;">{{name_}}</span>
                <div @click="show_user_detail()">个人信息
                  <img src="http://47.94.93.50:8080/dist/static/进入.png" style="width: 23px;position: absolute;top: 27px;">
                </div>
              </div>
            </div>
            <div style="background-color:#f7f8fa;width:100%;height:100%;">
                <div style="width: 80%;">
                  <van-progress
                    :pivot-text="chenghao"
                    color="#ee0a24"
                    :percentage="percent2"
                  />
                </div>
              <p style="margin-top: 5px;font-weight: bold;margin-left: 10px;display: inline-block;">积分{{score}} / {{full_score}}</p>
                <p style="display: inline-block;float: right;margin-right: 10px;font-weight: bold;">下一等级 {{next_sing}}</p>
                
              </div>
            </div>
            <div v-show="user_detail" style="background-color:#fbf9fe;">
              <div style="width:90%;margin:0 auto;padding-top: 13px;">
                <van-field @blur="textBlur()" v-model="name_" label="昵称" placeholder="请输入昵称" maxlength="6" readonly/>
                <van-field @blur="textBlur()" name="uploader" label="头像">
                  <van-uploader @blur="textBlur()" v-model="uploader" slot="input" :max-count="1" />
                </van-field>
                <van-field @blur="textBlur()" v-model="sex"  label="性别" placeholder="请输入性别"maxlength="1" />
                <van-field @blur="textBlur()" v-model="age"  label="球龄" placeholder="请输入球龄" maxlength="3"/>
                <van-field @blur="textBlur()" v-model="address"  label="地区" placeholder="请输入地区"maxlength="16" />
                <van-field @blur="textBlur()" v-model="user_num"  label="账号"  readonly/>
                <van-button round type="danger" size="large" block style="width:300px;height:44px;margin: 0 auto;margin-top:20px;" @click="sub()">保存</van-button>
                <van-button round  size="large" block style="width:300px;height:44px;margin: 0 auto;margin-top:13px;" @click="show_main()">返回</van-button>
              </div>
            </div>
          </div>
          <div v-show="show_login" style="background-color:#fbf9fe;height:100%;">
            <div style="padding-top: 61px;width: 80%;margin: 0 auto;">
              <van-form >
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
            </van-form>
            </div>
          </div>
        </div>
      </div>
    </v-touch>
</template>
<style>
.main_user {
  background-image: url('http://47.94.93.50:8080/dist/static/user_back.png');
  background-size:100% auto;
  height: 200px;
}
.van-uploader__preview {
  margin: 9px 8px 8px 0;
}
</style>

<script>
import {  Flexbox, FlexboxItem, XHeader, XButton, XImg, ViewBox, Panel, XInput, Group } from 'vux'
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
import { XProgress } from 'vux'
import {login , changeimg} from '@/api/user.js'
import { Toast } from 'vant'
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
        Group,
        XProgress,
        Toast
     },
     data(){
            return{
              percent2:0,
              user_name:'阿萨德',
              age:0,
              address:'山东',
              sex:'男',
              user_num:'14784789523',
              main_:true,
              user_detail:false,
              show_login:false,
              uploader: [{ 
                url: '' ,

                isImage: true
               }],
              user_style:{
                height:''
              },
              username: '',
              password: '',
              user_img:'',
              name_:'昵称',
              chenghao:'',
              next_sing:'',
              full_score:null,
              score:0

            }
     },

     methods: {
      
      ...mapMutations(['sethomeIndex','setUserInfo']),
      sub() {
         changeimg(this.id,this.uploader[0].content)
        console.log(this.uploader)
      },
      textBlur(){ //手机弹出键盘会把页面向上推动，还原页面
        document.body.scrollTop = 0;
      },
      onSubmit(values) {
        login(this.username,this.password)
        .then(res => {
         this.setUserInfo(this.username,this.password)
         this.user_img = res.data.img
         this.name_ = res.data.name
         this.chenghao = res.data.sign
         this.next_sing = res.data.next
         this.full_score = res.data.inscore
         this.sex = res.data.sex
         this.address = res.data.local
         this.user_num = res.data.account
         this.score = res.data.score
         this.percent2 = (this.score/this.full_score)*100

          Toast.success('登录成功');
          this.show_login = false
          this.main_ = true
        })
        .catch(err => {
          console.log(err)
        })
        
      },
      show_main() {
        this.user_detail = false
        this.main_ = true
      },
      show_user_detail() {
        if(this.$store.state.user.user_num == '' || this.$store.state.user.password == ''){
          this.main_ = false
          this.show_login = true
        }else {
          this.main_ = false
          this.user_detail = true
          
          login(this.username,this.password)
          .then(res => {
           this.setUserInfo(this.username,this.password)
           this.uploader[0].url = res.data.img
           this.user_img = res.data.img
           this.name_ = res.data.name
           this.chenghao = res.data.sign
           this.next_sing = res.data.next
           this.full_score = res.data.inscore
           this.sex = res.data.sex
           this.address = res.data.local
           this.user_num = res.data.account
           this.score = res.data.score
           this.age = res.data.ballyear
           this.id = res.data.id
            
            console.log(this.uploader)
          })
          .catch(err => {
            console.log(err)
          })
          }
    },
    
      onSave() {
      Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
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
        this.user_style.height = window.innerHeight -89  + "px"
      },
      _initBScroll() {
        this.meunScroll = new BScroll(this.$refs.user,{click: true,})
        console.log("user_bs")
        console.log(this.meunScroll)
      },
     },
     mounted() {
        this.$nextTick(()  =>  {
          if(this.$store.state.user.user_num == '' || this.$store.state.user.password == ''){
            this.main_ = false
            this.show_login = true
          }else {
            this.user_detail = true
            this.main_ = false
          }
          this.setHeight()
          this._initBScroll()
          console.log(this.meunScroll)
        })
     }
    }
 
</script>