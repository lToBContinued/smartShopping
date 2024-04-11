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
