<template>
	<v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
    <Header></Header>
    <tab bar-active-color="#668599" active-color="#000000">
      <tab-item  @on-item-click="onClick_schedule">赛程</tab-item>
      <tab-item selected  >球队排名</tab-item>
      <tab-item @on-item-click="onClick_player_ranking">球员排名</tab-item>
    </tab> 
		<div class="match_team">
			<div class="menu-wrapper" ref="wrapper1">     
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
                  <img src="/static/win.png" style="width:13px;margin-left: -30px;margin-top: 11px;" v-if="item.p=='WIN'">
                </van-col>
                <van-col span="2">
                </van-col>
                <van-col span="4">
                  <img src="/static/match_video.png"  style="width: 13px;position: absolute;right: 12%;margin-top: 11px;">
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
                  <img src="/static/win.png" style="width:13px;margin-left: -30px;margin-top: 6px;" v-if="item.p2=='WIN'">
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
      
      </div>
    
		<Footer></Footer>
	</v-touch>
</template>
<script type="text/javascript">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import BScroll from 'better-scroll'
import {get_team_ranking_data,get_match_data} from '@/api/user.js'
import {Tab, TabItem,Grid, GridItem,Card} from 'vux'
export default {
	components: {
    Header,
    Footer,
   	Tab, 
    TabItem,
    Grid,
    GridItem,
   	Card,
    curr:''
  },
	data(){
		return{
      left: [],
      all_list: [],
      listHeight:[],
      scrollY: 0,
      showFlat:-1,
      match_grid_item_style_data1:{
        width:"25%"
      },
      match_grid_item_style_img:{
        width:"25%"
      },
      match_grid_item_style_data2:{
        width:"25%"
      },
      match_grid_item_style_name:{
        width:"25%"
      },
		}
	},
  computed: {
    currentIndex() {

      for(let i = 0;i < this.listHeight.length;i++){
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if(!height2 || this.scrollY >= height1 && this.scrollY < height2){
          // console.log("computed")
          // console.log(this.scrollY)
          return i;
        }
      }
     
      return 0;
    }
  },
	methods: {
    _initBScroll() {
      this.meunScroll = new BScroll(this.$refs.wrapper1,{
        click: true,
        startY: 100
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
    selectMenu(index,event) {
      this.scrollY = this.listHeight[index];
      this.rightScroll.scrollTo(0,-this.scrollY,200,)
    },
    onClick_schedule() {
      this.$router.push({name:"match"})
    },
    onClick_player_ranking() {
      this.$router.push({name:"match_player_ranking"})
    },
    swiperleft: function () {  //左划切换到搜索页
      this.$router.push({name:"match_player_ranking"})
      //this.$router.push({'path':'/match_player_ranking'});
    },
    swiperright: function () { //右滑切换球队排名页
      this.$router.push({name:"match"})
      //this.$router.push({'path':'/match'});
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
            this.$nextTick(()  =>  {
              this.setHeight()
              this._calculateHeight()
              this._initBScroll()
              
                for(let i = 0;i < this.all_list.length;i++ ){
                  if (this.all_list[i].time[0]+this.all_list[i].time[1] == '明天') {
                    console.log("iiiiiiiii")
                    console.log(i)
                   console.log(this.all_list[i])
                   //this.selectMenu(i)
                  }
                }
                
            console.log(this.rightScroll)
          })
        })
        .catch(err => {
          console.log(err)
        })
      }
}
</script>
<style scoped>
.match_team {
	position:absolute;
	height: 200px
	width: 100%;
	overflow: hidden;

}
.menu-wrapper{
	
	width: 400px;
	background: #f3f57;
  height: 100px;
}
.team-wrapper {
	width: 100%;
}
.match_grid_class /deep/ .weui-grid {
  padding: 0px 5px;
}
.match_class {
  display: flex;
}
.img_class {
  
   height: 30px;
   width: 30px;
}
.item_li {
  height: 50px;
  background: rgb(238, 238, 238)
}
.current {
  background: #FFFFFF;
  font-weight: 700;
}
</style>