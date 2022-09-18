import Vue from 'vue'
import VueRouter, { NavigationGuard } from 'vue-router'
import routes from '@/router/routes'
import store from '@/store'
import Message from '@/plugins/MessageBox'

// 捕获重复进入相同路由时报错
const OriginPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return (OriginPush.call(this, location) as any).catch((err: Error) => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const beforeEachFn: NavigationGuard = async (to, from, next) => {
  await (store as any).restored
  const userStatus = store.state.userAuth
  const isAdm = userStatus.token && userStatus.AdmToken
  const isUser = userStatus.token
  console.log(from)
  // 未登录 进入没有权限的页面
  if (to.meta?.requireAuth && !isUser) {
    Message.error('此页面需要登录')
    next(false)
  } else if (to.meta?.requireAdm && !isAdm) {
    Message.error('权限不足')
    next(false)
  } else if (to.path === '/login' && isUser) {
    Message.warning('需要退出登录')
    next(false)
  } else {
    next()
  }
}

router.beforeEach(beforeEachFn)

export default router
