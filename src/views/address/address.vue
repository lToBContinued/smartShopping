<template>
  <div class="address">
    <!--导航条-->
    <van-nav-bar title="地址管理" left-arrow @click-left="$router.go(-1)" fixed/>

    <!--地址列表-->
    <div class="address-list">
      <addressItem v-for="(item, index) in addressList" :key="index" :item="item"></addressItem>
    </div>

    <!--添加地址-->
    <div class="btn-box">
      <van-button @click="addAddress" class="btn" round type="info" color="#FB3228" block>新增地址+
      </van-button>
    </div>
  </div>
</template>

<script>
import addressItem from '@/components/addressItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'addressIndex',
  components: {
    addressItem
  },
  computed: {
    // 获取地址列表数据
    ...mapState('address', ['addressList'])
  },
  created () {
    this.setAddressList()
  },
  methods: {
    // 调用方法获取地址列表
    async setAddressList () {
      await this.$store.dispatch('address/getAddressListAction')
    },

    // 跳转新增地址页
    addAddress () {
      this.$router.push('/addAddress')
    }
  }
}
</script>

<style scoped lang="less">
.address {
  position: fixed;
  height: 100vh;
  width: 100%;
  padding: 54px 8px 8px;
  background-color: #F5F5F5;

  .address-list {
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
  }

  .btn-box {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 64px;
    background-color: #fff;

    .btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 90%;
      font-size: 16px;
    }
  }
}
</style>
