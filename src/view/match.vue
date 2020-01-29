<template>
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text=""
        @load="onLoad"
      >
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
            
            <div @click="match_detail(item.p,item.p2,item.match_id)">
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
    </van-list>
 </div>
 </v-touch>
</template>
<style>
.team_wrapper_class {
  background-color: white;
}
</style>
<script>
import {get_match_data} from '@/api/user.js'
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import { List ,Image, Row, Col,Tab, Tabs } from 'vant'
export default{
    name: 'Match',
    components: {
      List,
      Image,
      Tab, 
      Row,
      Col,
      Tabs
    },
    data(){
      return{
        loading:'',
        finished:'',  
        all_list: [
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"",
              score:"69",
              img:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message:"10:35",
              name:'八一',
              p2:"WIN",
              score2:"69",
              name2:'南昌',
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
              match_id:""
            },
            {
              p:"WIN",
              score:"63",
              name:'青岛',
              img:"http://47.94.93.50:8080/dist/static/tim/2.png",
              message:"16:45",
              p2:"",
              name2:'广东',
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:""
              
            },
            {
              p:"",
              score:"67",
              img:"http://47.94.93.50:8080/dist/static/tim/3.png",
              message:"13:35",
              p2:"WIN",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
             match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"WIN",
              score:"69",
              img:"http://47.94.93.50:8080/dist/static/tim/4.png",
              message:"13:40",
              name2:'南昌',
              name:'青岛',
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:""
             
            },
            {
              p:"WIN",
              score:"63",
              img:"http://47.94.93.50:8080/dist/static/tim/5.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            },
            {
              p:"",
              score:"67",
              img:"http://47.94.93.50:8080/dist/static/tim/6.png",
              message:"12:35",
              p2:"WIN",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"WIN",
              score:"69",
              img:"http://47.94.93.50:8080/dist/static/tim/7.png",
              message:"10:35",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
             match_id:""
            },
            {
              p:"WIN",
              score:"63",
              img:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            },
            {
              p:"WIN",
              score:"67",
              img:"http://47.94.93.50:8080/dist/static/tim/2.png",
              message:"7:35",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"WIN",
              score:"69",
              img:"http://47.94.93.50:8080/dist/static/tim/3.png",
              message:"9:30",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
             match_id:""
            },
            {
              p:"WIN",
              score:"63",
              img:"http://47.94.93.50:8080/dist/static/tim/4.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
              match_id:""
            },
            {
              p:"WIN",
              score:"67",
              img:"http://47.94.93.50:8080/dist/static/tim/5.png",
              message:"8:45",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"",
              score:"69",
              img:"http://47.94.93.50:8080/dist/static/tim/6.png",
              message:"6:35",
              p2:"WIN",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:"",
             name2:'南昌',
              name:'青岛',
            },
            {
              p:"WIN",
              score:"63",
              img:"http://47.94.93.50:8080/dist/static/tim/7.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:"",
              name2:'南昌',
              name:'青岛',
            },
            {
              p:"",
              score:"67",
              img:"http://47.94.93.50:8080/dist/static/tim/1.png",
              message:"15:45",
              p2:"WIN",
              score2:"69",
              img2:"http://47.94.93.50:8080/dist/static/tim/6.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        }
      ],
        listHeight:[],
        scrollY: 0,
         team_wrapper:{
           height:'',
          
         },
         index:0
      }
    },
    methods: {
      onLoad() {},
        _initBScroll() {
        this.rightScroll = new BScroll(this.$refs.right,{
          probeType: 3,
          startY: 1000
        });
        this.rightScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y);
      })
      },
      _calculateHeight() {
        let teamList = this.$refs.right.getElementsByClassName('team-list-hock')
        let height = 0;
        this.listHeight.push(height);
        for(let i = 0;i < teamList.length;i++){
          let item = teamList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
        console.log(this.listHeight);
      },
      fun() {
        console.log("sss")
      this.scrollY = this.listHeight[this.index];
        this.rightScroll.scrollTo(0,-18000,0)
    },
      selectMenu(index) {
        console.log("index")
        console.log(index)

        this.scrollY = this.listHeight[index];
        this.rightScroll.scrollTo(0,-this.scrollY,0)
        console.log("end")
        console.log(this.scrollY)
      },
      ...mapMutations(['setMatchDeatilId']),
      match_detail(p,p2,match_id) {
          this.$router.push({name:"match_detail_finish"})
        
      
      this.setMatchDeatilId(match_id)
      },
      onClick_team_ranking(index) {
        this.$router.push({name:"match_detail_finish"})
      },
      onClick_player_ranking(index) {
        this.$router.push({name:"match_detail_finish"})
      },
      setHeight() {
        this.team_wrapper.height = window.innerHeight - 101.5 + "px"
      },
      swiperleft: function () {  //左划切换到搜索页
        // this.$router.push({'path':'/search'});
        //this.$router.push({name:"match_team_ranking"})
      },
      swiperright: function () { //右滑切换球队排名页
        //this.$router.push({name:"search"})
        //this.$router.push({'path':'/match_team_ranking'});
      }
      },
      watch:{
        // 'scrollY'() {
        //   console.log(this.scrollY)
        // }
      },
      mounted() {
        // 在DOM加载后，执行，获得window的高度，并减去header和tabbar的高度，
        // 96是自己在开发者模式看到的，header的height为 40，上下padding为 3，
        // tabbar的height为 50
        
        // get_match_data()
        // .then(res => {
        //   //console.log(res.data)
        //  //this.all_list =  res.data
        // })
        // .catch(err => {
        //   console.log(err)
        // })
        this.$nextTick(()  =>  {
          this.setHeight()
          this._calculateHeight()
          this._initBScroll()
          // for(let i = 0;i < this.all_list.length;i++ ){
          //   if (this.all_list[i].time[0]+this.all_list[i].time[1] == '明天')
          //    this.index=i
          //    break;
          // }
        })
      }
  }
 
</script>