<template>
  <div>
  <tabbar >
    <tabbar-item  link="/">
      <img slot="icon" src="../assets/home.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/forum">
      <img slot="icon" src="../assets/forum.png">
      <span slot="label">论坛</span>
    </tabbar-item>
    <tabbar-item link="/search">
      <img slot="icon" src="../assets/search.png">
      <span slot="label" >搜索</span>
    </tabbar-item>
    <tabbar-item link="/match">
      <img slot="icon" src="../assets/match.png">
      <span slot="label">赛事</span>
    </tabbar-item>
  
    <tabbar-item link="/more">
      <img slot="icon" src="../assets/more.png">
      <span slot="label">更多</span>
    </tabbar-item>
  </tabbar>
</div>
</template>
<style>
.add{
height:40px;
width:40px;
}
</style>
<script>
import { Tabbar, TabbarItem,  XButton  } from 'vux'
    export default{
       name: 'Footer',
       components: {
         Tabbar,
         TabbarItem,
          XButton
       },
       data(){
         return{
            msg:''
         }
       },
 
    }
</script>