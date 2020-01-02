import Mock from 'mockjs'
var Random = Mock.Random
function carNum() {
  var car = ['鲁A', '鲁B', '京A']
  return Random.pick(car) + Random.natural(1000, 9999)
}
function kind() {
  var kindarr = ['业主车辆', '外来车辆']
  return Random.pick(kindarr)
}
function temp() {
  let cartableData = []
  for (let i = 0; i < 500; i++) {
    let newObject = {
      carnum: carNum(), // 随机车牌号
      time: Random.time('HH: mm: ss'),
      kind: kind()
    }
    cartableData.push(newObject)
  }
  for (let j = 0; j < cartableData.length; j++) {
    let year = Random.date()
    year = year.substring(4)
    let str = cartableData[j].time
    cartableData[j].time = ''
    cartableData[j].time = '2018' + year + ' ' + str
  }
  return {
    cartabledata: cartableData
  }
}
var all_list = [
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"",
              score:"69",
              img:"/static/tim/1.png",
              message:"10:35",
              name:'八一',
              p2:"WIN",
              score2:"69",
              name2:'南昌',
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
              match_id:""
            },
            {
              p:"WIN",
              score:"63",
              name:'青岛',
              img:"/static/tim/2.png",
              message:"16:45",
              p2:"",
              name2:'广东',
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:""
              
            },
            {
              p:"",
              score:"67",
              img:"/static/tim/3.png",
              message:"13:35",
              p2:"WIN",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
             match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"WIN",
              score:"69",
              img:"/static/tim/4.png",
              message:"13:40",
              name2:'南昌',
              name:'青岛',
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:""
             
            },
            {
              p:"WIN",
              score:"63",
              img:"/static/tim/5.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            },
            {
              p:"",
              score:"67",
              img:"/static/tim/6.png",
              message:"12:35",
              p2:"WIN",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"WIN",
              score:"69",
              img:"/static/tim/7.png",
              message:"10:35",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
             match_id:""
            },
            {
              p:"WIN",
              score:"63",
              img:"/static/tim/1.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            },
            {
              p:"WIN",
              score:"67",
              img:"/static/tim/2.png",
              message:"7:35",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"WIN",
              score:"69",
              img:"/static/tim/3.png",
              message:"9:30",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             name2:'南昌',
              name:'青岛',
             match_id:""
            },
            {
              p:"WIN",
              score:"63",
              img:"/static/tim/4.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
              match_id:""
            },
            {
              p:"WIN",
              score:"67",
              img:"/static/tim/5.png",
              message:"8:45",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        },
        {
          time:"11月23日 周三",
          match_list:[
            {
              p:"",
              score:"69",
              img:"/static/tim/6.png",
              message:"6:35",
              p2:"WIN",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:"",
             name2:'南昌',
              name:'青岛',
            },
            {
              p:"WIN",
              score:"63",
              img:"/static/tim/7.png",
              message:"16:45",
              p2:"",
              score2:"69",
              img2:"/static/tim/1.png",
              message2:"常规赛第6轮",
             match_id:"",
              name2:'南昌',
              name:'青岛',
            },
            {
              p:"",
              score:"67",
              img:"/static/tim/1.png",
              message:"15:45",
              p2:"WIN",
              score2:"69",
              img2:"/static/tim/6.png",
              message2:"常规赛第6轮",
              name2:'南昌',
              name:'青岛',
              match_id:""
            }
          ]
        }
      ]
for(let i = 0; i < all_list.length; i++)
  for(let j = 0; j < all_list[i].match_list.length; j ++){
    all_list[i].match_list[j].match_id = all_list[i].time + all_list[i].match_list[j].name + all_list[i].match_list[j].name2
  }
function fun() {
  return {
    all_list: all_list
  }
}

var historydata = ''
export const matchData = req => {
  historydata = fun()
  return historydata
}
