<template>
  <div class="addressItem">
    <div class="county">{{ countyAddress }}</div>
    <div class="detail">{{ list.detail }}</div>
    <div class="name">{{ list.name }}
      <span class="phone">{{ list.phone }}</span>
    </div>
    <van-icon name="edit" class="edit"/>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'addressItem',
  props: {
    list: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    countyAddress () {
      const {
        region: {
          city,
          province,
          region
        }
      } = this.list
      return province + city + region
    }
  }
}
</script>

<style scoped lang="less">
.addressItem {
  position: relative;
  padding: 12px;
  line-height: 1.3rem;

  .county {
    font-size: 12px;
    color: #808080;
  }

  .detail {
    font-size: 16px;
    font-weight: 700;
  }

  .phone {
    font-size: 16px;
    color: #808080;
  }

  .edit {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }

  .line {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 0.3px;
    width: 95%;
    background-color: #ccc;
  }
}
</style>
