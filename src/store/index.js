import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import cart from '@/store/modules/cart'
import address from '@/store/modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    // 获取用户token
    token (state) {
      return state.user.userInfo.token
    }
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    cart,
    address
  }
})
