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
var data_list = [
                  {
                    't': '得分',
                    'name1': '安东尼奥-布莱克呢',
                    'name2': '兰斯-斯蒂芬孙',
                    'score1': 38.6,
                    'score2': 36.3,
                    'picture1': '/static/man.jpg',
                    'picture2': '/static/man.jpg'
                  },
                  {
                    't': '篮板',
                    'name1': '安东尼奥-布莱克呢',
                    'name2': '兰斯-斯蒂芬孙',
                    'score1': 38.6,
                    'score2': 36.3,
                    'picture1': '/static/man.jpg',
                    'picture2': '/static/man.jpg'
                  },
                  {
                    't': '助攻',
                    'name1': '安东尼奥-布莱克呢',
                    'name2': '兰斯-斯蒂芬孙',
                    'score1': 38.6,
                    'score2': 36.3,
                    'picture1': '/static/man.jpg',
                    'picture2': '/static/man.jpg'
                  },
                  {
                    't': '抢断',
                    'name1': '安东尼奥-布莱克呢',
                    'name2': '兰斯-斯蒂芬孙',
                    'score1': 38.6,
                    'score2': 36.3,
                    'picture1': '/static/man.jpg',
                    'picture2': '/static/man.jpg'
                  },
                  {
                    't': '盖帽',
                    'name1': '安东尼奥-布莱克呢',
                    'name2': '兰斯-斯蒂芬孙',
                    'score1': 38.6,
                    'score2': 36.3,
                    'picture1': '/static/man.jpg',
                    'picture2': '/static/man.jpg'
                  }
]
var team = {
  'team1': "江苏",
  'team2': "辽宁"
}
var data = [
{
        name: '江苏',
        分数类型: '得分',
        分数: 18.9
      }, {
        name: '江苏',
        分数类型: '回合数',
        分数: 28.8
      }, {
        name: '江苏',
        分数类型: '篮板',
        分数: 39.3
      }, {
        name: '江苏',
        分数类型: '助攻',
        分数: 81.4
      }, {
        name: '江苏',
        分数类型: '失误',
        分数: 47
      }, {
        name: '江苏',
        分数类型: '抢断',
        分数: 20.3
      }, {
        name: '辽宁',
        分数类型: '得分',
        分数: 12.4
      }, {
        name: '辽宁',
        分数类型: '回合数',
        分数: 23.2
      }, {
        name: '辽宁',
        分数类型: '篮板',
        分数: 34.5
      }, {
        name: '辽宁',
        分数类型: '助攻',
        分数: 99.7
      }, {
        name: '辽宁',
        分数类型: '失误',
        分数: 52.6
      }, {
        name: '辽宁',
        分数类型: '抢断',
        分数: 35.5
      }]
var recent_data = [
{
        'time': '12.31',
        'result': '胜',
        'leftScore': '80',
        'rightScore': '70',
        'leftTeam': '四川',
        'rightTeam': '北京',
        'master': '主',
        'show': 1
      },
      {
        'time': '12.31',
        'result': '胜',
        'leftScore': '80',
        'rightScore': '70',
        'leftTeam': '四川',
        'rightTeam': '北京',
        'master': '主',
        'show': 1
      },
      {
        'time': '12.31',
        'result': '胜',
        'leftScore': '80',
        'rightScore': '70',
        'leftTeam': '四川',
        'rightTeam': '北京',
        'master': '主',
        'show': 1
      },
      {
        'time': '12.31',
        'result': '胜',
        'leftScore': '80',
        'rightScore': '70',
        'leftTeam': '四川',
        'rightTeam': '北京',
        'master': '主',
        'show': 1
      },
      {
        'time': '12.31',
        'result': '胜',
        'leftScore': '80',
        'rightScore': '70',
        'leftTeam': '四川',
        'rightTeam': '北京',
        'master': '主',
        'show': 1
      },
      {
        'time': '12.31',
        'result': '胜',
        'leftScore': '80',
        'rightScore': '70',
        'leftTeam': '四川',
        'rightTeam': '北京',
        'master': '主',
        'show': 1
      },
      {
        'time': '12.31',
        'result': '胜',
        'leftScore': '80',
        'rightScore': '70',
        'leftTeam': '四川',
        'rightTeam': '北京',
        'master': '客',
        'show': 1
      }]
var his_data = [
        {
          'time': '2017-12-31',
          'match': '常规赛',
          'master': '八一',
          'customer': '青岛',
          'score_customer': 100,
          'score_master': 96
        },
        {
          'time': '2017-12-31',
          'match': '常规赛',
          'master': '八一',
          'customer': '青岛',
          'score_customer': 95,
          'score_master': 111
        },
        {
          'time': '2017-12-31',
          'match': '常规赛',
          'master': '八一',
          'customer': '青岛',
          'score_customer': 95,
          'score_master': 111
        }]
var message_his = [
{
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！asdsdfasfasdfsadfsadfasdfasdf",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        },
        {
          'message': "加油加油加油加油加油加油加油加油！",
          'img': '',
          'username': '哔哩哔哩'
        }]
function fun() {
  return {
    data_list: data_list,
    team: team,
    data: data,
    recent_data: recent_data,
    his_data: his_data,
    message_his_data: message_his
  }
}

var historydata = ''
export const match_list = req => {
  historydata = fun()
  return historydata
}
