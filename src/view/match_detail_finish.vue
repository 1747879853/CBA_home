<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperight" :swipe-options="{direction: 'horizontal'}">

        <div class="background_top2" >
            <img src="/static/return.png" class="return" @click="return_last()">
            <img slot="icon" src="/static/tim/1.png" style="height: 30%;width: 15%;" class="icon1">
            <p style="color: white;" class="left_text">{{team.team1}}(主)</p>
            <p style="color: white;" class="result_score" >108-124</p>
            <p style="color: white;" class="match_time">已结束</p>
            <img slot="icon" src="/static/tim/2.png" style="height: 30%;width: 15%;" class="icon2">
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
              <div style="margin-left: 5px;">
                <p>本场最佳</p>
              </div>
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
                  <p style="margin-left: 5px;">青岛</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">28</p>    
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">35</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">29</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">24</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 5px;">116</p>
                </van-col>
              </van-row>
              <van-row>
                <van-col span="4">
                  <p style="margin-left: 5px;">青岛</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">28</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">35</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">29</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 15px;">24</p>
                </van-col>
                <van-col span="4">
                  <p style="margin-left: 5px;">116</p>
                </van-col>
              </van-row>
              <canvas id="container" width="400" height="260"></canvas>
              &nbsp;&nbsp;&nbsp;<p>本场单项最佳</p>
              <div>
                  <x-table full-bordered :content-bordered="false" :cell-bordered="false" class="best_player">
                    <tbody>
                      <div v-for="item in data_list">
                        <tr>
                          <td style="width:25%">
                            <img src="http://47.94.93.50:8080/dist/static/man.jpg" style="width:35%;margin: 20px 0 0 0;">
                            <br>
                          </td>
                          <td style="width:19%"><p style="color: #CC0000;font-weight:bold">{{item.score1}}<p></p></td>
                          <td style="width:12%">{{item.t}}</td>
                          <td style="width:19%"><span style="color: #000099;font-weight:bold">{{item.score2}}</span></td>
                          <td style="width:25%">
                            <img src="http://47.94.93.50:8080/dist/static/man.jpg" style="width:35%">
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
                <br>
                <hr />
                <div>
                    <div style="width:20%;float:left;">
                      <x-table full-bordered :content-bordered="false" :cell-bordered="false" class="best_player"  style="background-color:#fff;">
                        <thead>
                          <tr style="background-color: #F7F7F7">
                              <th>辽宁</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>史蒂芬森</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>史蒂芬森</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>史蒂芬森</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>

                           <tr style="background-color:#f7f7f7;">
                            <td>广东</td>
                          </tr>
                          <tr>
                            <td>史蒂芬森</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>史蒂芬森</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>史蒂芬森</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>
                          <tr>
                            <td>王华东</td>
                          </tr>

                        </tbody>
                      </x-table>
                    </div>
                    <div class="person-wrap" ref="personWrap" style="width:80%;float:left;overflow:hidden;">
                      <div class="person-list" ref="personTab">
                        <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
                          <thead>
                            <tr style="background-color: #F7F7F7">
                              <th>时间</th>
                              <th>得分</th>
                              <th>篮板</th>
                              <th>助攻</th>
                              <th>投篮</th>
                              <th>三分</th>
                              <th>罚球</th>
                              <th>前板</th>
                              <th>后板</th>
                              <th>抢断</th>
                              <th>盖帽</th>
                              <th>失误</th>
                              <th>犯规</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                             <tr style="background-color:#f7f7f7;">
                              
                              <td>时间</td>
                              <td>得分</td>
                              <td>篮板</td>
                              <td>助攻</td>
                              <td>投篮</td>
                              <td>三分</td>
                              <td>罚球</td>
                              <td>前板</td>
                              <td>后板</td>
                              <td>抢断</td>
                              <td>盖帽</td>
                              <td>失误</td>
                              <td>犯规</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
                            </tr>
                            <tr>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td>Apple</td>
                              <td>$1.25</td>
                              <td> x 1</td>
                              <td> x 1</td>
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
  },
  data () {
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
        {
          节数:'第一节',
          分数:25,
          name:'江苏'
        },
        {
          节数:'第二节',
          分数:36,
          name:'江苏'
        },
        {
          节数:'第三节',
          分数:15,
          name:'江苏'
        },
        {
          节数:'第四节',
          分数:25,
          name:'江苏'
        },{
          节数:'第一节',
          分数:25,
          name:'辽宁'
        },
        {
          节数:'第二节',
          分数:36,
          name:'辽宁'
        },
        {
          节数:'第三节',
          分数:28,
          name:'辽宁'
        },
        {
          节数:'第四节',
          分数:79,
          name:'辽宁'
        }
      ],
      data_list : [
                {
                  't': '得分',
                  'name1': '安东尼奥-布莱克呢',
                  'name2': '兰斯-斯蒂芬孙',
                  'score1': 38.6,
                  'score2': 36.3,
                  'picture1': '/static/man.jpg',
                  'picture2': '/static/man.jpg'
                },
                {
                  't': '篮板',
                  'name1': '安东尼奥-布莱克呢',
                  'name2': '兰斯-斯蒂芬孙',
                  'score1': 38.6,
                  'score2': 36.3,
                  'picture1': '/static/man.jpg',
                  'picture2': '/static/man.jpg'
                },
                {
                  't': '助攻',
                  'name1': '安东尼奥-布莱克呢',
                  'name2': '兰斯-斯蒂芬孙',
                  'score1': 38.6,
                  'score2': 36.3,
                  'picture1': '/static/man.jpg',
                  'picture2': '/static/man.jpg'
                },
                {
                  't': '抢断',
                  'name1': '安东尼奥-布莱克呢',
                  'name2': '兰斯-斯蒂芬孙',
                  'score1': 38.6,
                  'score2': 36.3,
                  'picture1': '/static/man.jpg',
                  'picture2': '/static/man.jpg'
                },
                {
                  't': '盖帽',
                  'name1': '安东尼奥-布莱克呢',
                  'name2': '兰斯-斯蒂芬孙',
                  'score1': 38.6,
                  'score2': 36.3,
                  'picture1': '/static/man.jpg',
                  'picture2': '/static/man.jpg'
                }
      ]
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
      this.initHisto()
       this.personScroll() 
    })
    
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