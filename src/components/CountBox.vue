<template>
  <div class="count-box">
    <button @click="handelSub" class="minus">-</button>
    <!--v-model = :value + @input-->
    <input :value="value" @change="handelChange" class="inp" type="text">
    <button @click="handelAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },

  methods: {
    handelSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },

    handelAdd () {
      this.$emit('input', this.value + 1)
    },

    handelChange (e) {
      const num = +e.target.value // 转数字处理 （1）数字 （2）NaN
      // 输入了不合法字符或输入负值，回退原来的value值
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style scoped lang="less">
.count-box {
  width: 110px;

  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
    line-height: 30px;
  }

  button {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
}
</style>
