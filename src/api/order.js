import request from '@/utils/request'

// 订单结算确认
// mode: cart => obj { cartIds }
// mode: buyNow => obj { goodsId goodsNum goodsSkuId }
export const checkOrder = (mode, obj) => {
  return request({
    url: '/checkout/order',
    method: 'GET',
    params: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

// 提交订单
export const submitOrder = (mode, obj) => {
  return request({
    url: '/checkout/submit',
    method: 'POST',
    data: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      payType: 10,
      ...obj
    }
  })
}

// 我的订单
export const getMyOrderList = (dataType, page) => {
  return request({
    url: '/order/list',
    method: 'GET',
    params: {
      dataType,
      page
    }
  })
}

// 取消订单
export const delOrder = (orderId) => {
  return request({
    url: '/order/cancel',
    method: 'POST',
    data: {
      orderId
    }
  })
}
