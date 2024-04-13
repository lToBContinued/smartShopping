<template>
  <div class="addressItem">
    <div class="county">{{ getRegion }}</div>
    <div class="detail">{{ item.detail }}</div>
    <span class="name">{{ item.name }}</span>&nbsp;
    <span class="phone">{{ item.phone }}</span>
    <van-icon name="edit" class="edit" size="20" @click="goEditAddress"/>
    <van-icon name="delete-o" class="del" size="20" @click="delAddress(item.address_id)"/>
    <div class="line"></div>
  </div>
</template>

<script>

export default {
  name: 'addressItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    getRegion () {
      return this.item.region.province + this.item.region.city + this.item.region.region
    }
  },
  methods: {
    async delAddress (addressId) {
      console.log(addressId)
      this.$dialog.confirm({
        title: '温馨提示',
        message: '确认要删除吗'
      }).then(() => {
        this.$store.dispatch('address/delAddressAction', addressId)
      }).catch(() => {
      })
    },

    goEditAddress () {
      this.$router.push('/editAddress')
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

  .del {
    position: absolute;
    top: 50%;
    right: 46px;
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
