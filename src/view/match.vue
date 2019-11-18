<template>
  <div>
    <Header></Header>
    <view-box ref="viewBox">
      <tab bar-active-color="#668599" active-color="#000000">
            <tab-item selected @on-item-click="onClick_schedule()">赛程</tab-item>
            <tab-item @on-item-click="onClick_team_ranking()">球队排名</tab-item>
            <tab-item @on-item-click="onClick_player_ranking()">球员排名</tab-item>
        </tab> 
      <div :style="home_panel_class">
        <div v-for="item_all in all_list">
        <p>{{item_all.time}}</p>
        <div v-for="item in item_all.match_list">
      
      <card >

        <div slot="content" >
          <div>
            <grid class="match_grid_class">
              <div class="match_class " >
                <grid-item class="match_grid_item_class_p" :style="match_grid_item_style_p">
                  <p style="color:#FF0000;font-weight:bold;font-style:oblique">{{item.p}}</p>
                </grid-item>
                <grid-item class="match_grid_item_class_img" :style="match_grid_item_style_img">
                  <img :src="item.img"  class="img_class">
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
                {
                  time:"11月23日 周三",
                  match_list:[
                    {
                      p:"",
                      score:"69",
                      img:"/cba/static/tim/1.png",
                      message:"10:35",
                      p2:"WIN",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                    },
                    {
                      p:"WIN",
                      score:"63",
                      img:"/cba/static/tim/2.png",
                      message:"16:45",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                      
                    },
                    {
                      p:"",
                      score:"67",
                      img:"/cba/static/tim/3.png",
                      message:"13:35",
                      p2:"WIN",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                    }
                  ]
                },
                {
                  time:"11月23日 周三",
                  match_list:[
                    {
                      p:"WIN",
                      score:"69",
                      img:"/cba/static/tim/4.png",
                      message:"13:40",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                     
                    },
                    {
                      p:"WIN",
                      score:"63",
                      img:"/cba/static/tim/5.png",
                      message:"16:45",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                      
                    },
                    {
                      p:"",
                      score:"67",
                      img:"/cba/static/tim/6.png",
                      message:"12:35",
                      p2:"WIN",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                    }
                  ]
                },
                {
                  time:"11月23日 周三",
                  match_list:[
                    {
                      p:"WIN",
                      score:"69",
                      img:"/cba/static/tim/7.png",
                      message:"10:35",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                     
                    },
                    {
                      p:"WIN",
                      score:"63",
                      img:"/cba/static/tim/1.png",
                      message:"16:45",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                      
                    },
                    {
                      p:"WIN",
                      score:"67",
                      img:"/cba/static/tim/2.png",
                      message:"7:35",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                    }
                  ]
                },
                {
                  time:"11月23日 周三",
                  match_list:[
                    {
                      p:"WIN",
                      score:"69",
                      img:"/cba/static/tim/3.png",
                      message:"9:30",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                     
                    },
                    {
                      p:"WIN",
                      score:"63",
                      img:"/cba/static/tim/4.png",
                      message:"16:45",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                      
                    },
                    {
                      p:"WIN",
                      score:"67",
                      img:"/cba/static/tim/5.png",
                      message:"8:45",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                    }
                  ]
                },
                {
                  time:"11月23日 周三",
                  match_list:[
                    {
                      p:"",
                      score:"69",
                      img:"/cba/static/tim/6.png",
                      message:"6:35",
                      p2:"WIN",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                     
                    },
                    {
                      p:"WIN",
                      score:"63",
                      img:"/cba/static/tim/7.png",
                      message:"16:45",
                      p2:"",
                      score2:"69",
                      img2:"/cba/static/tim/1.png",
                      message2:"常规赛第6轮"
                     
                      
                    },
                    {
                      p:"",
                      score:"67",
                      img:"/cba/static/tim/1.png",
                      message:"15:45",
                      p2:"WIN",
                      score2:"69",
                      img2:"/cba/static/tim/6.png",
                      message2:"常规赛第6轮"
                     
                    }
                  ]
                }
              ],
              match_list:[
              
              ],
              match_grid_item_style_p:{
                width:"12.5%"
              },
              match_grid_item_style_score:{
                width:"25%"
              },
              match_grid_item_style_img:{
                width:"25%"
              },
              match_grid_item_style_message:{
                width:"37.5%"
              },
              list: [{
                src:"/cba/static/newpages/1.png",
                //fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                
                desc: '80 ',
                
              }, 
              {
                src:"/cba/static/newpages/2.png",
                
                desc: '100',
                
                 
              }],
              home_panel_class: {
                height: "",
                overflow: "scroll"
            }
            }
     },
     methods: {
       onClick_schedule() {

       },
       onClick_team_ranking() {

       },
       onClick_player_ranking() {
        
       },
       onClick_match() {

       },
       setHeight() {
        this.home_panel_class.height = window.innerHeight - 96 - 44 + "px"
        console.log(this.routerViewClass)
      },
     },
     mounted() {
      // 在DOM加载后，执行，获得window的高度，并减去header和tabbar的高度，
      // 96是自己在开发者模式看到的，header的height为 40，上下padding为 3，
      // tabbar的height为 50
        this.setHeight()
    }
    }
 
</script>