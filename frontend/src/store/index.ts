import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  // 同期処理
  mutations: {},
  // 非同期処理
  actions: {
    async register(payload) {
      console.log("register", payload)
    },
    async login(payload) {
      console.log("login", payload)
    },
  },
  modules: {},
})
