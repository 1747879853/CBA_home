import Mock from 'mockjs'
import { historyData } from './match_team_ranking.js'
Mock.setup({
  timeout: 2000 // 设置延迟响应，模拟向后端请求数据
})
Mock.mock(/\/get_team_ranking_data/, historyData)
export default Mock
