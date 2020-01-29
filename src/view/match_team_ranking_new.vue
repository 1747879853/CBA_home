<template>
	<v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
    
   
   
		<div class="match_team">
			<div class="menu-wrapper" ref="wrapper1">     
        <ul>
          <li v-for="(item, index) in left" class="item_li" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
            <span class="text" >
              {{item.name}}
            </span>
          </li>
        </ul>  
			</div>
      <div class="team-wrapper" style="width:100%;background:#FFFFFF;" ref="right">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text=""
        @load="onLoad"
      >
      <div  ref="right"  class="team_wrapper_class">
        <div>
        <div v-for="item_all in all_list" class="team-list-hock">
          <van-tabs 
            
            line-width="0px"
            line-height="0px"
          >
            <van-tab :title="item_all.t1" style="background-color:white;"></van-tab>
             <van-tab :title="item_all.t2" style="background-color:white;"></van-tab>
              <van-tab :title="item_all.t3" style="background-color:white;"></van-tab>
          </van-tabs>
          <div style="background:white;margin:0 0px 0 0px;height: 35px;" v-for="item in item_all.match_list">
            
            <div @click="match_detail(item.p,item.p2,item.match_id)">
              <van-row>
                <van-col span="5">
                  <van-image
                    style="margin-left: 17px;margin-top: 8px;"
                    width="20px"
                    height="20px"
                    src="http://47.94.93.50:8080/dist/static/tim/1.png"
                  />
                 </van-col>
                <van-col span="3">
                  <p style="position: absolute;margin-left: -15px;margin-top: 5px;">{{item.name}}</p>
                </van-col>
                <van-col span="7">
                </van-col>
                <van-col span="2">
                  <p style="margin-left: -55px;margin-top: 5px;">{{item.data1}}</p>
                </van-col>
                <van-col span="1">
                  
                </van-col>
                <van-col span="2">
                </van-col>
                <van-col span="4">
      
                  <span style="position: absolute;right: 8%;font-size: 14px;margin-top: 5px;">{{item.data2}}</span>
                </van-col>
              </van-row>
            </div>
          </div>    
        </div>
        </div>
      </div>
    </van-list>
        <div class="team-wrapper-content" v-if="false">
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
      finished:false,
      loading:'',
      left: [],
      left :[
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"11111"},
      ],
      all_list : [
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
                },
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
    onLoad() {},
    _initBScroll() {
      this.meunScroll = new BScroll(this.$refs.wrapper1,{
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
      this.rightScroll.scrollTo(0,-this.scrollY,200)
    },
    onClick_schedule() {
      this.$router.push({name:"match"})
    },
    onClick_player_ranking() {
      this.$router.push({name:"match_player_ranking"})
    },
    swiperleft: function () {  //左划切换到搜索页
      //this.$router.push({name:"match_player_ranking"})
      //this.$router.push({'path':'/match_player_ranking'});
    },
    swiperright: function () { //右滑切换球队排名页
      //this.$router.push({name:"match"})
      //this.$router.push({'path':'/match'});
    }
  },
	mounted() {
    this.$nextTick(()  =>  {
        this._initBScroll()
        this._calculateHeight()
        console.log(this.rightScroll)
    })
		// get_team_ranking_data()
  //   .then(res => {
  //     //console.log(res.data)
  //     this.left = res.data.left
  //     this.all_list = res.data.all_list
      
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
    
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
	top: 0px;
  bottom: 0px;
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