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