import request from '@/utils/request'

// 加入购物车
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  // goodsId => 商品id
  // goodsSkuId => 商品规格id
  return request({
    url: '/cart/add',
    method: 'POST',
    data: {
      goodsId,
      goodsNum,
      goodsSkuId
    }
  })
}

// 获取购物车列表
export const getCartList = () => {
  return request.get('/cart/list')
}

// 更新购物车商品的数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request({
    url: '/cart/update',
    method: 'POST',
    data: {
      goodsId,
      goodsNum,
      goodsSkuId
    }
  })
}

// 删除购物车商品
export const delSelect = (cartIds) => {
  return request({
    url: '/cart/clear',
    method: 'POST',
    data: {
      cartIds
    }
  })
}
