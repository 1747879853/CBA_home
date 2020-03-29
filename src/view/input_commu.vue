<template>
  <div>
    <x-header :left-options="{backText: '',preventGoBack: true}" style="background-color:#2d2d2d;"  @on-click-back="return_()">CBA新闻</x-header>
      <div class="wrapper_comm" >
        <div class="block_comm" catch:tap="noop" >
          
          <van-cell-group style="height:200px;">
            <van-field
              v-model="message_comm"
              label="评论"
              type="textarea"
              placeholder="请输入评论"
              autosize
              
              adjust-position="true"
            >
            <van-button type="primary" @click="onClickHide" size="small" slot="button">发表</van-button>
          </van-field>
          </van-cell-group>
          <div style="position: absolute;right: 0px;bottom: 6px;">
            
          </div>
          
        </div>
      </div>
   
    
  </div>
</template>
<style>
.wrapper_comm {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block_comm {
  
}

</style>
<script>
import { XHeader } from 'vux'
import { mapMutations } from 'vuex'
export default{
   components: {
    XHeader
   },
   data(){
      return{
        loading: false,
        finished: false,
        message_comm:''
      }
    },
    methods: {
      ...mapMutations(['sethomeIndex']),
      return_() {
        console.log("return_")
        this.sethomeIndex(4)
        this.$router.push({name:"home"})
      },
      onClickHide() {
        this.show = false
        this.show_img = true
        this.return_()
      }
     
    },
   mounted() { 
    // this.$nextTick(()  =>  {
    //   this.setHeight()
    //   this._initBScroll()
    //   console.log("commu")
    //   console.log(this.commuScroll)
    // })
  }
}
</script>