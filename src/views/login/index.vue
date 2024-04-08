<template>
  <div class="login">
    <!--头部 - NavBar-->
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)"/>   <!--$router.go(-1) 返回上一页-->
    <!--主体-->
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="mobile" type="number" class="inp" maxlength="11" placeholder="请输入手机号码">
        </div>
        <div class="form-item">
          <input v-model="picCode" type="text" class="inp" maxlength="5" placeholder="请输入图形验证码">
          <img v-if="picUrl" :src="picUrl" @click="getPicCode" alt="">
        </div>
        <div class="form-item">
          <input v-model="msgCode" type="text" class="inp" placeholder="请输入短信密码">
          <button @click="getCode">
            {{ second === totalSecond ? '获取验证码' : second + '秒后重新发送' }}
          </button>
        </div>
      </div>

      <div class="login-in" @click="login">登&nbsp;录</div>
    </div>
  </div>
</template>

<script>
import { getMessageCode, getPicCode, codeLogin } from '@/api/login'

export default {
  name: 'LoginIndex',
  data () {
    return {
      picKey: '', // 将来请求传递的图形验证码唯一标识
      picUrl: '', // 存储请求渲染的图片地址
      totalSecond: 60, // 总秒数
      second: 60, // 当前秒数，开定时器对second--
      timer: null, // 定时器id
      mobile: '', // 手机号
      picCode: '', // 用户输入的图形验证码
      msgCode: '' // 短信验证码
    }
  },
  created () {
    this.getPicCode()
  },
  destroyed () {
    // 离开页面，清除定时器
    clearInterval(this.timer)
  },
  methods: {
    // 获取图形验证码
    async getPicCode () {
      const {
        data: {
          base64,
          key
        }
      } = await getPicCode()
      this.picUrl = base64 // 存储地址
      this.picKey = key // 存储唯一标识
    },

    // 校验手机号和图形验证码是否合法
    validFn () {
      if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^[A-Za-z0-9]{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },

    // 获取短信验证码
    async getCode () {
      if (!this.validFn()) {
        // 如果没通过校验，没必要往下走
        return
      }

      // 当前目前没有定时器开着，且 totalSecond 和 Second 一致，才可以倒计时
      if (!this.timer && this.totalSecond === this.second) {
        // 发送请求（预期：希望如果响应的 status 不是200，最好抛出一个 promise 错误，await 只会等待成功的 promise）
        await getMessageCode(this.picCode, this.picKey, this.mobile)
        this.$toast('验证法发送成功，注意查收')

        // 开启倒计时
        this.timer = setInterval(() => {
          this.second--

          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null // 重置定时器id
            this.second = this.totalSecond // 定时器秒数归为
          }
        }, 1000)
      }
    },

    // 登录
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的短信验证码')
        return
      }
      await codeLogin(this.mobile, this.msgCode)
      this.$toast('登录成功')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="less">
.container {
  padding: 24px;

  .title {
    h3 {
      margin-top: 48px;
      margin-bottom: 12px;
      font-size: 32px;
      font-weight: 400;
    }

    p {
      color: #ccc;
    }
  }

  .form {
    margin-top: 32px;

    .form-item {
      position: relative;
      margin-bottom: 16px;

      .inp {
        width: 100%;
        height: 48px;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
      }

      img {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 96px;
      }

      button {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: transparent;
        color: #F6A12A;
      }
    }
  }

  .login-in {
    margin-top: 32px;
    width: 100%;
    height: 48px;
    background: linear-gradient(90deg, #EDB23F, #FA950A);
    border-radius: 24px;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .2);
    color: #fff;
    line-height: 48px;
    text-align: center;
  }
}
</style>
