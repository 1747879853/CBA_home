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




var left = [
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"三分得分"},
        {"name":"11111"},
      ]
var all_list = [
                {
                  t1:"球队",
                  t2:"胜-负",
                  t3:"胜率",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"得分",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"篮板",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"助攻",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"失误",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"球队",
                  t2:"胜-负",
                  t3:"胜率",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"得分",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"篮板",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"助攻",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                },
                {
                  t1:"失误",
                  t2:"",
                  t3:"数据",
                  match_list:[
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                    {
                      img:"/static/tim/1.png",
                      data1:"7-1",
                      data2:"87.5%",
                      name:"广东",
                      ranking:"1" 
                    },
                  ]
                }
              ]
function fun() {
  return {
    left: left,
    all_list: all_list
  }
}

var historydata = ''
export const historyData = req => {
  historydata = fun()
  return historydata
}
