<template>
	<div>
		
		<div class="top" :style="color_bac">
	      <van-row>
	        <van-col span="24" style="margin-top:-2px;">
	          <van-tabs 
	          	background="transparent"
	          	line-width="0px"
	          	line-height="0px"
	          	:title-active-color="activeColor"
	          	:title-inactive-color="inactiveColor"
	          	@click="onclickTab"
	          	v-model="activeTab"
	          	:swipe-threshold="4"

	          	 >
	            <van-tab title="资讯"></van-tab>
				<van-tab title="赛程"></van-tab>
				<van-tab title="球队榜"></van-tab>
				<van-tab title="球员榜"></van-tab>
				<van-tab title="推荐"></van-tab>
				<van-tab title="社区"></van-tab>
	            </van-tab>
	          </van-tabs>
	        </van-col>
	      </van-row>
	      <van-row>
	      	<van-col span="18">
	      		<div class="container">
			        <form action="/">
					  <van-search
					    v-model="value"
					    placeholder="请输入搜索关键词"
					    show-action
					    @search="onSearch"
					   shape="round"
					    background="transparent"
					  />
					</form>
	      		</div>
	      	</van-col>
	      	<van-col span="6" name="222">
	      		 <img src="http://47.94.93.50:8080/dist/static/concern.png" style="position: fixed;top: 7%;width: 5%;left: 79%;">
		        <span style="position: fixed;top: 10%;font-size: 10px;width: 9%;left: 79%;color:white;">关注</span>
		        <img src="http://47.94.93.50:8080/dist/static/message.png" style="position: fixed;top: 7%;width: 5%;left: 89%;">
		        <span style="position: fixed;top: 10%;width: 9%;font-size: 10px;left: 89%;color:white;">消息</span>
	      	</van-col>
	      </van-row>   
	    </div>
	    <swiper :options="swiperOption"  id="swiper1" style="top: 100px" ref="myswiper">
	      <swiper-slide>
		<div class="content" ref="content" :style="content_style">
      		<div >
				<van-swipe :autoplay="3000" style="" class="swiper" @change="onChange">
					<van-swipe-item v-for="(image, index) in images" :key="index">
						<img :src="image" style="height: 100%;width: 100%;border-radius: 18px;">
					</van-swipe-item>
				</van-swipe>
				<div style="background-color:white;">
					<van-row >
						<van-col span="12">
							<card-match  :team1="match[0].name1" :team2="match[0].name2" :imgUrl1="match[0].img_url1" :imgUrl2="match[0].img_url2" :matchType="match[0].type" :scro1="match[0].scro1" :scro2="match[0].scro2" class="match_now"></card-match>
							</van-col>
						<van-col span="12">
						    <card-match  :team1="match[1].name1" :team2="match[1].name2" :imgUrl1="match[1].img_url1" :imgUrl2="match[1].img_url2" :matchType="match[1].type" :scro1="match[1].scro1" :scro2="match[1].scro2" class="match_now"></card-match>
						</van-col>
					</van-row>
					<van-row>
						<van-col span="12">
						    <card-match  :team1="match[0].name1" :team2="match[0].name2" :imgUrl1="match[0].img_url1" :imgUrl2="match[0].img_url2" :matchType="match[0].type" :scro1="match[0].scro1" :scro2="match[0].scro2" class="match_now"></card-match>
						</van-col>
						<van-col span="12">
						    <card-match  :team1="match[1].name1" :team2="match[1].name2" :imgUrl1="match[1].img_url1" :imgUrl2="match[1].img_url2" :matchType="match[1].type" :scro1="match[1].scro1" :scro2="match[1].scro2" class="match_now"></card-match>
						</van-col>
					</van-row>
					
					<div class="newpage">
						<van-list
						v-model="loading"
						:finished="finished"
						finished-text="没有更多了"
						
						>
			            	<div style="position:relative;height:100px;" v-for="item in newpage">
								<van-divider />
								<img :src="item.img" style="width: 30%;position: absolute;right: 3%;">
								<div style="width: 60%;position: absolute;right: 38%;top: -3%;">
									<p style="text-align: left;">{{item.p}}</p>
								</div>
								<img src="http://47.94.93.50:8080/dist/static/comment.png" style="width: 4%;position: absolute;top: 81%;left: 3%;">
								<p style="font-size: 81%;position: absolute;top: 77%;left: 8%;">{{item.comment}}</p>
								<img src="http://47.94.93.50:8080/dist/static/up.png" style="width: 4%;position: absolute;top: 80%;left: 18%;">
								<p style="font-size: 81%;position: absolute;left: 23%;top: 77%;">{{item.up}}</p>
							</div>   
			        	</van-list>
	        		</div>
        		</div>
    		</div>
    	</div>
    	</swiper-slide>
	     <swiper-slide>
	    	<div>
	    		<match class="content1"></match>
	    	</div>
    	</swiper-slide>
    	<swiper-slide>
    		<match-team-ranking-new class="content2"></match-team-ranking-new>
    	</swiper-slide>
    	<swiper-slide>
    		<p style="color:white;">这是球员榜</p>
    	</swiper-slide>
    	<swiper-slide>
    		<p style="color:white;">这是推荐</p>
    	</swiper-slide>
    	<swiper-slide>
    		<p style="color:white;">这是社区</p>
    	</swiper-slide>
    	</swiper>
    	<van-tabbar v-model="active" @change="onChangeTab">
		  <van-tabbar-item info="">
		    <span>首页</span>
		    <img
		      slot="icon"
		      :slot-scope="props"
		      src="http://47.94.93.50:8080/dist/static/home.png"
		    >
		  </van-tabbar-item>
		 <van-tabbar-item info="">
		    <span>社区</span>
		    <img
		      slot="icon"
		      :slot-scope="props"
		      src="http://47.94.93.50:8080/dist/static/shequ.png"
		    >
		  </van-tabbar-item>
		  <van-tabbar-item info="">
		    <span></span>
		    <img
		      slot="icon"
		      slot-scope="props"
		      src="http://47.94.93.50:8080/dist/static/dd.png"
		      style="width: 36px;height: 45px;margin-top: 6px;"
		    >
		  </van-tabbar-item>
		  <van-tabbar-item info="">
		    <span>赛事</span>
		    <img
		      slot="icon"
		      :slot-scope="props"
		      src="http://47.94.93.50:8080/dist/static/match.png"
		    >
		  </van-tabbar-item>
		  <van-tabbar-item info="">
		    <span>我的</span>
		    <img
		      slot="icon"
		      :slot-scope="props"
		      src="http://47.94.93.50:8080/dist/static/person.png"
		    >
		  </van-tabbar-item>
		  
		</van-tabbar>
	</div>
