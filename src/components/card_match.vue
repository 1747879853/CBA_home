<template>
	<div >
		<div class="card" style="width:90%;height:100px;margin: 3%;">
          <div style="padding-left: 10px;padding-top: 3px;font-size:61%;">{{matchType}}</div>
            <img :src="imgUrl1" style="width:40%;width: 25%;position: absolute;left: 5%;">
            <img :src="imgUrl2" style="width:40%;width: 25%;position: absolute;right: 5%;">
          <div style="width:45%;position: absolute;left: 34%;top: 29%;">
            <span>{{scro1}} - {{scro2}}</span>
            <br>
            <span style="position: absolute;left: -56%;top: 150%;">{{team1}}</span>
            <span style="position: absolute;right: -36%;top: 150%;">{{team2}}</span>
          </div>
        </div>
	</div>
</template>
<script>
export default {
	props:['team1','team2','matchType','scro1','scro2','imgUrl1','imgUrl2'],
	name: 'card_match',
	data () {
		return {
			
		}
	},
	methods:{
  }
}
</script>
<style type="text/css">
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    position: relative;
}
</style>