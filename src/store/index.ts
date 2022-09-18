import Vue from 'vue'
import Vuex from 'vuex'
import testModule from '@/store/modules/test'
import VuexPersistence from 'vuex-persist'
import localStore from '../utils/localStore'
import { AdminAuthenticateResult } from '@/service/userService'

Vue.use(Vuex)

interface State {
  userAuth: {
    token: string,
    AdmToken: string
  }
}

export default new Vuex.Store<State>({
  state: {
    userAuth: {
      token: '',
      AdmToken: ''
    }
  },
  getters: {},
  mutations: {
    setUserAuth (state, payload: AdminAuthenticateResult) {
      state.userAuth.token = payload.token
      state.userAuth.AdmToken = payload.AdmToken || ''
    }
  },
  actions: {
    changeUserAuth ({ commit }, payload: AdminAuthenticateResult): void {
      commit('setUserAuth', payload)
    }
  },
  modules: {
    testModule
  },
  // strict: process.env.NODE_ENV !== 'production',
  plugins: [new VuexPersistence({
    key: 'blog-store',
    storage: localStore
  }).plugin]
})