</template>
<script>

import cardMatch from '@/components/card_match.vue'
import homeContent from '@/components/home_content.vue'
import BScroll from 'better-scroll'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import match from '@/view/match'
import matchTeamRankingNew from '@/view/match_team_ranking_new.vue'
import tabs from '@/components/tabs.vue'
import { mapMutations } from 'vuex'
export default {
	name: '',
	components: {
		cardMatch,
		homeContent,
		swiper, 
    	swiperSlide,
    	match,
    	matchTeamRankingNew,
    	tabs
	},
	data () {
		const self = this
		return {
			activeColor:'white',
	        inactiveColor:'',
			props:2,
			activeTab: 0,
			icon: {
				active: '',
			},
			icon2: {
				active: '/static/person.png',
			},
			icon3: {
				active: '/static/person.png',
			},
			icon4: {
				active: '/static/person.png',
			},
			icon5: {
				active: '/static/person.png',
			},
			scrollY:0,
			swiperOption:{
				touchRatio : 0.5,
				observer:true,
				observerParents:true,
		        slidesPerView: 'auto',
		        centeredSlides:true,
		        spaceBetween: 10,
		        
		        speed:600, //config参数同swiper4,与官网一致
		        on: {
                    slideChangeTransitionEnd: function(){
                    	console.log('num')
                    	self.activeTab = this.activeIndex
                    	if(this.activeIndex == 0){
                    		self.active = this.activeIndex
                    	}
                    	if(this.activeIndex == 1) {
                    		self.active = 3
                    	}
                    	if(this.activeIndex == 5) {
                    		self.active = 1
                    	}
                    	console.log("现在的页面")
                    	console.log(this.activeIndex)
                    	console.log("store")
                    	console.log(self.$store.state.user.homeIndex)
                      self.$store.state.user.homeIndex = this.activeIndex //切换结束告诉vuex是第几个页面，进而控制背景颜色变化
                      console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                      console.log("tab")
                      console.log(this.activeIndex)
                      if (this.activeIndex!=0) {
							 self.color_bac = 'background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%); background-blend-mode: multiply;'
						}
                     
                    },
                },
		      },
			active:0,
			color_bac:'',
			value:'',
			content_style: {
		        height:''
		    },
		    newpage:[
		      {
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      },{
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      },{
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      },{
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      },{
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      },{
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      },{
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      },{
		        'img': "http://47.94.93.50:8080/dist/static/3.jpg",
		        'p': '五佳球收割机！马上旋转铜锣烧转身打进',
		        'up': 35,
		        'comment': 154
		      }
		      ],
		      images: [
		        'http://47.94.93.50:8080/dist/static/b1.jpg',
		        'http://47.94.93.50:8080/dist/static/b2.jpg',
		        'http://47.94.93.50:8080/dist/static/b3.jpg',
		        'http://47.94.93.50:8080/dist/static/b4.jpg',
		        'http://47.94.93.50:8080/dist/static/b5.jpg',
		      ],
		    match:[
			    {
			      'name1': '八一',
			      'name2': '八一',
			      'scro1': 99,
			      'scro2': 100,
			      'type': '常规赛',
			      'img_url1': 'http://47.94.93.50:8080/dist/static/tim/1.png',
			      'img_url2': 'http://47.94.93.50:8080/dist/static/tim/2.png'
			    },{
			      'name1': '八一',
			      'name2': '八一',
			      'scro1': 99,
			      'scro2': 100,
			      'type': '常规赛',
			      'img_url1': 'http://47.94.93.50:8080/dist/static/tim/1.png',
			      'img_url2': 'http://47.94.93.50:8080/dist/static/tim/2.png'
			    },{
			      'name1': '八一',
			      'name2': '八一',
			      'scro1': 99,
			      'scro2': 100,
			      'type': '常规赛',
			      'img_url1': 'http://47.94.93.50:8080/dist/static/tim/1.png',
			      'img_url2': 'http://47.94.93.50:8080/dist/static/tim/2.png'
			    },{
			      'name1': '八一',
			      'name2': '八一',
			      'scro1': 99,
			      'scro2': 100,
			      'type': '常规赛',
			      'img_url1': 'http://47.94.93.50:8080/dist/static/tim/1.png',
			      'img_url2': 'http://47.94.93.50:8080/dist/static/tim/1.png'
			    }
			  ],
			finished:'',
			loading:'',
			flag: false
		}
	},
	methods: {
		 ...mapMutations(['sethomeIndex']),
		onChangeTab(index) {
			if (index==0) {
				this.swiper.slideTo(0, 400, false) 
				this.activeTab = 0
				
			}
			if (index == 1) {
				this.swiper.slideTo(5, 400, false) 
				this.activeTab = 5
				
			}
			if (index == 3) {
				this.swiper.slideTo(1, 400, false) 
				
			}
			if (index == 4) {
				//this.activeTab = 5
			}
			
		},
		slideChangeTransitionEnd(index) {
			console.log(index)

		},
		 _initBScroll() {
	      this.meunScroll = new BScroll(this.$refs.content,{
	        probeType: 3,
	        startY: 1000
	      })
	      console.log(this.meunScroll)
	      console.log("sdfsadfasdfasdfasdfasdf")
	      this.meunScroll.on('scroll', (pos) => {
	        this.scrollY = Math.abs(pos.y);
	        if (this.scrollY!=0) {
	  			this.flag = true
	          this.color_bac = 'bckground-image: linear-gradient(to right, #434343 0%, black 100%);'
	        }else if (this.scrollY ==0) {
	        	this.flag = false
	        }
	      })
	    },
	    setHeight() {
	      this.content_style.height = window.innerHeight - 101.5 + "px"
	    },
		onChange(index) {
			console.log("sdfsadfsadfasdf")
			console.log(this.$store.state.user.homeIndex)
			console.log("sss")
			
			if (this.flag == false&&this.$store.state.user.homeIndex==0) {
				console.log(this.flag)
	        switch(index) {
	          case 0:
	          {
	            this.color_bac='background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%); background-blend-mode: normal, lighten, soft-light;'
	          }
	          break;
	          case 1:
	          {
	            this.color_bac = 'background-color: #F00;'
	          }
	          break;
	          case 2:
	          {
	            this.color_bac = 'background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%); background-blend-mode: multiply;'
	          }
	          break;
	          case 3:
	          {
	            this.color_bac = 'background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);'
	          }
	          break;
	          case 4:
	          {
	            this.color_bac = 'background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);'
	          }
	          break;
	          default:
	          {
	            this.color_bac='background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);'
	          }
	        } 
	       }
	    },
	    onclickTab(name,title) {
	    	if(name==0){
	    		this.swiper.slideTo(0, 400, false)
	    	}
	    	if(name==1){
	    		this.swiper.slideTo(1, 400, false)
	    		this.active = 3
	    	}
	    	if(name==2){
	    		this.swiper.slideTo(2, 400, false)
	    	}
	    	if(name==3){
	    		this.swiper.slideTo(3, 400, false)
	    	}
	    	if(name==4){
	    		this.swiper.slideTo(4, 400, false)
	    	}
	    	if(name==5){
	    		this.swiper.slideTo(5, 400, false)
	    		this.active = 1
	    	}
	    	console.log(name)
	    	//console.log(document.getElementById(name));
	    },
	    onSearch() {
	    },
		onLoad() {}
	},
	computed: {
		swiper() {
			return this.$refs.myswiper.swiper
		}
	},
	mounted() {
    this.$nextTick(()  =>  {
      this.setHeight()
      this. _initBScroll()
      //this.active = this.$store.state.user.homeIndex+3
      this.activeTab = this.$store.state.user.homeIndex
      if(this.$store.state.user.homeIndex == 1){
      	this.active = 3
      }
      this.swiper.slideTo(this.$store.state.user.homeIndex, 400, false)
      console.log(this.$store.state.user.homeIndex)
      this.sethomeIndex(0)
    })
  },

 watch: {
    '$route'() {
      if(this.$store.state.user.homeIndex!=0){
        this.color_bac='background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%); background-blend-mode: normal, lighten, soft-light;'
      }
    }
  }
  // watch: {
  // 	'swiperOption.on.slideChangeTransitionEnd()'() {
  // 		console()
  // 	}
  // }
  // computed: {
  //   currentIndex() {

  //     this.activeTab = 
     
  //     return 0;
  //   }
  // },
}
</script>
<style type="text/css">
.swiper {
  width: 96%;
  margin: 0 auto;
  height: 200px;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  background-blend-mode: normal, lighten, soft-light;
  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 35px;
}
.content {
	
	overflow: hidden;
	
}
.content1 {
	
	overflow: hidden;
}
.content2 {
	margin-top: 180%;
	overflow: hidden;
}
</style>