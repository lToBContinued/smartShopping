<template>
  <div class="address">
    <!--导航条-->
    <van-nav-bar title="地址管理" left-arrow @click-left="$router.go(-1)" fixed/>

    <!--地址列表-->
    <div class="address-list">
      <addressItem v-for="item in addressList" :key="item.address_id" :list="item"></addressItem>
    </div>
  </div>
</template>

<script>
import { getAddressList } from '@/api/address'
import addressItem from '@/components/addressItem.vue'

export default {
  name: 'addressIndex',
  components: {
    addressItem
  },
  data () {
    return {
      addressList: []
    }
  },
  created () {
    this.handelGetAddressList()
  },
  methods: {
    async handelGetAddressList () {
      const { data: { list } } = await getAddressList()
      this.addressList = list
    }
  }
}
</script>

<style scoped lang="less">
.address {
  height: 100%;
  padding: 54px 8px 8px;
  background-color: #F5F5F5;
  .address-list{
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
