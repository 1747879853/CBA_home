<template>
  <div style="width:100%;height:100%;background:white;margin: 6px 0 19px 0;">
    <div class="header_card">
      <img src="/static/tim/2.png" class="img">
    </div>
    <p style="color:black;font-size: 12px;" class="username">{{username}}</p>

    <pre style="margin: 0 0 0 21px;">{{message}}</pre>
    <hr>
  </div>
</template>
<script>
export default{
  name: 'message_his',
  props:['username','img','message'],
  components: {
    
  },
  data() {
    return{
     
    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>
<style>
.header_card{

  width: 35px;
  height: 35px;
  border: 1px solid #CC0000;
  border-radius: 100%;
  overflow: hidden;
  display: inline-block;
  margin: 3px;
}
.img {
  max-height: 100%;
}
.username {
  display: inline-block;
}
pre{
white-space:pre-wrap;
white-space:-moz-pre-wrap;
white-space:-pre-wrap;
white-space:-o-pre-wrap;
word-wrap:break-word;
}
</style>