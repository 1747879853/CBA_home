import axios from '@/libs/api.request'
export const get_team_ranking_data = () => {
  
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/scorerank',
    method: 'get',
    params: {
      
    }
  })
}
export const getUserInfo = token => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}
export const get_match_data = (sign) => {
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/teamSchdule',
    params: {sign},
    method: 'get'
  })
}
export const get_newpage_data = () => {
  return axios.request({
    url: 'get_newpage_data',
    params: {},
    method: 'get'
  })
}
export const get_match_detail_analise_data = (match_id) => {
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/teamdetail_1',
    params: {match_id},
    method: 'get'
  })
}
export const get_match_finish_data = (match_id) => {
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/teamdetail',
    params: {
      match_id
    },
    method: 'get'
  })
}
export const get_home_data = () => {
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/maintab',
    params: {
      
    },
    method: 'get'
  })
}
export const get_new_data = (match_id) => {
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/newsdetail',
    params: {
      match_id
    },
    method: 'get'
  })
}