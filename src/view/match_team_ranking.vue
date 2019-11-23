<template>
  
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
    <Header></Header>
    
      <tab bar-active-color="#668599" active-color="#000000">
            <tab-item  @on-item-click="onClick_schedule">赛程</tab-item>
            <tab-item selected >球队排名</tab-item>
            <tab-item @on-item-click="onClick_player_ranking">球员排名</tab-item>
        </tab> 
      <div class="content">
        <flexbox>
          <flexbox-item :span="1/5">
            <div class="flex-demo">
            
              <flexbox orient="vertical">
                <div :style="home_panel_class">
                  <div class="left_class">
                <p style=" background-color: #20b907;width:100%;height:100%;margin:5px 0px 5px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                <p style=" width:100%;height:100%;margin:10px 0px 10px 0px;">篮板得分</p>
                
              </div>
              </div>
              </flexbox>
            </div>
          </flexbox-item>
          <flexbox-item :span="4/5">
            <div class="flex-demo">
              <div :style="home_panel_class">
                <div v-for="item_all in all_list">
                  <span>{{item_all.t1}}</span><span>{{item_all.t2}}</span><span>{{item_all.t3}}</span>
                    <div v-for="item in item_all.match_list">
                      <card >
                        <div slot="content" >
                          <div>
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
                        </div>
                      </card>
                    </div>
                  </div>
                </div>
              </div>
          </flexbox-item>
        </flexbox>
    

    
      </div>
 
    
   <Footer></Footer>
 </div>
 </v-touch>
 
</template>
<style  scoped>

.left_class {
  padding: 0px 5px;
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
.flex-demo {
  text-align: center;
   
}
</style>
<script>
import { ViewBox, Tab, TabItem,Panel,Grid, GridItem, Divider,Card ,Flexbox, FlexboxItem } from 'vux'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
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
        Card,
        Flexbox, 
        FlexboxItem,
        Card
       
     },
     data(){
            return{
              all_list:[
                {
                  t1:"球队",
                  t2:"胜-负",
                  t3:"胜率",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"得分",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"篮板",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"助攻",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"失误",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                }
              ],
              match_list:[
              
              ],
              
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
       onClick_schedule() {
        this.$router.push({name:"match"})
       },
       
       onClick_player_ranking() {
        this.$router.push({name:"match_player_ranking"})
       },
       
       setHeight() {
        this.home_panel_class.height = window.innerHeight - 96 - 44 + "px"
        console.log(this.routerViewClass)
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
        this.setHeight()
    },
    watch: {
    'scrollTop'() {
      console.log(scrollTop)
      //this.$destroy('VideoPlayer')
    }
  }
  }
 
</script>