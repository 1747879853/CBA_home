<template>
  <div>
    
   <flexbox>
      <flexbox-item><div class="flex-demo">
        <x-header :left-options="{showBack: false}" class="header" style="background-color:#CC0000;">
          <p >CBA球迷之家</p>
          </x-header>
      </div></flexbox-item>
      
    </flexbox>
 </div>
</template>
<style>

</style>
<script>
import {  Flexbox, FlexboxItem, XHeader, XButton,Search } from 'vux'
  export default{
   name: 'Header',
   components: {
      Flexbox,
      FlexboxItem,
      XHeader,
      XButton,
      Search
  },
  data(){
    return{
      
    }
  },
  methods: {
    
  },
}
 
</script>