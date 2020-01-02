<template>
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      
    <Header></Header>
    <view-box ref="viewBox">
      <tab bar-active-color="#668599" active-color="#000000">
            <tab-item selected >赛程</tab-item>
            <tab-item @on-item-click="onClick_team_ranking">球队排名</tab-item>
            <tab-item @on-item-click="onClick_player_ranking">球员排名</tab-item>
        </tab> 
      <div :style="home_panel_class">
        <div v-for="item_all in all_list">
          <p>{{item_all.time}}</p>
          <div v-for="item in item_all.match_list">
            <card >
              <div slot="content" >
                <div @click="match_detail(item.match_id)">
                  <grid class="match_grid_class">
                    <div class="match_class " >
                      <grid-item class="match_grid_item_class_p" :style="match_grid_item_style_p">
                        <p style="color:#FF0000;font-weight:bold;font-style:oblique">{{item.p}}</p>
                      </grid-item>
                      <grid-item class="match_grid_item_class_img" :style="match_grid_item_style_img">
                        <img :src="item.img"  class="img_class">
                        
                      </grid-item>
                      <grid-item class="match_grid_item_name" :style="match_grid_item_style_name">
                        <span style="color:#000000;">{{item.name}}</span>
                      </grid-item>
                      <grid-item class="match_grid_item_class_score" :style="match_grid_item_style_score">
                        <p class="score_class" style="color:#000000;font-weight:bold;">{{item.score}}</p>
                      </grid-item>
                      <grid-item class="match_grid_item_class_message" :style="match_grid_item_style_message">
                        <p style="color:#000000;">{{item.message}}</p>
                      </grid-item>
                    </div>
            
                    <div class="match_class " >
                      <grid-item :style="match_grid_item_style_p">
                        <p style="color:#FF0000;font-weight:bold;font-style:oblique">{{item.p2}}</p>
                      </grid-item>
                      <grid-item :style="match_grid_item_style_img">
                        <img :src="item.img2"  class="img_class">
                      </grid-item>
                      <grid-item class="match_grid_item_name" :style="match_grid_item_style_name">
                        <span style="color:#000000;">{{item.name2}}</span>
                      </grid-item>
                      <grid-item :style="match_grid_item_style_score">
                        <p class="score_class" style="color:#000000;font-weight:bold;">{{item.score}}</p>
                      </grid-item>
                      <grid-item :style="match_grid_item_style_message">
                        <p style="color:#C0C0C0">{{item.message2}}</p>
                      </grid-item>
                    </div>
                  </grid>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </view-box>
   <Footer></Footer>
 </div>
 </v-touch>
 
</template>
<style  scoped>
.match_grid_class /deep/ .weui-grid::after{
  
}
.match_grid_item_class_p /deep/  .weui-grid {
  
}
.match_grid_item_class_img /deep/  .weui-grid {

}
.match_grid_item_class_score /deep/  .weui-grid {

}
.match_grid_item_class_message /deep/  .weui-grid {

}
.match_grid_class /deep/ .weui-grid {
  padding: 0px 5px;
}
.match_class {
  display: flex;
}
.score_class {
  }
.img_class {
  
   height: 30px;
   width: 30px;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

</style>
<script>
import { ViewBox, Tab, TabItem,Panel,Grid, GridItem, Divider,Card   } from 'vux'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import {get_match_data} from '@/api/user.js'
import { mapMutations } from 'vuex'
export default{
    name: 'Match',
    components: {
      Header,
      Footer,
      ViewBox,
      Tab, 
      TabItem,
      Panel,
      Grid,
      GridItem,
      Divider,
      Card
    },
    data(){
    return{
      
      all_list:[
      
      ],
      match_grid_item_style_p:{
        width:"12.5%"
      },
      match_grid_item_style_score:{
        width:"12.5%"
      },
      match_grid_item_style_img:{
        width:"12.5%"
      },
      match_grid_item_style_message:{
        width:"37.5%"
      },
      match_grid_item_style_name:{
        width:"25%"
      },
      list: [{
        src:"/static/newpages/1.png",
        //fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        
        desc: '80 ',
        
      }, 
      {
        src:"/static/newpages/2.png",
        
        desc: '100',
        
         
      }],
      home_panel_class: {
        height: "",
        overflow: "scroll"
    }
    }
    },
    methods: {
      ...mapMutations(['setMatchDeatilId']),
      match_detail(match_id) {
      console.log(match_id)
      this.setMatchDeatilId(match_id)
      this.$router.push({name:"match_detail"})
      },
      onClick_team_ranking(index) {
        this.$router.push({name:"match_team_ranking"})
      },
      onClick_player_ranking(index) {
        this.$router.push({name:"match_player_ranking"})
      },
      setHeight() {
        this.home_panel_class.height = window.innerHeight - 96 - 44 + "px"
        console.log(this.routerViewClass)
      },
      swiperleft: function () {  //左划切换到搜索页
        // this.$router.push({'path':'/search'});
        this.$router.push({name:"match_team_ranking"})
      },
      swiperright: function () { //右滑切换球队排名页
        this.$router.push({name:"search"})
        //this.$router.push({'path':'/match_team_ranking'});
      }
      },
      mounted() {
        // 在DOM加载后，执行，获得window的高度，并减去header和tabbar的高度，
        // 96是自己在开发者模式看到的，header的height为 40，上下padding为 3，
        // tabbar的height为 50
        this.setHeight()
        get_match_data()
        .then(res => {
          console.log(res.data)
          this.all_list = res.data.all_list
        })
        .catch(err => {
          console.log(err)
        })
      }
  }
 
</script>