<template>
  <div class="wrapper">
    <div class="content" ref="content">
        <swiper :list="auto_swiper" auto style="width:95%;margin:5px 5px 5px 5px;height:150px"  dots-class="custom-bottom" dots-position="center" show-desc-mask>
        </swiper>
        <panel   :list="list" type="5" @on-click-item="onclick_newpage" ></panel>
      </div>
    </div>
</template>
<script>
import {  Panel, Swiper } from 'vux'
import { mapMutations } from 'vuex'
import {get_newpage_data} from '@/api/user.js'
import BScroll from 'better-scroll'
export default{
  name: 'Home_grid',
  components: {
    Panel,
    Swiper
  },
  data() {
    return{
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
      this.meunScroll = new BScroll(this.$refs.content,{})
      console.log(this.meunScroll)
    },
    onclick_newpage(item){
      console.log(item)
      this.setNowpageinfo(item.desc,item.src)
      this.beforeRouteLeave()
      this.$router.push({name:"detil_newpage"})
    }
  },
  mounted() {
    this.$nextTick(() => {
        get_newpage_data()
        .then(res => {
          this.list = res.data.list
          this.auto_swiper = res.data.auto_swiper
           this.$nextTick(()  =>  {
            this._initBScroll()
        
            })
        })
        .catch(err => {
          console.log(err)
        })
      })
  }
}
</script>
<style>
.wrapper {
  position: absolute;
 
  overflow: hidden;
}
</style>