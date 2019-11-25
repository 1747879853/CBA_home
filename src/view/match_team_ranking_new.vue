<template>
	<v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper" :swipe-options="{direction: 'horizontal'}">
     
	    <Header></Header>
	    <tab bar-active-color="#668599" active-color="#000000">
	          <tab-item  @on-item-click="onClick_schedule">赛程</tab-item>
	          <tab-item selected >球队排名</tab-item>
	          <tab-item @on-item-click="onClick_player_ranking">球员排名</tab-item>
	    </tab> 
		<div class="match_team">
			<div class="menu-wrapper">
				<div class="content">      
			      <div class="left_class">
			        <div ref="wrapper">
			          <ul>
			            <li v-for="item in left">
			              <span class="text" style="background: #EEEEEE;height:30px">
			                {{item.name}}
			              </span>
			            </li>
			          </ul>  
			        </div>
			      </div>
			  </div>
			</div>
			<div calss="team-wrapper" style="width:100%;" ref="right">
				<div v-for="item_all in all_list">
                  <span>{{item_all.t1}}</span><span>{{item_all.t2}}</span><span>{{item_all.t3}}</span>
                    <div v-for="item in item_all.match_list">
                      <card >
                        <div slot="content" >
                          <div>
                            <grid class="match_grid_class">
                              <div class="match_class" >
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
       	Card
    },
	data(){
		return{
			left:[
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
			],
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
	methods: {
        _initBScroll() {
          this.meunScroll = new BScroll(this.$refs.wrapper,{})
          this.rightScroll = new BScroll(this.$refs.right,{})
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
		get_team_ranking_data()
		.then(res => {
			console.log(res.data)
		})
		.catch(err => {
			console.log(err)
		})
		setTimeout(() =>{
			this.$nextTick(()=>{
				this._initBScroll()
			})
		},1000);
	},
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
</style>