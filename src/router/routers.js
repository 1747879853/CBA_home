import Main from '@/view/home_new.vue'
export default [
  
  {
    path: '/',
    name: 'home',
    component: Main,
   // redirect: '/home',
  },
  {
        path: '/detil_newpage',
        name: 'detil_newpage',
        component: () => import('@/view/detil_newpage.vue')
  },
  {
        path: '/forum', //论坛
        name: 'forum',
        component: () => import('@/view/forum.vue')    
  },
  {
        path: '/forum_hotspot', //论坛_热点
        name: 'forum_hotspot',
        component: () => import('@/view/forum_hotspot.vue')    
  },
  {
        path: '/forum_follow', //论坛-关注
        name: 'forum_follow',
        component: () => import('@/view/forum_follow.vue')    
  },
  {
        path: '/search', //搜索
        name: 'search',
        component: () => import('@/view/search.vue')  
  },
  {
        path: '/match', //赛事
        name: 'match',
        component: () => import('@/view/match.vue')   
  },
  {
        path: '/match_player_ranking', //赛事-球员排名
        name: 'match_player_ranking',
        component: () => import('@/view/match_player_ranking.vue')   
  },
  {
        path: '/match_team_ranking', //赛事-球队排名
        name: 'match_team_ranking',
        component: () => import('@/view/match_team_ranking_new.vue')   
  },
  {
        path: '/more', //更多
        name: 'more',
        component: () => import('@/components/tabs.vue')   
  },
  {
        path: '/match_detail', //赛程详细
        name: 'match_detail',
        component: () => import('@/view/match_detail.vue')   
  },
  {
        path: '/match_detail_finish', //赛程详细
        name: 'match_detail_finish',
        component: () => import('@/view/match_detail_finish.vue')   
  },
  {
        path: '/commu', //赛程详细
        name: 'commu',
        component: () => import('@/view/commu.vue')   
  },
  {
        path: '/user', 
        name: 'user',
        component: () => import('@/view/user.vue')   
  }
]