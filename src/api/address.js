import request from '@/utils/request'

// 获取收货地址列表
export const getAddressList = () => {
  console.log('获取收货地址列表')
  return request({
    url: '/address/list'
  })
}

// 编辑地址
export const editAddress = (addressId, form) => {
  return request({
    url: '/address/edit',
    method: 'POST',
    data: {
      addressId,
      form
    }
  })
}

// 添加收货地址
export const addAddress = (name, phone, region) => {
  return request({
    url: '/address/add',
    method: 'POST',
    data: {
      name,
      phone,
      region
    }
  })
}

// 删除地址
export const delAddress = (addressId) => {
  return request({
    url: '/address/remove',
    method: 'POST',
    data: {
      addressId
    }
  })
}
