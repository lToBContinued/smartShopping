<template>
  <div class="list">
    <!--导航栏-->
    <van-nav-bar
      fixed
      title="商品列表"
      left-arrow
      @click-left="$router.go(-1)"
      clearable
    />

    <!--搜索栏-->
    <van-search
      shape="round"
      show-action
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" size="24"/>
      </template>
    </van-search>

    <!--排序选项-->
    <div class="sort-btns">
      <div class="sort-item" @click="changeSortMode('all')">综合</div>
      <div class="sort-item" @click="changeSortMode('sales')">销量</div>
      <div class="sort-item" @click="changeSortMode('price')">价格</div>
    </div>

    <div class="good-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProList } from '@/api/product'

export default {
  name: 'ListIndex',
  data () {
    return {
      page: 1,
      proList: [],
      sortPrice: 0
    }
  },
  components: {
    GoodsItem
  },
  computed: {
    // 获取地址栏的搜索关键字
    querySearch () {
      return this.$route.query.search
    }
  },

  async created () {
    // 获取商品列表
    const { data: { list } } = await getProList({
      categoryId: this.$route.query.categoryId,
      goodsName: this.querySearch,
      page: this.page
    })
    this.proList = list.data
  },

  methods: {
    // 更换排序方式
    async changeSortMode (mode) {
      this.sortPrice = 1 - this.sortPrice
      const { data: { list } } = await getProList({
        categoryId: this.$route.query.categoryId,
        goodsName: this.querySearch,
        page: this.page,
        sortType: mode,
        sortPrice: 1 - this.sortPrice
      })
      this.proList = list.data
    }
  }
}
</script>

<style scoped lang="less">
.list {
  padding-top: 46px;

  ::v-deep .van-icon-arrow-left {
    color: #333;
  }

  .tool {
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    justify-content: space-around;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
  }
}
</style>
