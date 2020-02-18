<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperight" :swipe-options="{direction: 'horizontal'}">

        <div class="background_top2" >
            <img src="/static/return.png" class="return" @click="return_last()">
            <img slot="icon" :src="team.img1" style="height: 30%;width: 15%;" class="icon1">
            <p style="color: white;" class="left_text">{{team.team1}}(主)</p>
            <p style="color: white;" class="result_score" >{{team.score1}}-{{team.score2}}</p>
            <p style="color: white;" class="match_time">已结束</p>
            <img slot="icon" :src="team.img2" style="height: 30%;width: 15%;" class="icon2">
            <p style="color: white;" class="right_text">{{team.team2}}(客)</p>
        </div>
        <div class="content" >
          <tab class="content_tab" default-color="#888888" active-color="#000000" bar-active-color="#DD0000">
            <tab-item  @on-item-click="onItemClick_data()" :selected="show_data_analysis">战报</tab-item>
            <tab-item  @on-item-click="onItemClick_video()" :selected="show_video">统计</tab-item>
            <tab-item @on-item-click="onItemClick_guess()" :selected="show_guess">竞猜</tab-item>
          </tab>
          <div v-show="false">
            <div style="width:98%;border-top-left-radius:12px;border-top-right-radius:12px;overflow:hidden;margin: 10px auto;background-image:/static/video.png">
              <img src="/static/video.png" style="width:100%;">
              <img src="/static/video_play.png" style="width: 10%;position: absolute;top: 45%;left: 42%;">
            </div>
            <div >
              
                
                <van-tag mark color="#2d2d2d">本场最佳</van-tag>
              
              <br>
              <van-row style="margin-left: 5px;">
                <van-col span="6">
                  <img src="/static/man.jpg" style="width:47%;border-radius: 50%;">
                  <span>杰特</span>
                </van-col>
                  <van-col span="18">
                  </van-col>
              </van-row>
              <van-row style="margin-left: 5px;">
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">33</p>
                  <p>得分</p>
                </van-col>
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">14</p>
                  <p>篮板</p>
                </van-col>
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">3</p>
                  <p>助攻</p>
                </van-col>
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">1</p>
                  <p>抢断</p>
                </van-col>
                <van-col span="4">
                  <p style="font-weight: bold;margin-left: 6px;">2</p>
                  <p>盖帽</p>
                </van-col>
              </van-row>
              <br>
              <van-row style="margin-left: 5px;">
                <van-col span="6">
                  <img src="/static/man.jpg" style="width:47%;border-radius: 50%;">
                  <span>杰特</span>
                </van-col>
                  <van-col span="18">
                  </van-col>
              </van-row>
              <van-row style="margin-left: 5px;">
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">33</p>
                  <p>得分</p>
                </van-col>
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">14</p>
                  <p>篮板</p>
                </van-col>
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">3</p>
                  <p>助攻</p>
                </van-col>
                <van-col span="5">
                  <p style="font-weight: bold;margin-left: 6px;">1</p>
                  <p>抢断</p>
                </van-col>
                <van-col span="4">
                  <p style="font-weight: bold;margin-left: 6px;">2</p>
                  <p>盖帽</p>
                </van-col>
              </van-row>
            </div>
          </div>
          <div>
            <div>
              <van-row>
                <van-col span="4">
                </van-col>
                <van-col span="4">
                  第一节
                </van-col>
                <van-col span="4">
                  第二节
                </van-col>
                <van-col span="4">
                  第三节
                </van-col>
                <van-col span="4">
                  第四节
                </van-col>
                <van-col span="4">
                  <p style="">总分</p>
                 
                </van-col>
              </van-row>
              <van-divider />
              <van-row>
                <van-col span="4">
                  <p style="margin-left: 5px;">{{linedata[0].name}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[0].分数}}</p>    
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[1].分数}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[2].分数}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[3].分数}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 5px;">{{linedata[0].分数+linedata[1].分数+linedata[2].分数+linedata[3].分数}}</p>
                </van-col>
              </van-row>
              <van-row>
                <van-col span="4">
                  <p style="margin-left: 5px;">{{linedata[4].name}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[4].分数}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[5].分数}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[6].分数}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">{{linedata[7].分数}}</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 5px;">{{linedata[4].分数+linedata[5].分数+linedata[6].分数+linedata[7].分数}}</p>
                </van-col>
              </van-row>
              <canvas id="container" width="400" height="260"></canvas>
              
              <van-tag mark color="#2d2d2d" >本场单项最佳</van-tag>
              
              <br>
              <div>
                      <div v-for="item in data_list">
                       <van-row style="margin-left: 5px;">
                          <van-col span="6">
                            <div>
                              <img :src="item.picture1" style="width:35%;margin-left: 29px;">
                            </div>
                            
                          </van-col>
                          <van-col span="4">
                             <p style="color: #CC0000;font-weight:bold">{{item.score1}}</p>
                         
                          </van-col>
                          <van-col span="4">
                             <p style="color: #CC0000;font-weight:bold">{{item.t}}</p>
                         
                          </van-col>
                          <van-col span="4">
                            <span style="color: #000099;font-weight:bold">{{item.score2}}</span>
                          </van-col>
                          <van-col span="6">
                            <div style="text-align: center;"><img :src="item.picture2" style="width:35%;margin-right: 31px;"></div>
                            
                          </van-col>
                        </van-row>
                        <van-row>
                          <van-col span="6">
                             <div style="text-align: center;">{{item.name1}}</div>
                          </van-col>
                          <van-col span="10">
                          </van-col>
                          
                          <van-col span="8">
                            <div  style="text-align: center;">{{item.name2}}</div>
                          </van-col>
                        </van-row>       
                      </div>
                <br>
                <hr />
                <div>
                    <div style="width:20%;float:left;">
                      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
                        <thead>
                          <tr style="background-color: #F7F7F7;font-size:16px;">
                            <th>{{team.team1}}</th>
                          </tr>
                        </thead>
                        <tbody style="font-size:10px;">
                          <tr v-for="item in major_data">
                            <td>{{item.name}}</td>
                          </tr>
                          <tr style="background-color:#f7f7f7;">
                            <td>{{team.team2}}</td>
                            <tr v-for="item in unmajor_data">
                              <td>{{item.name}}</td>
                            </tr>
                          </tr>
                        </tbody>
                      </x-table> 
                    </div>
                    <div class="person-wrap" ref="personWrap" style="width:80%;float:left;overflow:hidden;">
                      <div class="person-list" ref="personTab">
                        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;" >
                        <thead>
                          <tr style="background-color: #F7F7F7;font-size:16px;">
                            <th>得分</th>
                            <th>篮板</th>
                            <th>助攻</th>
                            <th>三分命中率</th>
                            <th>二分命中率</th>
                            <th>抢断</th>
                            <th>盖帽</th>
                          </tr>
                        </thead>
                        <tbody style="font-size:10px;">
                          <tr v-for="item in major_data">
                                <td>{{item.score}}</td>
                                <td>{{item.lanban}}</td>
                                <td>{{item.zhugong}}</td>
                                <td>{{item.threepoint_rate}}</td>
                                <td>{{item.twopoint_rate}}</td>
                                <td>{{item.qiangduan}}</td>
                                <td>{{item.gaimao}}</td>
                              </tr>
                           <tr style="background-color: #F7F7F7">
                              <td>得分</td>
                              <td>篮板</td>
                              <td>助攻</td>
                              <td>三分命中率</td>
                              <td>二分命中率</td>
                              <td>抢断</td>
                              <td>盖帽</td>
                            </tr>
                            
                              
                                <tr v-for="item in unmajor_data">
                                  <td>{{item.score}}</td>
                                  <td>{{item.lanban}}</td>
                                  <td>{{item.zhugong}}</td>
                                  <td>{{item.threepoint_rate}}</td>
                                  <td>{{item.twopoint_rate}}</td>
                                  <td>{{item.qiangduan}}</td>
                                  <td>{{item.gaimao}}</td>
                                </tr>
                        </tbody>
                      </x-table> 
                       
                      </div>
                    </div>
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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { get_match_finish_data } from '@/api/user.js'
import F2 from '@antv/f2'
import _ from 'lodash'
import recentRecord from '@/components/recent_record.vue'
import BScroll from 'better-scroll'
import messageHis from '@/components/message_his.vue'
import { mapMutations } from 'vuex'
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
  }, //http://47.94.93.50:8080/demo/teamdetail?match_id=2*%E5%B9%BF%E4%B8%9C%E5%8D%8E%E5%8D%97%E8%99%8E
  data () {
    const self = this
    return {
      match_id:'',
      show1:true,
      show2:false,
      data_list:[],
      team:'',  
      show_data_analysis: true,
      show_video:false,
      show_guess:false,
      home_panel_class_data_analysis: {
        height: ""
      },
      home_panel_class_video: {
        height: ""
      },
      linedata: [
      ],
      data_list : [
      ],
      major_data: [],
      unmajor_data:[]
    }
  },
  methods: {

    ...mapMutations(['sethomeIndex']),
     personScroll() {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = 13 * 50;
      this.$refs.personTab.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    initHisto() {
      const self = this
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio
      });
      chart.source(this.linedata);
      chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = chart.get('legendController').legends.top[0];
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
          const legend = chart.get('legendController').legends.top[0];
          legend.setItems(chart.getLegendItems().country);
        }
      });
      chart.interval()
        .position('节数*分数')
        .color('name',function (name) {
            if (name == self.linedata[0].name) {
              return '#CC0000'
            } else  
              return '#000099'
          })
        .adjust({
          type: 'dodge',
          marginRatio: 0.05 // 设置分组间柱子的间距
        });
      chart.render();
    },
    fun () {
      get_match_finish_data()
    .then(res => {
      console.log(res.data)
      this.team = res.data.team
      this.$nextTick(()  =>  {
        this.setHeight()
        this._initBScroll()
        console.log(this.meunScroll)
      })
    })
    .catch(err => {
      console.log(err)
    })
    },
    _initBScroll() {
      //this.meunScroll = new BScroll(this.$refs.message,{})
      //this.data_analysis = new BScroll(this.$refs.data_analysis,{}) 
    },
    setHeight() {
        this.home_panel_class_data_analysis.height = window.innerHeight -244  + "px"
        this.home_panel_class_video.height = window.innerHeight -289.6+ "px"
    },
    return_last() {
      this.sethomeIndex(1)
      this.$router.push({name:"home"})
    },
    onItemClick_video() {
      this.show_guess = false
      this.show_data_analysis = false
      this.show_video = true
    },
    onItemClick_data() {
      this.show_guess = false
      this.show_video = false
      this.show_data_analysis = true
    },
    onItemClick_guess() {
      this.show_video = false
      this.show_data_analysis = false
      this.show_guess = true
    },
    swiperight: function () {  
      if (this.show_data_analysis) {
        this.sethomeIndex(1)
      this.$router.push({name:"home"})
      }else if(this.show_video) {
        this.onItemClick_data()
        console.log(this.show_video)
      }else if(this.show_guess) {
        this.onItemClick_video()
        console.log(this.show_video)
      }
    },
    swiperleft: function () { 
      //this.$router.push({'path':'/forum'});
      if (this.show_data_analysis) {
        this.onItemClick_video()
        console.log("111")
      }else if(this.show_video) {
        this.onItemClick_guess()
        console.log("222")
      }
    }
  },
  mounted () {
    this.$nextTick(()  =>  {
      
    })
    
    get_match_finish_data(this.$store.state.user.match_detail_id)
    .then(res => {
      console.log(res.data)
      this.team = {
          team1: res.data[0].major_name,
          team2: res.data[0].unmajor_name,
          score1: res.data[0].major_score,
          score2: res.data[0].unmajor_score,
          img1: res.data[0].major_img,
          img2: res.data[0].unmajor_img
        }
        this.linedata.push ({
          节数:'第一节',
          分数:res.data[1].major_one,
          name:res.data[1].major.substr(0,2)
        })
        this.linedata.push ({
          节数:'第二节',
          分数:res.data[1].major_two,
          name:res.data[1].major.substr(0,2)
        })
        this.linedata.push ({
          节数:'第三节',
          分数:res.data[1].major_three,
          name:res.data[1].major.substr(0,2)
        })
        this.linedata.push ({
          节数:'第四节',
          分数:res.data[1].major_four,
          name:res.data[1].major.substr(0,2)
        })
        this.linedata.push ({
          节数:'第一节',
          分数:res.data[1].unmajor_one,
          name:res.data[1].unmajor.substr(0,2)
        })
        this.linedata.push ({
          节数:'第二节',
          分数:res.data[1].unmajor_two,
          name:res.data[1].unmajor.substr(0,2)
        })
        this.linedata.push ({
          节数:'第三节',
          分数:res.data[1].unmajor_three,
          name:res.data[1].unmajor.substr(0,2)
        })
        this.linedata.push ({
          节数:'第四节',
          分数:res.data[1].unmajor_four,
          name:res.data[1].unmajor.substr(0,2)
        })
      this.data_list.push({
        't': '得分',
        'name1': res.data[2].major_score_name,
        'name2': res.data[2].unmajor_score_name,
        'score1': res.data[2].major_score,
        'score2': res.data[2].unmajor_score,
        'picture1': res.data[2].major_score_img,
        'picture2': res.data[2].unmajor_score_img
      })
      this.data_list.push({
        't': '盖帽',
        'name1': res.data[2].major_nutcap_name,
        'name2': res.data[2].unmajor_nutcap_name,
        'score1': res.data[2].major_nutcap_score,
        'score2': res.data[2].unmajor_nutcap_score,
        'picture1': res.data[2].major_nutcap_img,
        'picture2': res.data[2].unmajor_nutcap_img
      })
      this.data_list.push({
        't': '抢断',
        'name1': res.data[2].major_qiangduan_name,
        'name2': res.data[2].unmajor_qiangduan_name,
        'score1': res.data[2].major_qiangduan_score,
        'score2': res.data[2].unmajor_qiangduan_score,
        'picture1': res.data[2].major_qiangduan_img,
        'picture2': res.data[2].unmajor_qiangduan_img
      })
      this.data_list.push({
        't': '助攻',
        'name1': res.data[2].major_zhugong_name,
        'name2': res.data[2].unmajor_zhugong_name,
        'score1': res.data[2].major_zhugong_score,
        'score2': res.data[2].unmajor_zhugong_score,
        'picture1': res.data[2].major_zhugong_img,
        'picture2': res.data[2].unmajor_zhugong_img
      })
      this.data_list.push({
        't': '篮板',
        'name1': res.data[2].major_lanban_name,
        'name2': res.data[2].unmajor_lanban_name,
        'score1': res.data[2].major_lanban_score,
        'score2': res.data[2].unmajor_lanban_score,
        'picture1': res.data[2].major_lanban_img,
        'picture2': res.data[2].unmajor_lanban_img
      })
      this.major_data = res.data[3].major
      this.unmajor_data = res.data[3].unmajor
      this.$nextTick(()  =>  {
        this.setHeight()
        this._initBScroll()
        this.initHisto()
       this.personScroll() 
        console.log(this.meunScroll)
      })
    })
    .catch(err => {
      console.log(err)
    })
      this.match_id = this.$store.state.user.match_detail_id
  }
}
</script>

<style>
.van-coupon-list__empty p, .van-divider {
  margin: 3px 0;
}
.background_top2 {
  background-image: url('/static/matche_detail.png');
  height: 150px;
  width: 100%;
  background-size: cover;
  position: relative;
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
  top: 35%;
}
.icon2 {
  height: 60%;
  position: absolute;
  right: 10%;
  width: 20%;
  top: 35%;
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
.match_time {
  position: absolute;
  top: 79%;
  left: 44%;
}
.result_score {
  position: absolute;
  top: 41%;
  left: 38%;
  font-size: 25px;
}
.content_tab {
  height: 100%;
  width: 60%;
}
.content {
  background: white;
}
.data_analysis_wrepper {
  position: absolute;
  overflow: hidden;
}
</style>