<template>
  <div class="search">
    <!--导航栏-->
    <van-nav-bar
      fixed
      title="商品搜索"
      left-arrow
      @click-left="$router.go(-1)"
      clearable
    />

    <!--搜索框-->
    <form action="/">
      <van-search v-model="search" show-action placeholder="请输入搜索关键词" autofocus>
        <template #action>
          <div @click="goSearch(search)">搜索</div>
        </template>
      </van-search>
    </form>

    <!--搜索历史-->
    <div class="search-history" v-if="history.length > 0">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clearHistory" name="delete-o" size="16"/>
      </div>
      <div class="list">
        <div
          v-for="item in history"
          :key="item"
          class="list-item"
          @click="goSearch(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { getHistoryList, setHistoryList } from '@/utils/storage'

export default {
  name: 'SearchIndex',
  data () {
    return {
      search: '', // 输入框的内容
      history: getHistoryList() // 历史记录
    }
  },
  methods: {
    goSearch (key) {
      const index = this.history.indexOf(key)
      if (index !== -1) {
        // 存在相同的项，将原有关键字移除
        this.history.splice(index, 1)
      }
      this.history.unshift(key)
      setHistoryList(this.history)
      // 跳转到搜索列表页
      this.$router.push(`/searchlist?search=${key}`)
    },

    clearHistory () {
      this.history = []
      setHistoryList([])
    }
  }
}
</script>

<style scoped lang="less">
.search {
  padding-top: 46px;

  ::v-deep .van-nav-bar__title {
    font-weight: 700;
  }

  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }

  .search-history {
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      height: 40px;
      font-size: 14px;
      line-height: 40px;

      span {
        color: #666;
      }
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      padding: 0 10px;
      gap: 5%;

      .list-item {
        width: 30%;
        height: 30px;
        padding: 0 7px;
        border: 1px solid #efefef;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 10px;
      }
    }
  }
}

</style>
