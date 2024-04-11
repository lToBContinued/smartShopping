import request from '@/utils/request'

// 订单结算确认
// mode: cart => obj { cartIds }
// mode: buyNow => obj { goodsId goodsNum goodsSkuId }
export const checkOrder = (mode, obj) => {
  return request({
    url: '/checkout/order',
    params: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}
