<template>
  <div>
    <x-header :left-options="{backText: '',preventGoBack: true}" style="background-color:#2d2d2d;"@on-click-back="return_team_detail()">{{team}}
      <img src="/static/guanzhu.png" slot="right" style="width: 20px;" v-if="guznhu_flag">
      <span slot="right" v-if="!guznhu_flag">已关注</span>
    </x-header>
    <div>
      <div class="background_top2" >
            <img :src="res.img" style="width: 50px;position: absolute;left: 25px;top: 35px;">
            <span style="position: absolute;top: 24px;left: 105px;color: white;">战绩：{{res.战绩}}</span>
            <span style="position: absolute;top: 68px;left: 105px;color: white;">主场：{{res.主场}}</span>
        </div>
        <div class="content" >
          <tab class="content_tab" default-color="#888888" active-color="#000000" bar-active-color="#DD0000">
            <tab-item  @on-item-click="onItemClick_dongtai()" :selected="show_dongtai">动态</tab-item>
            <tab-item  @on-item-click="onItemClick_match()" :selected="show_match">赛程</tab-item>
            <tab-item @on-item-click="onItemClick_player()" :selected="show_player">球员</tab-item>
            
            
          </tab>
          <div v-show="show_dongtai" style="background-color:white;">
            <div class="newpage">
              <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              
              >
                <div style="position:relative;height:100px;" v-for="item in newpage" @click="to_deil_newpage(item.match_id)">
                  <van-divider />

                  <img :src="item.img" style="width: 30%;position: absolute;right: 3%;">
                  <div style="width: 60%;position: absolute;right: 38%;top: 10%;">
                    <p style="text-align: left;">{{item.title}}</p>
                  </div>
                  <img src="http://47.94.93.50:8080/dist/static/comment.png" style="width: 4%;position: absolute;top: 81%;left: 3%;">
                  <p style="font-size: 81%;position: absolute;top: 79%;left: 8%;">{{item.pinglun}}</p>
                  <img src="http://47.94.93.50:8080/dist/static/up.png" style="width: 4%;position: absolute;top: 80%;left: 18%;">
                  <p style="font-size: 81%;position: absolute;left: 23%;top: 79%;">{{item.dianzan}}</p>
                </div>   
              </van-list>
            </div>
          </div>
          <div v-show="show_match">
            <div :style="team_wrapper" ref="right"  class="team_wrapper_class">
              <div>
                <div v-for="item_all in all_list" class="team-list-hock">
                  <van-tabs 
                    
                    line-width="0px"
                    line-height="0px"
                  >
                    <van-tab :title="item_all.time" style="background-color:white;"></van-tab>
                  </van-tabs>
                  <div style="background:white;margin:0 0px 0 0px;height: 70px;" v-for="item in item_all.match_list">
                    
                    <div @click="match_detail(item.p,item.p2,item.match_id,item.score,item.score2)">
                      <van-row>
                        <van-col span="5">
                          <van-image
                            style="margin-left: 17px;margin-top: 8px;"
                            width="20px"
                            height="20px"
                            :src="item.img"
                          />
                         </van-col>
                        <van-col span="3">
                          <p style="position: absolute;left: 12%;margin-top: 5px;">{{item.name}}</p>
                        </van-col>
                        <van-col span="7">
                        </van-col>
                        <van-col span="2">
                          <p style="margin-left: -30px;margin-top: 5px;">{{item.score}}</p>
                        </van-col>
                        <van-col span="1">
                          <img src="http://47.94.93.50:8080/dist/static/win.png" style="width:13px;margin-left: -30px;margin-top: 11px;" v-if="item.p=='WIN'">
                        </van-col>
                        <van-col span="2">
                        </van-col>
                        <van-col span="4">
                          <img src="http://47.94.93.50:8080/dist/static/match_video.png"  style="width: 13px;position: absolute;right: 12%;margin-top: 11px;">
                          <span style="position: absolute;right: 4%;font-size: 14px;margin-top: 5px;">集锦</span>
                        </van-col>
                      </van-row>
                      <van-row>
                        <van-col span="5">
                          <van-image
                            style="margin-left: 17px;margin-top: 3px;"
                            width="20px"
                            height="20px"
                            :src="item.img2"
                          />
                        </van-col>
                        <van-col span="3">
                          <p style="position: absolute;left: 12%;">{{item.name2}}</p>
                        </van-col>
                        <van-col span="7">
                        </van-col>
                        <van-col span="2">
                          <p style="margin-left: -30px;">{{item.score2}}</p>
                        </van-col>
                        <van-col span="1">
                          <img src="http://47.94.93.50:8080/dist/static/win.png" style="width:13px;margin-left: -30px;margin-top: 6px;" v-if="item.p2=='WIN'">
                        </van-col>
                        <van-col span="2">
                        </van-col>
                        <van-col span="4">
                          <span style="font-size:10px;position: absolute;right: 4%;margin-top: 7px;">{{item.message2}}</span>
                        </van-col>
                      </van-row>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          </div>
          <div v-show="show_player" style="background-color:white;">
           
              <van-row>
                <van-col span="4"><p style="padding-top: 11px;padding-left: 21px;">球员</p></van-col>
                <van-col span="4"></van-col>
                <van-col span="8"><p style="padding-top: 11px;">位置</p></van-col>
                <van-col span="8"><p style="padding-top: 11px;">场均得分</p></van-col>
              </van-row>
            <div style="width: 95%;margin: 0 auto;height: 80px;margin-top: 5px;" >
              <van-row v-for="(item,index) in res.球员" :key="index"> 
                <van-col span="4"><img :src="item.img" style="width: 50px;"></van-col>
                <van-col span="8"><p >{{item.name}}</p><p>{{item.number}}号</p></van-col>
                <van-col span="10"><p style="padding-top: 11px;">{{item.place}}</p></van-col>
                <van-col span="2"><p style="padding-top: 11px;">{{26+index}}</p></van-col>
              </van-row>
              <van-divider />
          
            
              <span></span>
            </div>
          </div>
          
          
        </div>
    </div>
  </div>
