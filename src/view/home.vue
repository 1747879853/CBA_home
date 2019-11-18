<template>
  
    <v-touch v-on:swipeleft="swiperleft" class="wrapper" :swipe-options="{direction: 'horizontal'}">
      <div>
      <Header></Header>
      <home-grid></home-grid>
   <Footer></Footer>
   </div>
</v-touch>
  
</template>

<script>
import { Group, Cell } from 'vux'
import { Tabbar, TabbarItem } from 'vux'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HomeGrid from '@/components/home_grid'
export default {
  components: {
    Group,
    Cell,
    Header,
    Footer,
    Tabbar,
    TabbarItem,
    HomeGrid
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      
    }
  },
  methods: {
   /* swiperleft: function () {  //左划切换到goods页
      this.$router.push({'path':'/goods'});
    },*/
    swiperleft: function () { //右滑切换到论坛页
      //this.$router.push({'path':'/forum'});
      this.$router.push({name:"forum"})
    }
  }
}
</script>

<style>

</style>
