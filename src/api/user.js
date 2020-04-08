import axios from '@/libs/api.request'
export const get_team_ranking_data = () => {
  
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/scorerank',
    method: 'get',
    params: {
      
    }
  })
}

export const get_team_data = (team) => {
  
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/team_detail',
    method: 'get',
    params: {
      team
    }
  })
}
 
export const get_player_data = () => {
  
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/playerrank',
    method: 'get',
    params: {
      
    }
  })
}

export const up = (id) => {
  let data_ = {
    id
  }
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/up',
    data:data_,
    method: 'post'
  })
}

export const post_guss = (user_id,major,unmajor,question,answer,time) => {
  let data_ = {
    major:major,
    unmajor:unmajor,
    user_id:user_id,
    question:question,
    answer:answer,
    time:time
  }
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/jc',
    data:data_,
    method: 'post'
  })
}
export const get_guss_data = (major,unmajor) => {
  
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/jc_data',
    method: 'get',
    params: {
      major,unmajor
    }
  })
}

export const login = (user,passString) => {
  let data_ = {
    name:user,
    password:passString
  }
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/login',
    data:data_,
    method: 'post'
  })
}
export const comment = (user_id,news_id,contents,data) => {
  let data_ = {
    user_id:user_id,
    news_id:news_id,
    contents:contents,
    date:data
  }
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/comment',
    data:data_,
    method: 'post'
  })
}
export const changeimg = (id,url) => {
  let data_ = {
    id:id,
    img:url
  }
  return axios.request({
    url: 'http://47.94.93.50:8080/demo/cimg',
    data:data_,
    method: 'post'
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