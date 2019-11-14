import {
  login,
  getUserInfo,
  getcartable,
  getOutcartable,
  getuserdata,
  gethistory,
  getexcel
} from '@/api/user' // 搭建服务器后导入submitform,cardatadele,fixcardata,checkcardata
import { setToken, getToken } from '@/libs/util'
export default {
  state: {
  /*  userName: '',
    userId: '',
    token: getToken(),
    access: '',
    hasGetInfo: false,
    cartable: [],
    adddata: [],
    checkData: [],
    flag: 0,
    Outcartable: [],
    Outadddata: [],
    checkOutData: [],
    userdata: [],
    useradd: [],
    historydata: [],
    exceldata: [],
    Outflag: 0,
    getuserflag: 0,
    getexcelflag: 0*/
  },
  mutations: {
    // setAvatar(state, avatarPath) {
    //   state.avatarImgPath = avatarPath
    // },
    // setUserId(state, id) {
    //   state.userId = id
    // },
    // setUserName(state, name) {
    //   state.userName = name
    // },
    // setAccess(state, access) {
    //   state.access = access
    // },
//     setToken(state, token) {
//       state.token = token
//       setToken(token)
//     },
//     setHasGetInfo(state, status) {
//       state.hasGetInfo = status
//     },
//     setCartable(state, cartable) {
//       state.cartable = cartable
//       state.cartable = state.cartable.concat(state.adddata)
//       state.adddata = []
//     },
//     setOutCartable(state, cartable) {
//       state.Outcartable = cartable
//       state.Outcartable = state.Outcartable.concat(state.Outadddata)
//       state.Outadddata = []
//     },
//     /* eslint-disable no-new */
//     addcardata(state, newdata) {
//       state.adddata.push(newdata)
//       if (state.cartable.length > 0) {
//         state.cartable = state.cartable.concat(state.adddata)
//         state.adddata = []
//       }
//       // 搭建服务器后拦截新增请求，
//       /* new Promise((resolve, reject) => {
//         submitform(newdata)
//           .then(resolve())
//           .catch(err => {
//             reject(err)
//           })
//       }) */
//      },
//     /* eslint-disable no-new */
//     addOutcardata(state, newdata) {
//       state.Outadddata.push(newdata)
//       if (state.Outcartable.length > 0) {
//         state.Outcartable = state.Outcartable.concat(state.Outadddata)
//         state.Outadddata = []
//       }
//       // 搭建服务器后拦截新增请求，
//       /* new Promise((resolve, reject) => {
//         submitform(newdata)
//           .then(resolve())
//           .catch(err => {
//             reject(err)
//           })
//       }) */
//     },
//     Outcartablefix(state, newdata, OutcarNum) {
//       // 实际应用还要传递车牌号
//       for (let i = 0; i < state.Outcartable.length; i++) {
//         if (state.Outcartable[i].outcarnum === OutcarNum) {
//           state.Outcartable[i] = newdata
//         }
//       }

//       /*
      // new Promise((resolve, reject) => {
//         fixcardata(carid)
//           .then(resolve())
//           .catch(err => {
//             reject(err)
//           })
//       }) */
//     },
//     cartablefix(state, newdata, carNum) {
//       // 实际应用还要传递车牌号
//       for (let i = 0; i < state.cartable.length; i++) {
//         if (state.cartable[i].carnum === carNum) state.cartable[i] = newdata
//       }

//       /*
//       new Promise((resolve, reject) => {
//         fixcardata(carid)
//           .then(resolve())
//           .catch(err => {
//             reject(err)
//           })
//       }) */
//     },
//     cardeledata(state, carNum) {
//       // 实际应用时还要传递车牌号来发送给服务器，用来删除信息
//       for (let i = 0; i < state.cartable.length; i++) {
//         if (state.cartable[i].carnum === carNum) state.cartable.splice(i, 1)
//       }
//       /* new Promise((resolve, reject) => {
//         cardatadele(carid)
//           .then(resolve())
//           .catch(err => {
//             reject(err)
//           })
//       }) */
//     },
//     Outcardeledata(state, carNum) {
//       // 实际应用时还要传递车牌号来发送给服务器，用来删除信息
//       for (let i = 0; i < state.Outcartable.length; i++) {
//         if (state.Outcartable[i].outcarnum === carNum) {
//           state.Outcartable.splice(i, 1)
//         }
//       }
//       /* new Promise((resolve, reject) => {
//         cardatadele(carid)
//           .then(resolve())
//           .catch(err => {
//             reject(err)
//           })
//       }) */
//     },
//     setCheckOutData(state, data) {
//       state.checkOutData.push(data)
//     },
//     setCheckData(state, data) {
//       state.checkData.push(data)
//     },
//     cleanCheckOutData(state) {
//       state.checkOutData = []
//     },
//     cleanCheckData(state) {
//       state.checkData = []
//     },
//     setuserdata(state, userdata) {
//       state.userdata = userdata
//       state.userdata = state.userdata.concat(state.useradd)
//       state.useradd = []
//     },
//     // 系统中的用户名密码不能直接存储到store中，实际应用操作用户直接向服务器来进行增删该查
//     fixuserdata(state, userparam) {
//       for (let i = 0; i < state.userdata.length; i++) {
//         if (state.userdata[i].username === userparam.username) {
//           state.userdata[i] = userparam
//         }
//       }
//     },
//     adduserdata(state, userparam) {
//       state.useradd.push(userparam)
//       if (state.userdata.length > 0) {
//         state.userdata = state.userdata.concat(state.useradd)
//         state.useradd = []
//       }
//       // 搭建服务器后拦截新增请求，
//       /* new Promise((resolve, reject) => {
//         submitform(newdata)
//           .then(resolve())
//           .catch(err => {
//             reject(err)
//           })
//       }) */
//     },
//     sethistory(state, historydata) {
//       state.historydata = historydata
//     },
//     deletuserdata(state, user) {
//       for (let i = 0; i < state.userdata.length; i++) {
//         if (state.userdata[i].username === user) {
//           state.userdata.splice(i, 1)
//         }
//       }
//     },
//     setexcel(state, exceldata) {
//       state.exceldata = exceldata
//     } 
//   },
//   getters: {},
//   actions: {
//     // 登录
//     handleLogin({ commit }, { userName, password }) {
//       userName = userName.trim()
//       return new Promise((resolve, reject) => {
//         login({
//           userName,
//           password
//         })
//           .then(res => {
//             const data = res.data
//             commit('setToken', data.token)
//             resolve()
//           })
//           .catch(err => {
//             reject(err)
//           })
//       })
//     },
//     // 获取用户相关信息
//     getUserInfo({ state, commit }) {
//       return new Promise((resolve, reject) => {
//         try {
//           getUserInfo(state.token)
//             .then(res => {
//               const data = res.data
//               commit('setAvatar', data.avatar)
//               commit('setUserName', data.name)
//               commit('setUserId', data.user_id)
//               commit('setAccess', data.access)
//               console.log(data.access)
//               commit('setHasGetInfo', true)
//               resolve(data)
//             })
//             .catch(err => {
//               reject(err)
//             })
//         } catch (error) {
//           reject(error)
//         }
//       })
//     },
//     // 获取小区所有车辆信息
//     getCartable({ state, commit }) {
//       return new Promise((resolve, reject) => {
//         if (state.flag === 0) {
//           // 这里的判断是因为不是真实的服务器，我采用的是mock模拟随机数据，每一次getcartable请求都会更新
//           getcartable().then(res => {
//             // store里面的cartable内容为固定数目，这样插入操作就不能顺利进行只能插入一条数据；真实服务器段的时候要把这个判断去掉
//             const data = res.data.cartabledata
//             commit('setCartable', data)
//           })
//           state.flag = 1
//         } else {
//         }
//       })
//     },
//     // 查询
//     checkCardata({ state, commit }, id) {
//       return new Promise((resolve, reject) => {
//         /* checkcardata(id).then(res => { //mock拦截请求暂时不知道怎么传递参数，真实应用可以直接拦截请求中的参数，进行操作
//           const data = res
//           commit('setCheckData', data)
//         }) */
//         if (id.length > 6) {
//           // id是身份证号码
//           for (let i = 0; i < state.cartable.length; i++) {
//             if (state.cartable[i].masterid === id) {
//               commit('setCheckData', state.cartable[i])
//             }
//           }
//         } else {
//           // id是车牌号
//           for (var j = 0; j < state.cartable.length; j++) {
//             if (state.cartable[j].carnum === id) {
//               commit('setCheckData', state.cartable[j])
//             }
//           }
//         }
//       })
//     },
//     // 获取小区所有车辆信息
//     getOutCartable({ state, commit }) {
//       return new Promise((resolve, reject) => {
//         if (state.Outflag === 0) {
//           // 这里的判断是因为不是真实的服务器，我采用的是mock模拟随机数据，每一次getcartable请求都会更新
//           getOutcartable().then(res => {
//             // store里面的cartable内容为固定数目，这样插入操作就不能顺利进行只能插入一条数据；真实服务器段的时候要把这个判断去掉
//             const data = res.data.Outcardata
//             commit('setOutCartable', data)
//           })
//           state.Outflag = 1
//         } else {
//         }
//       })
//     },
//     // 查询
//     checkOutCardata({ state, commit }, id) {
//       return new Promise((resolve, reject) => {
//         /* checkcardata(id).then(res => { //mock拦截请求暂时不知道怎么传递参数，真实应用可以直接拦截请求中的参数，进行操作
//           const data = res
//           commit('setCheckData', data)
//         }) */
//         for (let j = 0; j < state.Outcartable.length; j++) {
//           if (state.Outcartable[j].outcarnum === id) {
//             commit('setCheckOutData', state.Outcartable[j])
//           }
//         }
//       })
//     },
//     getuserdata({ state, commit }) {
//       return new Promise((resolve, reject) => {
//         if (state.getuserflag === 0) {
//           getuserdata().then(res => {
//             commit('setuserdata', res.data)
//           })
//           state.getuserflag = 1
//         }
//       })
//     },
//     gethistorydata({ state, commit }) {
//       return new Promise((resolve, reject) => {
//         gethistory().then(res => {
//           commit('sethistory', res.data.cartabledata)
//         })
//       })
//     },
//     getexcel({ state, commit }) {
//       return new Promise((resolve, reject) => {
//         if (state.getexcelflag === 0) {
//           state.getexcelflag = 1
//           getexcel().then(res => {
//             commit('setexcel', res.data.cartabledata)
//           })
//         }
//       })
//     }
//   }
// }
