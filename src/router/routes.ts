import { RouteConfig } from 'vue-router'
import LayoutIndex from '@/layout/LayoutIndex.vue'
import LoginIndex from '@/views/LoginView/LoginIndex.vue'
import { RouteDetailDef } from '@/router/routesDef'

const routes: Array<RouteConfig> = [
  {
    path: RouteDetailDef.login.path,
    name: RouteDetailDef.login.name,
    component: LoginIndex,
    meta: {
      requireAuth: false,
      requireAdm: false
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "error" */ '../views/ErrorView/ErrorIndex.vue')
  },
  {
    path: '/',
    component: LayoutIndex,
    redirect: 'home',
    children: [
      {
        path: RouteDetailDef.home.path,
        name: RouteDetailDef.home.name,
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView/HomeView.vue'),
        meta: {
          requireAuth: false,
          requireAdm: false
        }
      },
      {
        path: RouteDetailDef.articleList.path,
        name: RouteDetailDef.articleList.name,
        component: () => import(/* webpackChunkName: "articleList" */ '../views/ArticleListView/ArticleListIndex.vue'),
        meta: {
          requireAuth: true,
          requireAdm: false
        }
      },
      {
        path: RouteDetailDef.daily.path,
        name: RouteDetailDef.daily.name,
        component: () => import(/* webpackChunkName: "articleList" */ '../views/DailyView/DailyIndex.vue'),
        meta: {
          requireAuth: true,
          requireAdm: true
        }
      }
    ]
  }
]
export default routes
