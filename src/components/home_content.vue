<template>
	<div>
		<div class="top" :style="color_bac">
	      <van-row>
	        <van-col span="4">
	          <img src="http://47.94.93.50:8080/dist/static/person.png" style="width:58%;margin-top:5px;margin-left:10px">
	        </van-col>
	        <van-col span="20" style="margin-top:-2px;">
	          <van-tabs background="transparent"
	          	line-width="0px"
	          	line-height="0px"
	          	title-active-color="white"
	          	@click="onclickTab"
	          	 >
	            <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index" >
	            </van-tab>
	          </van-tabs>
	        </van-col>
	      </van-row>
	      <van-row>
	      	<van-col span="16">
	      		<div class="container">
			        <form action="/">
					  <van-search
					    v-model="value"
					    placeholder="请输入搜索关键词"
					    show-action
					    @search="onSearch"
					   shape="round"
					    background="transparent"
					  />
					</form>
	      		</div>
	      	</van-col>
	      	<van-col span="8" name="222">
	      		 <img src="http://47.94.93.50:8080/dist/static/concern.png" style="position: fixed;top: 8%;width: 5%;left: 79%;">
		        <span style="position: fixed;top: 11%;font-size: 10px;width: 9%;left: 79%;color:white;">关注</span>
		        <img src="http://47.94.93.50:8080/dist/static/message.png" style="position: fixed;top: 8%;width: 5%;left: 89%;">
		        <span style="position: fixed;top: 11%;width: 9%;font-size: 10px;left: 89%;color:white;">消息</span>
	      	</van-col>
	      </van-row>
	      
	     
	    </div>
	</div>
</template>
<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			color_bac:'',
			value:''
		}
	},
	methods:{
		onChange(index) {
	        switch(index) {
	          case 0:
	          {
	            this.color_bac='background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%); background-blend-mode: normal, lighten, soft-light;'
	          }
	          break;
	          case 1:
	          {
	            this.color_bac = 'background-image: linear-gradient(to top, #D8334A 0%, rgb(216,51,74) 100%);'
	          }
	          break;
	          case 2:
	          {
	            this.color_bac = 'background-image: linear-gradient(to right, #434343 0%, black 100%);'
	          }
	          break;
	          case 3:
	          {
	            this.color_bac = 'background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);'
	          }
	          break;
	          case 4:
	          {
	            this.color_bac = 'background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);'
	          }
	          break;
	          default:
	          {
	            this.color_bac='background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);'
	          }
	        } 
	    },
	    onclickTab(name,title) {
	    	console.log(name)
	    	console.log(document.getElementById(name));
	    },
	    onSearch() {

	    }
  }
}
</script>
<style type="text/css">
.top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 250px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  background-blend-mode: normal, lighten, soft-light;
  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 35px;
}
</style>