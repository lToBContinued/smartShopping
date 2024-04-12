export default {
  // 此处编写的就是vue组件实例的配置项，通过一定的语法可以混入到组件内部
  // data, methods, computed, 生命周期函数……
  // 注意点：如果此处和组件内提供的了同名的data或methods，则组件内优先级更高
  methods: {
    loginConfirm () {
      // 判断token是否存在
      // 1.如果token不存在，弹确认框
      // 2.如果token存在，继续请求操作
      if (!this.$store.getters.token) {
        // 弹确认框
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作哦',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        }).then(() => {
          // 如果希望跳转到登录，并且登录后能会跳回来，就需要在跳转时携带参数（当前路径的地址）
          console.log(this.$route.fullPath)
          this.$router.replace({
            path: '/login',
            query: {
              backUrl: this.$route.fullPath
            }
          })
        }).catch(() => {
        })
        return true
      }
      return false
    }
  }
}
