import { Module } from 'vuex'

const testModule: Module<any, any> = {
  namespaced: true,
  state: () => ({
    testState: null
  }),
  mutations: {
    setTestState (state, payload) {
      state.testState = payload
    }
  },
  actions: {}
}
export default testModule
