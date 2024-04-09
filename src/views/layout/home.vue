<template>
  <div class="home">
    <!--顶部导航栏-->
    <van-nav-bar title="智慧商城" fixed></van-nav-bar>

    <!--搜索框-->
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round"/>

    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/banner1.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner2.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner3.jpg" alt=""></van-swipe-item>
    </van-swipe>

    <!--商品分类-->
    <van-grid :border="false" :column-num="5">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="http://cba.itlike.com/public/uploads/10001/20230320/58a7c1f62df4cb1eb47fe83ff0e566e6.png"
        text="新品首发"
        @click="$router.push('/category')"
      />
    </van-grid>

    <!--主会场-->
    <div class="main">
      <img src="@/assets/main.png" alt="">
    </div>
    <!--猜你喜欢-->
    <div class="guess">
      <p class="guess-title">—— 猜你喜欢 ——</p>
      <div class="goods-list">
        <GoodsItem v-for="item in 10" :key="item"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'

export default {
  name: 'homeIndex',
  data () {
    return {
      value: ''
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped lang="less">
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

.van-nav-bar {
  z-index: 999;
  background-color: #c21401;

  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;

  img {
    width: 100%;
  }
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
