<template>
  <div class="search">
    <!--导航栏-->
    <van-nav-bar
      title="商品搜索"
      left-arrow
      @click-left="$router.go(-1)"
      clearable
    />

    <!--搜索框-->
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </form>

    <!--搜索历史-->
    <div class="search-history">
      <div class="title">
        <span>最近搜索</span>
        <van-icon name="delete-o" size="16"/>
      </div>
      <div class="list">
        <div class="list-item" @click="$router.push('/searchlist')">炒锅炒锅炒锅</div>
        <div class="list-item" @click="$router.push('/searchlist')">电视机</div>
        <div class="list-item" @click="$router.push('/searchlist')">冰箱</div>
        <div class="list-item" @click="$router.push('/searchlist')">手机</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchIndex',
  data () {
    return {
      value: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.search {
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
