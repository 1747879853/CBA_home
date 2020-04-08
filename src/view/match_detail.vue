<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperight" :swipe-options="{direction: 'horizontal'}">
    
        <div class="background_top" v-if="show1">
            <img src="http://47.94.93.50:8080/dist/static/return.png" class="return" @click="return_last()">
            <img slot="icon" :src="team1_picture" style="height: 30%;" class="icon1">
            <p style="color: white;" class="left_text">{{this.major}}(主)</p>
            <p style="color: white;" class="match_time1">开赛:{{time}}</p>
            <img slot="icon" :src="team2_picture" style="height: 30%;" class="icon2">
            <p style="color: white;" class="right_text">{{unmajor}}(客)</p>
            
            <div v-if="num==3">
              <img src="http://47.94.93.50:8080/dist/static/play.png" style="width: 5%;position: absolute;top: 83%;left: 12%;">
              <span style="color: rgb(187, 187, 187);position: absolute;top: 81%;left: 18%;text-decoration:underline">
                <a :href="address1" target="_blank">{{name1}}</a>
                </span>  
              <img src="http://47.94.93.50:8080/dist/static/play.png" style="width: 5%;position: absolute;top: 83%;left: 39%;">
              <span style="color: rgb(187, 187, 187);position: absolute;top: 81%;left: 45%;text-decoration:underline">
                <a :href="address2" target="_blank">{{name2}}</a>
              </span> 
              <img src="http://47.94.93.50:8080/dist/static/play.png" style="width: 5%;position: absolute;top: 83%;left: 67%;">
              <span style="color: rgb(187, 187, 187);position: absolute;top: 81%;left: 73%;text-decoration:underline">
                <a :href="address3">{{name3}}</a>
              </span>  
            </div>
            <div v-if="num==2">
              <img src="http://47.94.93.50:8080/dist/static/play.png" style="width: 5%;position: absolute;top: 83%;left: 26%;">
              <span style="color: rgb(187, 187, 187);position: absolute;top: 81%;left: 32%;text-decoration:underline">
                <a href="address1" target="_blank">{{name1}}</a>
              </span>  
              <img src="http://47.94.93.50:8080/dist/static/play.png" style="width: 5%;position: absolute;top: 83%;left: 52%;">
              <span style="color: rgb(187, 187, 187);position: absolute;top: 81%;left: 58%;text-decoration:underline">
                <a href="address2" target="_blank">{{name2}}</a>
              </span> 
            </div>
            
        </div>
        <div class="background_top2" v-if="show2">

            <img slot="icon" src="http://47.94.93.50:8080/dist/static/tim/1.png" style="height: 30%;width: 15%;" class="icon1">
            <p style="color: white;" class="left_text">{{team.team1}}(主)</p>
            <p style="color: white;" class="result_score" >108-124</p>
            <p style="color: white;" class="match_time">已结束</p>
            <img slot="icon" src="http://47.94.93.50:8080/dist/static/tim/2.png" style="height: 30%;width: 15%;" class="icon2">
            <p style="color: white;" class="right_text">{{team.team2}}(客)</p>
        </div>
        <div class="content" >
          <tab class="content_tab" default-color="#888888" active-color="#000000" bar-active-color="#DD0000">
            <tab-item  @on-item-click="onItemClick_data()" :selected="show_data_analysis">数据分析</tab-item>
            
            <tab-item @on-item-click="onItemClick_guess()" :selected="show_guess">战果竞猜</tab-item>
          </tab>
          <div  v-show="show_data_analysis" :style="home_panel_class_data_analysis" ref="datAnalysis" class="data_analysis_wrepper">
            <div class="data_analysis">
              <van-tag mark color="#2d2d2d">赛季最佳球员</van-tag>
              
              <br>
              <img :src="team1_picture" class="data_analysis_team_icon1">
              <span class="data_analysis_team_test1" style="color:#CC0000">{{team.team1}}</span> 
              <img :src="team2_picture" class="data_analysis_team_icon2">
              <span class="data_analysis_team_test2" style="color:#000099">{{team.team2}}</span> 
              <br>
              <br>
              <x-table full-bordered :content-bordered="false" :cell-bordered="false" class="best_player">
                <tbody v-for="item in data_list">
                  
                    <tr  >
                      <td style="width:25%">
                        <img :src="item.img1" style="width:35%;margin: 20px 0 0 0;">
                        <br>
                      </td>
                      <td style="width:19%"><p style="color: #CC0000;font-weight:bold">{{item.score1}}<p></p></td>
                      <td style="width:12%">{{item.t}}</td>
                      <td style="width:19%"><span style="color: #000099;font-weight:bold">{{item.score2}}</span></td>
                      <td style="width:25%">
                        <img :src="item.img2" style="width:35%">
                      </td>
                    </tr>
                    <tr>
                      <td style="width:25%;line-height: 17px;">
                        <p>{{item.name1}}</p>
                      </td>
                      <td style="width:19%"><p style="color: #CC0000;"><p></p></td>
                      <td style="width:12%"></td>
                      <td style="width:19%"><span style="color: #000099;"></span></td>
                      <td style="width:25%;line-height: 17px;">
                        <p>{{item.name2}}</p>
                      </td>
                    </tr>
                  
                </tbody>
              </x-table>
            <br>
            <hr />
            <br>
            <van-tag mark color="#2d2d2d">赛季数据</van-tag>
             
            <canvas id="container_data" width="400" height="260"></canvas>
            <hr />
            <br>
            <van-tag mark color="#2d2d2d" >最近战绩</van-tag>
            
            <div class="recent_">
              <img src="http://47.94.93.50:8080/dist/static/tim/1.png" class="data_recent_team_icon1">
              <span class="data_recent_team1" style="color:#CC0000">{{team.team1}}</span> 
              <img src="http://47.94.93.50:8080/dist/static/tim/2.png" class="data_recent_team_icon2">
              <span class="data_recent_team2" style="color:#000099">{{team.team2}}</span> 
              <br>
              <br>
              <x-table :full-bordered="false" :content-bordered="false" :cell-bordered="false" class="recent_record">
                <tbody>
                  <tr>
                    <td>
                      <x-table :cell-bordered="false" :content-bordered="false" full-bordered>
                        <tbody>
                            <tr v-for="item in recent_data_left_end">
                              <td>
                                <recent-record :leftWinOrfalse= "item.result" :leftScore="item.leftScore" :rightScore="item.rightScore" :leftTeam="item.leftTeam" :rightTeam="item.rightTeam" :time="item.time" :show="item.show" :master="item.master"></recent-record>
                              </td>
                            </tr>
                        </tbody>
                      </x-table>
                    </td>
                    <td>
                      <x-table :cell-bordered="false" :content-bordered="false" full-bordered>
                        <tbody>
                            <tr v-for="item in recent_data_right_end">
                              <td>
                                <recent-record :leftWinOrfalse= "item.result" :leftScore="item.leftScore" :rightScore="item.rightScore" :leftTeam="item.leftTeam" :rightTeam="item.rightTeam" :time="item.time" :show="item.show" :master="item.master"></recent-record>
                              </td>
                            </tr>
                        </tbody>
                      </x-table>
                    </td>
                  </tr>
                </tbody>
              </x-table>
            </div>
            <br>
            <hr />
            <br>
            <div>
              <van-tag mark color="#2d2d2d" >本赛季交战</van-tag>
              
              <x-table  style="background-color:#fff;">
                <thead>
                  <tr style="background-color: #F7F7F7">
                    <th>时间</th>
                    <th>比赛</th>
                    <th>客队</th>
                    <th>比分</th>
                    <th>主队</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="item in his_data_end">
                      <td>{{item.time}}</td>
                      <td>{{item.match}}</td>
                      <td><span :class="{'iswin':item.score_customer > item.score_master}">{{item.customer}}</span></td>
                      <td><span :class="{'iswin':item.score_customer > item.score_master}">{{item.score_customer}}</span>-<span :class="{'iswin':item.score_customer < item.score_master}">{{item.score_master}}</span></td>
                      <td><span :class="{'iswin':item.score_customer < item.score_master}">{{item.master}}</span></td>
                    </tr>
                </tbody>
              </x-table>
            </div>
          </div>
        </div>
       
        <div v-show="show_guess">
          <van-tag mark color="#2d2d2d">胜率对比</van-tag>
           <br>
           <span style="color:blue;">{{major}}:  {{major_rate}}</span><br>
           <span style="color:#ee0a24;">{{unmajor}}:  {{unmajor_rate}}</span>
          <br>
         
          <van-tag mark color="#2d2d2d">主客场胜率</van-tag>
          <x-table style="font-size: 16px;" >
            <thead>
              <tr style="background-color: #F7F7F7">
                <th>队伍</th>
                <th>主场场次</th>
                <th>主场胜率</th>
                <th>客场场次</th>
                <th>客场胜率</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{m.name}}</td>
                <td>{{m.major_play_num}}</td>
                <td>{{m.major_win_rate}}</td>
                <td>{{m.unmajor_play_num}}</td>
                <td>{{m.unmajor_win_rate}}</td>
              </tr>
              <tr>
                <td>{{um.name}}</td>
                <td>{{um.major_play_num}}</td>
                <td>{{um.major_win_rate}}</td>
                <td>{{um.unmajor_play_num}}</td>
                <td>{{um.unmajor_win_rate}}</td>
              </tr>
            </tbody>
          </x-table>
          
          <span style="margin-left: 10px;font-size: 16px;">历史交战
            <span>{{his.sum}}</span>次{{major}}获胜<span style="color:red;">{{his.major_num}}</span>次，{{unmajor}}获胜<span style="color:blue;">{{his.unmajor_num}}</span>次</span>
            
            <br/>
          <van-tag mark color="#2d2d2d">竞猜</van-tag>
          
          <div>
            <p style="margin-left: 10px;font-size: 16px;">{{guss.A}}</p>
            <div>
              <van-button type="info" style="width:45%;margin-left: 10px;" @click="post_guss('A_option_1')">{{guss.A_option_1}}</van-button>
            <van-button type="danger" style="width:45%;" @click="post_guss('A_option_2')">{{guss.A_option_2}}</van-button>
            </div>
            
          </div>
          <div>
            <p style="margin-left: 10px;font-size: 16px;">{{guss.B}}</p>
            <div>
              <van-button type="info" style="width:45%;margin-left: 10px;" @click="post_guss('B_option_1')">{{guss.B_option_1}}</van-button>
            <van-button type="danger" style="width:45%;" @click="post_guss('B_option_2')">{{guss.B_option_2}}</van-button>
            </div>
            
          </div>
          <div>
            <p style="margin-left: 10px;font-size: 16px;">{{guss.C}}</p>
            <div>
              <van-button type="info" style="width:45%;margin-left: 10px;" @click="post_guss('C_option_1')">{{guss.C_option_1}}</van-button>
            <van-button type="danger" style="width:45%;" @click="post_guss('C_option_2')">{{guss.C_option_2}}</van-button>
            </div>
          </div>
          <br/>
        </div>
        <div>
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
      </div>
  </v-touch>
