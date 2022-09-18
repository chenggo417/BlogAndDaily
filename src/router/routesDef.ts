// 第一层定义
export const RouteTotalDef = ['login', 'home', 'articleList', 'daily']

/**
 * 详细定义
 * login
 * home
 * art
 *    detail/:id
 *    classify/:type
 * daily
 *    detail/:id
 *    classify/:type
 */
export const RouteDetailDef = {
  login: {
    title: 'login',
    name: 'login',
    path: '/login'
  },
  home: {
    title: 'home',
    name: 'home',
    path: '/home'
  },
  articleList: {
    title: 'articleList',
    name: 'articleList',
    path: '/articleList'
  },
  daily: {
    title: 'daily',
    name: 'daily',
    path: '/daily'
  }
}

// 导肮定义
export const NavRouteDef = [
  {
    title: RouteDetailDef.home.title,
    path: RouteDetailDef.home.path
  },
  {
    title: RouteDetailDef.articleList.title,
    path: RouteDetailDef.articleList.path
  },
  {
    title: RouteDetailDef.daily.title,
    path: RouteDetailDef.daily.path
  }
]