</template>
<style>
.background_top2 {
  background-image: url('/static/matche_detail.png');
  height: 150px;
  width: 100%;
  background-size: cover;
  position: relative;
}
.team_wrapper_class {
  background-color: white;
}
</style>
<script>
import BScroll from 'better-scroll'
import { XHeader, Tab, TabItem,} from 'vux'
import { mapMutations } from 'vuex' 
import {get_team_data } from '@/api/user.js'
export default{
   components: {
    XHeader,
    Tab, TabItem,
   },
   data(){
      return{
        show_flag_arry:['false','false','false','false','false','false'],
        guznhu_flag:false,
        show_dongtai: false,
        show_match: false,
        show_player: false,
       
        res:null,

        team:'',
        finished:'',
        loading:'',
        newpage:[
          
        ],
        all_list:[
          

        ]
        }
    },
    methods: {
      ...mapMutations(['sethomeIndex']),
      return_team_detail() {
        this.sethomeIndex(2)
        this.$router.push({name:"home"})
      },
      onItemClick_match() {
        this.show_match = true
       
        this.show_player = false
        
        this.show_dongtai = false
      },
      onItemClick_dongtai() {
        this.show_dongtai = true
        this.show_match = false
        
        this.show_player = false
        
        
      },
      onItemClick_player() {
        this.show_match = false
        
        this.show_player = true
       
        this.show_dongtai = false
      },
     
      
      set_show_flag(tag_flag) {

      }
    },
   mounted() { 
    this.team = this.$store.state.user.team
    console.log(this.$store.state.user.team)
    get_team_data(this.$store.state.user.team)
    .then(res => {
      //console.log(res.data)
      this.res = res.data
      this.newpage = res.data.动态
      for(let i = 0;i < res.data.赛程.length;i++){
        this.all_list.push(
        {
            'time':  res.data.赛程[i].time,
            'match_list':[
              {
                'p': "-",
                'score': res.data.赛程[i].match_list[0].major_score,
                'img': res.data.赛程[i].match_list[0].major_img,
                'p2':  "-",
                'score2':  res.data.赛程[i].match_list[0].unmajor_score,
                'match_id':  "37*上海大鲨鱼",
                'name':  res.data.赛程[i].match_list[0].major,
                'message': "19:35",
                'name2': res.data.赛程[i].match_list[0].unmajor,
                'img2':  res.data.赛程[i].match_list[0].unmajor_img,
                'message2':  "常规赛第37轮",
              }
            ]
          },
        )
      }
      
      
    })
    .catch(err => {
      console.log(err)
    })
    this.$nextTick(()  =>  {
    })
  }
}
</script>