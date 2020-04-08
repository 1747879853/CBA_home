<template>
  <div>
    <x-header :left-options="{backText: '',preventGoBack: true}" style="background-color:#2d2d2d;"  @on-click-back="return_()">发表</x-header>
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
      ...mapMutations(['sethomeIndex','setSrt']),
      return_() {
        console.log("return_")
        this.sethomeIndex(4)
        this.$router.push({name:"home"})
      },
      onClickHide() {
        Date.prototype.format = function(fmt){
      var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
      };

      if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
      }
            
      for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
        }       
      }

      return fmt;
    }

   

    var now = new Date();
    var nowStr = now.format("yyyy-MM-dd hh:mm:ss");
        this.setSrt({'str':this.message_comm,'time':nowStr})
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