<template>
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      

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
 </v-touch>
</template>
<style>
.team_wrapper_class {
  background-color: white;
  width: 100%;
}
</style>
<script>
import {get_match_data} from '@/api/user.js'
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import { List ,Image, Row, Col,Tab, Tabs } from 'vant'
import { Toast } from 'vant';
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
        all_list: [],
        listHeight:[],
        scrollY: 0,
         team_wrapper:{
           height:''
         },
         index:0,
         now_height:0,
         data_change:[],
         updata_flag:false,
         init_flag:false,
         now_loca:0,

      }
    },
    methods: {
      test(){
        
      },
      downLoad() {
        console.log("down")
        get_match_data(1)
        .then(res => {
          console.log("successDown")
          console.log(res.data)
          for(let i = 0; i < 3;i++){
            this.all_list.push(res.data[i])
          }
          for(let i = 0;i < 3; i++){
            this.loca += res.data[i].match_list.length*70 + 50
            this.now_height +=  res.data[i].match_list.length*70 + 44
         }
         this.rightScroll.scrollTo(0,-(this.now_height-this.loca),0)
         this.loca = 0
         this.updata_flag = false
        })
        .catch(err => {
          console.log(err)
        })
        this.$nextTick(()  =>  {
          
          this._calculateHeight()
          this._initBScroll()
          // for(let i = 0;i < this.all_list.length;i++ ){
          //   if (this.all_list[i].time[0]+this.all_list[i].time[1] == '明天')
          //    this.index=i
          //    break;
          // }
        })
      },
      upLoad() {
        console.log("up")
        get_match_data(-1)
        .then(res => {
          console.log(res.data)

          for(let j = 2;j >=0;j--){
            this.data_change.push(res.data[j])
            this.loca += res.data[j].match_list.length*70 + 50
          }
            //this.data_change=res.data
            for(let i =0;i<this.all_list.length;i++){
              this.data_change.push(this.all_list[i])
            }
            this.all_list = this.data_change
            this.data_change = []

          
          for(let i = 0;i < 3; i++){
          this.now_height +=  res.data[i].match_list.length*70 + 44
         }
         this.rightScroll.scrollTo(0,-this.loca,0)
         this.loca = 0
         this.updata_flag = false
        })
        .catch(err => {
          console.log(err)
        })
        this.$nextTick(()  =>  {
          
          this._calculateHeight()
          this._initBScroll()
          // for(let i = 0;i < this.all_list.length;i++ ){
          //   if (this.all_list[i].time[0]+this.all_list[i].time[1] == '明天')
          //    this.index=i
          //    break;
          // }
        })
      },
        _initBScroll() {
        this.rightScroll = new BScroll(this.$refs.right,{
          probeType: 3,click: true
        });
        this.rightScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y);
      })
        if(this.init_flag==false){
          this.rightScroll.scrollTo(0,-300,0)
          this.init_flag = true
        }
        
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
      match_detail(p,p2,match_id,score,score2) {
        
        if(score == 0 && score2 == 0) {
          this.$router.push({name:"match_detail"})
        }else {
         this.$router.push({name:"match_detail_finish"})
        }
      this.setMatchDeatilId(match_id)
      },
      onClick_team_ranking(index) {
        this.$router.push({name:"match_detail_finish"})
      },
      onClick_player_ranking(index) {
        this.$router.push({name:"match_detail_finish"})
      },
      setHeight() {
        this.team_wrapper.height = window.innerHeight - 151.5 + "px"
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
         'scrollY'() {
          console.log(this.scrollY)
            if(this.scrollY < 10 && this.updata_flag==false){
              console.log("1111111111111111")
              this.updata_flag = true
              this.upLoad()
            }else if(this.now_height - this.scrollY < 10&&this.updata_flag==false){
              this.updata_flag = true
              this.downLoad()
              console.log("222222222222222")
            }
         }
      },
      mounted() {
        // 在DOM加载后，执行，获得window的高度，并减去header和tabbar的高度，
        // 96是自己在开发者模式看到的，header的height为 40，上下padding为 3，
        // tabbar的height为 50
        
        get_match_data()
        .then(res => {
          console.log(res.data)
         this.all_list =  res.data
         for(let i = 0;i < 3; i++){
          this.now_height +=  res.data[i].match_list.length*70 + 44
         }
        })
        .catch(err => {
          console.log(err)
        })
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