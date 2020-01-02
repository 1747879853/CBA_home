import axios from '@/libs/api.request'
export const get_team_ranking_data = () => {
  
  return axios.request({
    url: 'get_team_ranking_data',
    method: 'get'
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
export const get_match_data = () => {
  return axios.request({
    url: 'get_match_data',
    params: {},
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
export const get_match_detail_analise_data = () => {
  return axios.request({
    url: 'get_match_detail_analise_data',
    params: {},
    method: 'get'
  })
}