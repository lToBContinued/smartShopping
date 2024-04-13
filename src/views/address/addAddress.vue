<template>
  <div class="addAddress">
    <!--导航栏-->
    <van-nav-bar title="新增地址" left-arrow @click-left="$router.go(-1)" fixed/>

    <!--新增地址信息-->
    <div class="newAddress">
      <div class="addressContent">
        <i>收货人</i>
        <input v-model="name" class="name" type="text" placeholder="请填写收货人姓名">
      </div>
      <div class="addressContent">
        <i>手机号码</i>
        <input v-model="phone" class="phone" type="text" placeholder="请填写收货人手机号">
      </div>
      <div class="addressContent">
        <i>所在地区</i>
        <input v-model="region" class="region" type="text" placeholder="请填写所在地区">
      </div>
      <div class="addressContent">
        <i>详细地址</i>
        <textarea v-model="detail" class="detail" type="text" placeholder="街道、楼牌号等"></textarea>
      </div>
    </div>

    <!--确认按钮-->
    <div class="btn-box">
      <van-button
        @click="addAddress"
        class="btn"
        type="info"
        color="#FB3228"
        round
        block
      >
        保&nbsp;&nbsp;存
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addAddressIndex',
  data () {
    return {
      name: '',
      phone: '',
      region: '',
      detail: ''
    }
  }
}
</script>

<style scoped lang="less">
.addAddress {
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 54px 8px 8px;
  background-color: #F5F5F5;

  .newAddress {
    padding: 4px 12px;
    background-color: #fff;
    border-radius: 10px;

    .addressContent {
      position: relative;
      border-bottom: 1px solid #ccc;

      &:last-child {
        border: none;
      }

      i {
        font-style: normal;
        font-weight: 700;
        line-height: 48px;
      }

      .name,
      .phone,
      .region,
      .detail {
        position: absolute;
        left: 96px;
        top: 50%;
        transform: translateY(-50%);
        width: 70%;
      }

      .detail {
        top: 32px;
      }
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
