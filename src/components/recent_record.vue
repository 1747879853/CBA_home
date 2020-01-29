<template>
  <div >
    <div class="start">
      <span  class="winOrfalse" :class="{leftWinOrfalse:leftWinOrfalse=='负'}">{{leftWinOrfalse}}</span>
      <span style="font-weight: bold;" class="leftScore" :class="{'changeColor':leftScore < rightScore}">{{leftScore}}</span>
      <span style="font-weight: bold;" class="_">-</span>
      <span style="font-weight: bold;" class="right_score" :class="{'changeColor':leftScore > rightScore}">{{rightScore}}</span>
      <br>
      <span class="time" >{{time}}</span>
      <span class="main1" v-if="show==0">{{master}}</span>
      <span class="teams">{{leftTeam}}VS{{rightTeam}}</span>
      <span class="main_" v-if="show==1">{{master}}</span>
    </div>
</div>
</template>
<script>
export default{
  name: 'recent_record',
  props: ['leftWinOrfalse','leftScore','rightScore','leftTeam','rightTeam','time','show','master'],
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
.start {
  width: 200px;
  height: 60px;
  position: relative;
}
.main_ {
  width: 15px;
  height: 15px;
  line-height: 14px;
  text-align: center;
  display: inline-block;
  background: #999999;
  text-decoration: none;
  font-weight: bold;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  position: absolute;
  left: 123px;
  top: 47px;
}
.main1 {
  width: 15px;
  height: 15px;
  line-height: 14px;
  text-align: center;
  display: inline-block;
  background: #999999;
  text-decoration: none;
  font-weight: bold;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  position: absolute;
  left: 48px;
  top: 47px;
}
.left_winOrfalse {
  color: #AAAAAA;
}
.winOrfalse {
  font-weight: bold;
  font-size: 21px;
  position: absolute;
  left: 20px;
  top: 1px;
}
.changeColor {
  color: #999999;
}
.leftScore {
  position: absolute;
  left: 60px;
  top: 3px;
  font-size: 18px;
}
._ {
  position: absolute;
  left: 86px;
  top: 0px;
  font-size: 20px;
}
.right_score {
  position: absolute;
  left: 97px;
  top: 3px;
  font-size: 18px;
}
.teams {
  position: absolute;
  top: 35px;
  left: 64px;
  font-size: 11px;
  color: #BBBBBB;
}
.time {
  position: absolute;
  top: 27px;
  left: 16px;
  font-size: 11px;
  color: #AAAAAA;
}
</style>