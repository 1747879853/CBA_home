<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
    <Header></Header>
    <tab bar-active-color="#668599" active-color="#000000">
      <tab-item  @on-item-click="onClick_schedule">赛程</tab-item>
      <tab-item  >球队排名</tab-item>
      <tab-item selected @on-item-click="onClick_player_ranking">球员排名</tab-item>
    </tab> 
    <div class="match_team">
      <div class="menu-wrapper" ref="wrapper">     
        <ul>
          <li v-for="(item, index) in left" class="item_li" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
            <span class="text" >
              {{item.name}}
            </span>
          </li>
        </ul>  
      </div>
      <div calss="team-wrapper" style="width:100%;background:#FFFFFF;" ref="right">
        <div class="team-wrapper-content">
          <div v-for="item_all in all_list" class="team-list team-list-hock">
            <span >{{item_all.t1}}</span>
            <span>{{item_all.t2}}</span>
            <span>{{item_all.t3}}</span>
            <div v-for="item in item_all.match_list">
              <card >
                <div slot="content" >
                  <grid class="match_grid_class">
                    <div class="match_class " >
                      <grid-item class="match_grid_item_class_img" :style="match_grid_item_style_img">
                        <img :src="item.img"  class="img_class">
                      </grid-item>
                      <grid-item class="match_grid_item_name" :style="match_grid_item_style_name">
                        <span style="color:#000000;">{{item.name}}</span>
                      </grid-item>
                      <grid-item class="match_grid_item_class_data1" :style="match_grid_item_style_data1">
                        <p class="score_class" style="color:#000000;font-weight:bold;">{{item.data1}}</p>
                      </grid-item>
                      <grid-item class="match_grid_item_class_data2" :style="match_grid_item_style_data2">
                        <p style="color:#000000;">{{item.data2}}</p>
                      </grid-item>
                    </div>
                  </grid>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </v-touch>
</template>
<script type="text/javascript">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import BScroll from 'better-scroll'
import {get_team_ranking_data} from '@/api/user.js'
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
    setHeight() {
        this.home_panel_class.height = window.innerHeight - 96 - 44 + "px"
        console.log(this.routerViewClass)
      },
    _initBScroll() {
      this.meunScroll = new BScroll(this.$refs.wrapper,{
        click: true,
      })
      this.rightScroll = new BScroll(this.$refs.right,{
        probeType: 3
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
      this.$router.push({name:"more"})
      //this.$router.push({'path':'/match_player_ranking'});
    },
    swiperright: function () { //右滑切换球队排名页
      this.$router.push({name:"match_team_ranking"})
      //this.$router.push({'path':'/match'});
    }
  },
  mounted() {
    get_team_ranking_data()
    .then(res => {
      //console.log(res.data)
      this.left = res.data.left
      this.all_list = res.data.all_list
      this.$nextTick(()  =>  {
        this._initBScroll()
        this._calculateHeight()
        console.log(this.rightScroll)
      })
    })
    .catch(err => {
      console.log(err)
    })
    
  },
  watch: {
    
  },
  created() {
    
  }
}
</script>
<style scoped>
.match_team {
  position:absolute;
  display: flex;
  top: 90px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;

}
.menu-wrapper{
  flex: 0 0 80px;
  width: 80px;
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