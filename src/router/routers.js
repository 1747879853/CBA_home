import Main from '@/view/home.vue'
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
        path: '/forum',
        name: 'forum',
        component: () => import('@/view/forum.vue')
  },
  {
        path: '/search',
        name: 'search',
        component: () => import('@/view/search.vue')
  },
  {
        path: '/match',
        name: 'match',
        component: () => import('@/view/match.vue')
  }
  
]