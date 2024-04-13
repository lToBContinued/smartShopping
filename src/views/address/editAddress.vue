<template>
  <div class="editAddress">
    <!--导航栏-->
    <van-nav-bar title="编辑地址" left-arrow @click-left="$router.go(-1)" fixed/>

    <div class="addressCard">
      <div class="consignee">
        <i>收货人</i>
        <input v-model="name" placeholder="收货人姓名">
      </div>
      <div class="phone">
        <i>手机号码</i>
        <input v-model="phone" placeholder="手机号码">
      </div>
      <div class="region">
        <i>所在地区</i>
        <input v-model="region" placeholder="所在地区">
      </div>
      <div class="detail">
        <i>详细地址</i>
        <textarea v-model="detailAddr" placeholder="请输入地址"></textarea>
      </div>
    </div>
    <div class="btn-box">
      <van-button @click="changeAddress" class="btn" round type="info" color="#FB3228" block>保&nbsp;&nbsp;存
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editAddressIndex',
  data () {
    return {
      name: '',
      phone: '',
      region: '',
      detailAddr: '',
      regionArr: []
    }
  },
  created () {
    this.showAddress()
  },
  methods: {
    // 收货地址回显
    showAddress () {
      this.name = this.getName
      this.phone = this.getPhone
      this.region = this.getRegion.lable
    },
    // 修改收货地址
    changeAddress () {
      console.log(this.getAddressId)
      console.log(this.name)
      console.log(this.phone)
      console.log(this.detailAddr)
    }
  },
  computed: {
    getAddressId () {
      return this.$route.query.addressId
    },
    getName () {
      return this.$route.query.name
    },
    getPhone () {
      return this.$route.query.phone
    },
    getRegion () {
      return JSON.parse(decodeURIComponent(this.$route.query.region))
    }
  }
}
</script>

<style scoped lang="less">
.editAddress {
  height: 100vh;
  padding: 54px 8px 8px;
  background-color: #F5F5F5;

  .addressCard {
    padding: 4px 12px;
    background-color: #fff;
    border-radius: 12px;

    i {
      font-style: normal;
      font-weight: 700;
    }

    .consignee,
    .phone,
    .region,
    .detail {
      position: relative;
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #ccc;

      input {
        position: absolute;
        left: 96px;
        top: 50%;
        transform: translateY(-50%);
      }

      textarea {
        position: absolute;
        left: 96px;
      }
    }

    .detail {
      display: flex;
      border: none;
      align-items: flex-end;
    }
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
