import { delAddress, getAddressList } from '@/api/address'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      addressList: []
    }
  },
  mutations: {
    setAddressList (state, newList) {
      state.addressList = newList
    }
  },
  actions: {
    // 获取地址列表
    async getAddressListAction (context) {
      const { data } = await getAddressList()
      context.commit('setAddressList', data.list)
    },
    // 删除地址
    async delAddressAction (context, addressId) {
      delAddress(addressId)
      Toast('删除成功')
      // 删除后重新拉去列表
      await context.dispatch('getAddressListAction')
    }
  },
  getters: {}
}
