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
var historydata = ''
export const historyData = req => {
  historydata = temp()
  return historydata
}
