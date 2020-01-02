<template>
  <v-touch v-on:swipeleft="swiperleft" :swipe-options="{direction: 'horizontal'}">
    
        <div class="background_top" v-if="show1">
            <img slot="icon" src="/static/tim/1.png" style="height: 30%;" class="icon1">
            <p style="color: white;" class="left_text">四川(主)</p>
            <p style="color: white;" class="match_time1">开赛:12月31日 19:35</p>
            <img slot="icon" src="/static/tim/2.png" style="height: 30%;" class="icon2">
            <p style="color: white;" class="right_text">北京(客)</p>
        </div>
        <div class="background_top2" v-if="show2">

            <img slot="icon" src="/static/tim/1.png" style="height: 30%;width: 15%;" class="icon1">
            <p style="color: white;" class="left_text">{{team.team1}}(主)</p>
            <p style="color: white;" class="result_score" >108-124</p>
            <p style="color: white;" class="match_time">已结束</p>
            <img slot="icon" src="/static/tim/2.png" style="height: 30%;width: 15%;" class="icon2">
            <p style="color: white;" class="right_text">{{team.team2}}(客)</p>
        </div>
        <div class="content" >
          <tab class="content_tab" default-color="#888888" active-color="#000000" bar-active-color="#DD0000">
            <tab-item selected @on-item-click="onItemClick_data()">数据分析</tab-item>
            <tab-item  @on-item-click="onItemClick_video()">留言助威</tab-item>
            <tab-item @on-item-click="onItemClick_guess()">战果竞猜</tab-item>
          </tab>

          <br>
          <div id="data" v-show="show_data_analysis">
            <div class="data_analysis" >
              赛季最佳球员
              <br>
              <img src="/static/tim/1.png" class="data_analysis_team_icon1">
              <span class="data_analysis_team_test1" style="color:#CC0000">{{team.team1}}</span> 
              <img src="/static/tim/2.png" class="data_analysis_team_icon2">
              <span class="data_analysis_team_test2" style="color:#000099">{{team.team2}}</span> 
              <br>
              <br>
              <x-table>
                <tbody>
                  <div v-for="item in data_list">
                    <tr>
                      <td style="width:25%">
                        <img src="/static/man.jpg" style="width:35%;margin: 20px 0 0 0;">
                        <br>
                      </td>
                      <td style="width:19%"><p style="color: #CC0000;font-weight:bold">{{item.score1}}<p></p></td>
                      <td style="width:12%">{{item.t}}</td>
                      <td style="width:19%"><span style="color: #000099;font-weight:bold">{{item.score2}}</span></td>
                      <td style="width:25%">
                        <img src="/static/man.jpg" style="width:35%">
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
                  </div>
                </tbody>
              </x-table>
            </div>
            <br>
            <hr />
            <br>
             赛季数据
            <canvas id="container" width="400" height="260"></canvas>
            <hr />
            <br>
            最近战绩
            <div class="recent_">
              <img src="/static/tim/1.png" class="data_recent_team_icon1">
              <span class="data_recent_team1" style="color:#CC0000">{{team.team1}}</span> 
              <img src="/static/tim/2.png" class="data_recent_team_icon2">
              <span class="data_recent_team2" style="color:#000099">{{team.team2}}</span> 
              <br>
              <br>
              <x-table>
                <tbody>
                  <tr>
                    <td>
                      <x-table>
                        <tbody>
                          <div v-for="item in recent_data">
                            <tr>
                              <td>
                                <recent-record :leftWinOrfalse= "item.result" :leftScore="item.leftScore" :rightScore="item.rightScore" :leftTeam="item.leftTeam" :rightTeam="item.rightTeam" :time="item.time" :show="item.show" :master="item.master"></recent-record>
                              </td>
                            </tr>
                          </div>
                        </tbody>
                      </x-table>
                    </td>
                    <td>
                      <x-table>
                        <tbody>
                          <div v-for="item in recent_data">
                            <tr>
                              <td>
                                <recent-record :leftWinOrfalse= "item.result" :leftScore="item.leftScore" :rightScore="item.rightScore" :leftTeam="item.leftTeam" :rightTeam="item.rightTeam" :time="item.time" :show="item.show" :master="item.master"></recent-record>
                              </td>
                            </tr>
                          </div>
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
              本赛季交战
              <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
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
                    <tr v-for="item in his_data">
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
  </v-touch>
</template>
<script>
import { Tab, TabItem, XTable} from 'vux'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { get_match_detail_analise_data } from '@/api/user.js'
import F2 from '@antv/f2'
import _ from 'lodash'
import recentRecord from '@/components/recent_record.vue'
export default {
  components: {
    Header,
    Footer,
    Tab,
    TabItem,
    XTable,
    recentRecord
  },
  data () {
    return {
      match_id:'',
      show1:true,
      show2:false,
      data_list:[],
      team:'',
      data: [],
      recent_data:[],
      his_data: [],
      show_data_analysis: true,
      show_video:false,
      show_guess:false
    }
  },
  methods: {
    initHisto() {
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio
      });
      chart.source(this.data);
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
        .position('分数类型*分数')
        .color('name',function (name) {
            if (name == '江苏') {
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
   /* swiperleft: function () {  //左划切换到goods页
      this.$router.push({'path':'/goods'});
    },*/
    swiperleft: function () { //右滑切换到论坛页
      //this.$router.push({'path':'/forum'});
      this.$router.push({name:"forum"})
    }
  },
  mounted () {
    get_match_detail_analise_data()
    .then(res => {
      console.log(res.data)
      this.data_list = res.data.data_list
      this.team = res.data.team
      this.data = res.data.data
      this.recent_data = res.data.recent_data
      this.his_data = res.data.his_data
      this.initHisto()
    })
    .catch(err => {
      console.log(err)
    })
      this.match_id = this.$store.state.user.match_detail_id
  }
}
</script>

<style>
.background_top {
  background-image: url('/static/matche_detail.png');
  height: 200px;
  width: 100%;
  background-size: cover;
  position: relative;
}
.background_top2 {
  background-image: url('/static/matche_detail.png');
  height: 150px;
  width: 100%;
  background-size: cover;
  position: relative;
}
.team_icon {
 
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
  top: 6%;
}
.data_analysis_team_test2 {
  position: absolute;
  right: 16%;
  top: 6%;
}
.recent_ {
  position: relative;
}
.iswin {
  color:#CC0000 
}
</style>