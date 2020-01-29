<template>
  <div >
    
   <home-newpage></home-newpage>

  </div>
</template>

<script>
import { Toast } from 'vant';
import homeNewpage from '@/components/home_newpage.vue'
export default {
  name: 'home_new',
  components: {
    homeNewpage
  },
  data () {
    return {
      content_style: {
            height:''
        },
    }
  },
  methods: { 
   
  },
  watch: {
  },
  
}
</script>
<style >

.match{
  flex-direction: row;
  flex-wrap: wrap-reverse; 
  display: flex;
  flex-wrap: wrap; 
   background-color: white;
}
</style>
