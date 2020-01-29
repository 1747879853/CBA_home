import Mock from 'mockjs'
import { historyData } from './match_team_ranking.js'
import { matchData } from './match.js'
import { newPagehData } from './newpage.js'
import { match_list } from './match_detail.js'
import { match_list_finish  } from './match_detail_finish.js'
Mock.setup({
  timeout: 1000 // 设置延迟响应，模拟向后端请求数据
})
Mock.mock(/\/get_team_ranking_data/, historyData)
Mock.mock(/\/get_match_data/, matchData)
Mock.mock(/\/get_newpage_data/, newPagehData)
Mock.mock(/\/get_match_detail_analise_data/, match_list)
Mock.mock(/\/get_match_finish_data/, match_list_finish)
export default Mock
