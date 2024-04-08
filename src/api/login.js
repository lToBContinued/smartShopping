// 此处用于存放所有登录相关的接口请求
import request from '@/utils/request'

// 1.获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 2.获取短信验证码
export const getMessageCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

// 登录接口
export const codeLogin = (mobile, smsCode) => {
  console.log('发送登录请求')
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}