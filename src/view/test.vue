<template>
  <div>
    <div class="view-container">
      11
    </div>
    <div class="page-container">
      22
    </div>
  </div>
    
</template>
<style>
.view-container { // 父容器布局方式
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 44px;
  box-sizing: border-box;
  -webkit-transform: translate3d(0,0,0); //激活GPU 3D加速
  -webkit-backface-visibility: hidden;
}
.page-container { // 子页面布局方式
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0; // 初始化为0，动态计算第N个page，并赋值(N-1)*100%
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #F8F8F8;
}
</style>
<script>
    export default{
     name: 'Search1222',
     components: {
        
     },
     data(){
            return{
             
            }
     },
     methods: {
      
    }
 }
</script>