</template>
<script>
import { Tab, TabItem, XTable, XInput } from 'vux'
import { mapMutations } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { get_match_detail_analise_data,get_guss_data,post_guss,login } from '@/api/user.js'
import F2 from '@antv/f2'
import _ from 'lodash'
import recentRecord from '@/components/recent_record.vue'
import BScroll from 'better-scroll'
import messageHis from '@/components/message_his.vue'
import { Toast } from 'vant'
export default {
  components: {
    Header,
    Footer,
    Tab,
    TabItem,
    XTable,
    recentRecord,
    messageHis,
    XInput
  },
  data () {
    return {
      major_max:'',
      unmajor_max:'',
      password:'',
      username:'',
      show_login:false,
      guss:null,
      major_rate:0,
      unmajor_rate:0,
      match_id:'',
      show1:true,
      show2:false,
      data_list:[],
      his:null,
      m:null,
      um:null,
      team:{
        'team1':'',
        'team2':''
      },
      data:[{
        name: '',
        分数类型: '得分',
        分数: 0
      }, {
        name: '',
        分数类型: '回合数',
        分数: 0
      }, {
        name: '',
        分数类型: '篮板',
        分数: 0
      }, {
        name: '',
        分数类型: '助攻',
        分数: 0
      }, {
        name: '',
        分数类型: '失误',
        分数: 0
      }, {
        name: '',
        分数类型: '抢断',
        分数: 0
      }, {
        name: '',
        分数类型: '得分',
        分数: 0
      }, {
        name: '',
        分数类型: '回合数',
        分数: 0
      }, {
        name: '',
        分数类型: '篮板',
        分数: 0
      }, {
        name: '',
        分数类型: '助攻',
        分数: 0
      }, {
        name: '',
        分数类型: '失误',
        分数: 0
      }, {
        name: '',
        分数类型: '抢断',
        分数: 0
      }],
      recent_data:[],
      his_data: [],
      his_data_end:[],
      show_data_analysis: true,
     
      show_guess:false,
      home_panel_class_data_analysis: {
        height: ""
      },
      home_panel_class_video: {
        height: ""
      },
      team1_picture:'',
      team2_picture:'',
      message_his_data:[],
      name1:'',
      name2:'',
      name3:'',
      address1:'',
      address2:'',
      address3:'',
      major:'',
      unmajor:'',
      time:'',
      num:0,
      recent_data_left:[],
      recent_data_right:[],
      recent_data_left_end:[],
      recent_data_right_end:[],
      win_rate:[ {
        rate: 0,
        name:''
      }, {
        
        rate: 0,
        name: ''
      }, ],
      major_full:null,
      unmajor_full:null
     
    }
  },
  methods: {
    
    ...mapMutations(['sethomeIndex','setUserInfo']),
    onSubmit(values) {
        
        login(this.username,this.password)
        .then(res => {
         
         
         
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
          this.show_guess = true
        })
        .catch(err => {
          console.log(err)
        })
        
      },
      textBlur(){ //手机弹出键盘会把页面向上推动，还原页面
        document.body.scrollTop = 0;
      },
    post_guss(a){
        Date.prototype.format = function(fmt){
        var o = {
          "M+" : this.getMonth()+1,                 //月份
          "d+" : this.getDate(),                    //日
          "h+" : this.getHours(),                   //小时
          "m+" : this.getMinutes(),                 //分
          "s+" : this.getSeconds(),                 //秒
          "q+" : Math.floor((this.getMonth()+3)/3), //季度
          "S"  : this.getMilliseconds()             //毫秒
        };

        if(/(y+)/.test(fmt)){
          fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
              
        for(var k in o){
          if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(
              RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
          }       
        }

        return fmt;
      }

     

      var now = new Date();
      var nowStr = now.format("MM-dd");

      if(this.$store.state.user.user_id==0){
        this.show_guess = false

        this.show_login = true

      }else{
        post_guss(this.$store.state.user.user_id,this.major_max,this.unmajor_max,a.substring(0, 1),a,nowStr)
        .then(res => {
          Toast.success('竞猜成功');
          })
          .catch(err => {
            console.log(err)
          })
      }
      // post_guss = (user_id,major,unmajor,question,anwser,time)
      
    },
    _initBScroll() {
     console.log("sssssssdfsd")
      this.data_analysis = new BScroll(this.$refs.datAnalysis,{click: true}) 
      console.log("sssssssdfsd")
      console.log(this.data_analysis)
    },
    setHeight() {
      this.home_panel_class_data_analysis.height = window.innerHeight -244  + "px"
      console.log("insetheight")
      this.home_panel_class_video.height = window.innerHeight -289.6+ "px"
    },
    return_last() {
      this.sethomeIndex(1)
      this.$router.push({name:"home"})
    },
    initHisto() {
      const self = this
      const chart_hi = new F2.Chart({
        id: 'container_data',
        pixelRatio: window.devicePixelRatio
      });
      chart_hi.source(this.data);
      chart_hi.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = chart_hi.get('legendController').legends.top[0];
          const tooltipItems = obj.items;
          const legendItems = legend.items;
          const map = {};
          legendItems.forEach(function(item) {
            map[item.name] = _.clone(item);
          });
          tooltipItems.forEach(function(item) {
            const name = item.name;
            const value = item.value;
            if (map[name]) {
              map[name].value = value;
            }
          });
          legend.setItems(_.values(map));
        },
        onHide: function onHide() {
          const legend = chart_hi.get('legendController').legends.top[0];
          legend.setItems(chart_hi.getLegendItems().country);
        }
      });
      chart_hi.interval()
        .position('分数类型*分数')
        .color('name',function (name) {
            if (name == self.team.team1) {
              return '#CC0000'
            } else  
              return '#000099'
          })
        .adjust({
          type: 'dodge',
          marginRatio: 1// 设置分组间柱子的间距
        });

      chart_hi.render();
     
    },
    
    
    onItemClick_video() {
      this.show_guess = false
      this.show_data_analysis = false
      
    },
    onItemClick_data() {
      
      this.show_guess = false
      
      this.show_data_analysis = true
    },
    onItemClick_guess() {
      
      this.show_data_analysis = false
      this.show_guess = true
    },
    swiperight: function () {  
      this.sethomeIndex(1)
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
    swiperleft: function () { 
      this.sethomeIndex(1)
      this.$router.push({name:"home"})
      //this.$router.push({'path':'/forum'});
      // if (this.show_data_analysis) {
      //   this.onItemClick_video()
      //   console.log("111")
      // }else if(this.show_video) {
      //   this.onItemClick_guess()
      //   console.log("222")
      // }
    }
  },
  mounted () {
   const _this = this
    
      get_match_detail_analise_data(this.$store.state.user.match_detail_id)
    .then(res => {

      console.log(res.data)
      this.major_max = res.data[0].major
      this.unmajor_max = res.data[0].unmajor
      this.test = "test"
     
      this.major = res.data[0].major_name
      
      this.unmajor = res.data[0].unmajor_name
      this.major_full = res.data[0].major
      this.unmajor_full = res.data[0].unmajor
      // get_guss_data(res.data[0].major,res.data[0].unmajor)
      // .then(res => {
      //   console.log(res.data)
      //   console.log("---------------")
      //   console.log(parseFloat(res.data[0].major_rate))
      //   this.major_rate=parseInt(parseFloat(res.data[0].major_rate)*100)
        
      //   this.unmajor_rate=parseInt(parseFloat(res.data[0].unmajor_rate)*100)
      //   this.m = res.data[1][0]
      //   this.um = res.data[1][1]
      //   this.guss = res.data[3]
      //   this.his = res.data[2]
      //   console.log(this.win_rate)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      this.time = res.data[0].date
      this.data_list = res.data[1].rank
     
      this.num = res.data[0].video_length
     
      
      if(res.data[0].video_length==2){
        this.name1=res.data[0].video[0].name
        this.address1 = res.data[0].video[0].path
        this.name2=res.data[0].video[1].name
        this.address2 = res.data[0].video[1].path
      }
      if(res.data[0].video_length==3){
        this.name1=res.data[0].video[0].name
        this.address1 = res.data[0].video[0].path
        this.name2=res.data[0].video[1].name
        this.address2 = res.data[0].video[1].path
        this.name3=res.data[0].video[2].name
        this.address3 = res.data[0].video[2].path
      }
      this.team.team1 = res.data[0].major_name
      this.team.team2 = res.data[0].unmajor_name
      
      for(let i = 0;i < 6;i++){
        this.data[i].name=res.data[2].major
        this.data[i].分数 = res.data[2].data[i].major_score
        this.data[i+6].name=res.data[2].unmajor
        this.data[i+6].分数 = res.data[2].data[i].major_score
      }
      
      
      
      this.recent_data_left = res.data[3].major_lately.slice(0,6)
      this.recent_data_right = res.data[3].unmajor_lately.slice(0,6)
      for(let i = 0;i<6;i++){
        if(this.recent_data_left[i].major==this.team.team1){
          this.recent_data_left_end.push({
            'time': this.recent_data_left[i].time,
            'result': this.recent_data_left[i].result,
            'leftScore': this.recent_data_left[i].major_score,
            'rightScore': this.recent_data_left[i].unmajor_score,
            'leftTeam': this.recent_data_left[i].major,
            'rightTeam': this.recent_data_left[i].unmajor,
            'master': '主',
            'show': 0

          })
          
        }else {
          this.recent_data_left_end.push({
            'time': this.recent_data_left[i].time,
            'result': this.recent_data_left[i].result,
            'leftScore': this.recent_data_left[i].major_score,
            'rightScore': this.recent_data_left[i].unmajor_score,
            'leftTeam': this.recent_data_left[i].major,
            'rightTeam': this.recent_data_left[i].unmajor,
            'master': '客',
            'show': 1
          })
        }
          
      }
      for(let i = 0;i<6;i++){
        if(this.recent_data_left[i].major==this.team.team1){
          this.recent_data_right_end.push({
            'time': this.recent_data_left[i].time,
            'result': this.recent_data_left[i].result,
            'leftScore': this.recent_data_left[i].major_score,
            'rightScore': this.recent_data_left[i].unmajor_score,
            'leftTeam': this.recent_data_left[i].major,
            'rightTeam': this.recent_data_left[i].unmajor,
            'master': '主',
            'show': 0
          })
        }else {
          this.recent_data_right_end.push({
            'time': this.recent_data_left[i].time,
            'result': this.recent_data_left[i].result,
            'leftScore': this.recent_data_left[i].major_score,
            'rightScore': this.recent_data_left[i].unmajor_score,
            'leftTeam': this.recent_data_left[i].major,
            'rightTeam': this.recent_data_left[i].unmajor,
            'master': '客',
            'show': 1
          })
        }
          
      }
      
      this.his_data = res.data[4]
      for(let i = 0;i<res.data[4].length;i++)
      {
        this.his_data_end.push({
          'time': this.his_data[i].date,
          'match': this.his_data[i].vs,
          'master': this.his_data[i].major,
          'customer': this.his_data[i].unmajor,
          'score_customer': this.his_data[i].score.split("-")[1],
          'score_master': this.his_data[i].score.split("-")[0]
        })
        }
      //this.message_his_data = res.data.message_his_data
      this.team1_picture = res.data[0].major_img
      this.team2_picture = res.data[0].unmajor_img
      
      this.play_video = res.data.play_video
      
      // this.win_rate[0].name =  this.team.team2
      // this.win_rate[1].name =  this.team.team1
     
    //  this.initHisto()
    console.log("&&&&&&&&&&&&&")
    console.log(this.win_rate)
   // this.initHisto_rate()
   // 
      this.$nextTick(()  =>  {
        _this.setHeight()
        _this._initBScroll()
         
         _this.initHisto()
         //

      
      })
    })
    .catch(err => {
      console.log(err)
    })
      this.match_id = this.$store.state.user.match_detail_id
       get_guss_data(this.$store.state.user.major,this.$store.state.user.unmajor)
      .then(res => {
        console.log(res.data)
        console.log("---------------")
        console.log(parseFloat(res.data[0].major_rate))
        this.major_rate=parseFloat(res.data[0].major_rate)
        
        this.unmajor_rate=parseFloat(res.data[0].unmajor_rate)
        this.m = res.data[1][0]
        this.um = res.data[1][1]
        this.guss = res.data[3]
        this.his = res.data[2]
        console.log(this.win_rate)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
}
</script>

<style>
.background_top {
  background-image: url('http://47.94.93.50:8080/dist/static/matche_detail.png');
  height: 200px;
  width: 100%;
  background-size: cover;
  position: relative;
}
.background_top2 {
  background-image: url('http://47.94.93.50:8080/dist/static/matche_detail.png');
  height: 150px;
  width: 100%;
  background-size: cover;
  position: relative;
}
.team_icon {
 
}
.return {
  width: 6%;
  position: absolute;
  left: 2%;
  top: 4%;
}
.icon1 {
  height: 60%;
  position: absolute;
  left: 10%;
  width: 20%;
  top: 30%;
}
.icon2 {
  height: 60%;
  position: absolute;
  right: 10%;
  width: 20%;
  top: 30%;
}
.left_text {
  position: absolute;
  top: 65%;
  left: 10%;
}
.right_text {
  position: absolute;
  top: 65%;
  right: 10%;
}
.match_time1 {
  position: absolute;
  top: 65%;
  left: 32%;
}
.match_time2 {
  position: absolute;
  top: 65%;
  left: 44%;
}
.result_score {
  position: absolute;
  top: 41%;
  left: 43%;
}
.content_tab {
  height: 100%;
  width: 60%;
}
.content {
  background: white;
}
.data_analysis {
  position: relative;
  background: white;
}
.data_analysis_team_icon1 {
  width: 11%;
  position: absolute;
  left: 3%;
}
.data_recent_team1 {
  position: absolute;
  left: 21%;
  top: 2%;
}
.data_recent_team2 {
  position: absolute;
  right: 25%;
  top: 2%;
}
.data_analysis_team_icon2 {
  width: 11%;
  position: absolute;
  right: 4%;
}
.data_recent_team_icon1 {
  width: 11%;
  position: absolute;
  left: 9%;
}
.data_recent_team_icon2 {
  width: 11%;
  position: absolute;
  right: 13%;
}
.data_analysis_team_test1 {
  position: absolute;
  left: 15%;
  top: 2%;
}
.data_analysis_team_test2 {
  position: absolute;
  right: 16%;
  top: 2%;
}
.recent_ {
  position: relative;
}
.iswin {
  color:#CC0000 
}
.his_message {
  position: absolute;
  overflow: hidden;
}
.data_analysis_wrepper {
  position: absolute;
  overflow: hidden;
}
.best_player::before {
    border-left: 1px solid #FFF!important;
    color: #FFF!important;
}
.recent_record::before {
  border-left: 1px solid #FFF!important;
    color: #FFF!important;
}
.vux-table td::before, .vux-table th::before {
  border-bottom: 1px solid #FFF!important;
  color: #FFF!important;
}
a:link {color: rgb(187, 187, 187)}
a:visited {color: rgb(187, 187, 187)}
</style>