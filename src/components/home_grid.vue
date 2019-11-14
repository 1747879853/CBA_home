<template>
  <div >
    <div width="2px"></div>
    <div :style="home_panel_class">
      <div class="swiper_style">
        <swiper :list="auto_swiper" auto style="width:95%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center">
        </swiper>
      </div>
    <panel   :list="list" type="5" @on-click-item="onclick_newpage" ></panel>
  </div>
   
 </div>
</template>
<style>

</style>
<script>
import {  Panel, Swiper } from 'vux'
    export default{
     name: 'Header',
     components: {
        Panel,
        Swiper
     },
     data() {
            return{
              list: [{
                src:"/static/newpages/1.png",
                //fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                
                desc: '方硕失绝杀杰克逊懊恼至极 赛后撕坏球衣发泄 ',
                
              }, 
              {
                src:"../static/newpages/2.png",
                
                desc: '贝帅：满意全队每人表现 两人毕业因防守强度大',
                
                 
              },
              {
                src:"/static/newpages/3.png",
                //fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                
                desc: '雅尼斯：绝杀球应处理得更聪明 晓川离场影响大 ',
                
              }, 
              {
                src:"../static/newpages/4.png",
                
                desc: '25连胜辽宁士气正盛 下轮若赢将平历史单季纪录 ',
               
                  
               /* },
                meta: {
                  source: '来源信息',
                  date: '时间',
                  other: '其他信息'
                }*/
              },
              {
                src:"/static/newpages/5.png",
                //fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                
                desc: '吴冠希肆虐内线6记暴扣 史鸿飞夺命三分杀死比赛 ',
                
              }, 
              {
                src:"../static/newpages/6.png",
                
                desc: '翟晓川遭逐成北京落败诱因 技犯已满将停赛两场 ',
                
              },
              {
                src:"/static/newpages/7.png",
                //fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
               
                desc: '大心脏！郭艾伦2投1传定胜局 现役本土最强后卫 ',
                url: '/component/cell'
              }, 
              {
                src:"../static/newpages/8.png",
               
                desc: '吴前飚10记三分屡失50+机会 仍成现役本土第一人 ',
                url: '/component/radio',
                 
              },
              {
                src:"/static/newpages/9.png",
                //fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
               
                desc: '琼斯46+12吉林告捷 深圳6连胜终结仍锁季后赛',
                url: '/component/cell'
              }, 
              {
                src:"../static/newpages/10.png",
                
                desc: '苏州肯帝亚苏州体育中心迎战北京首钢，本赛季两队首次交锋，北京主场大胜苏州',
                url: '/component/radio',
                 
                
              }
              ],
              auto_swiper:[{
                url: 'javascript:',
                img: "/static/newpages/4.png",
                title: '送你一朵fua'
              },
              {
                url: 'javascript:',
                img: "/static/newpages/5.png",
                title: '送你一次旅行',
                //fallbackImg: 'https://static.vux.li/demo/3.jpg'
              }],
              home_panel_class: {
                height: "",
                overflow: "scroll"
            }
            }
     },
     methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
      setHeight() {
        this.home_panel_class.height = window.innerHeight - 96 + "px"
        console.log(this.routerViewClass)
      },
      onclick_newpage(item){
        console.log(item)
      }

     },
     mounted() {
      // 在DOM加载后，执行，获得window的高度，并减去header和tabbar的高度，
      // 96是自己在开发者模式看到的，header的height为 40，上下padding为 3，
      // tabbar的height为 50
        this.setHeight()
    }
  }
 
</script>