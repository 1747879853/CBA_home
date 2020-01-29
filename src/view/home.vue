<template>
    <v-touch v-on:swipeleft="swiperleft" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
      <Header></Header>
        <div class="wrapper_bs" ref="wrapper">
          <div class="content">
            <swiper :list="auto_swiper" auto style="width:95%;margin:5px 5px 5px 5px;height:150px"  dots-class="custom-bottom" dots-position="center" show-desc-mask>
            </swiper>
            <panel   :list="list" type="5" @on-click-item="onclick_newpage" ></panel>
          </div>
        </div>
   <Footer></Footer>
   </div>
</v-touch>
</template>

<script>
import { Group, Cell,  Panel, Swiper, Tabbar, TabbarItem } from 'vux'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapMutations } from 'vuex'
import {get_newpage_data} from '@/api/user.js'
import BScroll from 'better-scroll'
export default {
  components: {
    Group,
    Cell,
    Header,
    Footer,
    Tabbar,
    TabbarItem,
    Panel,
    Swiper
  },
  data () {
    return {
       list: [],
      auto_swiper:[]
      
    }
  },
  methods: {
    ...mapMutations(['setNowpageinfo']),
    onImgError (item, $event) {
      console.log(item, $event)
    },
    _initBScroll() {
      this.meunScroll = new BScroll(this.$refs.wrapper,{})
      console.log(this.meunScroll)
    },
    onclick_newpage(item){
      console.log(item)
      this.setNowpageinfo(item.desc,item.src)
      this.beforeRouteLeave()
      this.$router.push({name:"detil_newpage"})
    },
   /* swiperleft: function () {  //左划切换到goods页
      this.$router.push({'path':'/goods'});
    },*/
    swiperleft: function () { //右滑切换到论坛页
      //this.$router.push({'path':'/forum'});
      this.$router.push({name:"forum"})
    }
  },
  mounted() {
        get_newpage_data()
        .then(res => {
          this.list = res.data.list
          this.auto_swiper = res.data.auto_swiper
        })
        .catch(err => {
          console.log(err)
        })
        this.$nextTick(()  =>  {
            this._initBScroll()
        })
  }
}
</script>

<style>
.wrapper_bs {
  position:absolute;
  top: 47px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
}
</style>
