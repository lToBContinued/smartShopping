import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'

const Login = () => import('@/views/login/index.vue')
const Search = () => import('@/views/search/index.vue')
const SearchList = () => import('@/views/search/list.vue')
const Prodetail = () => import('@/views/prodetail/index.vue')
const Pay = () => import('@/views/pay/index.vue')
const Myorder = () => import('@/views/myorder/index.vue')
const Address = () => import('@/views/address/address.vue')
const editAddress = () => import('@/views/address/editAddress.vue')
const addAddress = () => import('@/views/address/addAddress.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    {
      // 动态路由传参，确认将来是哪个商品，路由参数中携带 id
      path: '/prodetail/:id',
      component: Prodetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: Myorder
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/editaddress',
      component: editAddress
    },
    {
      path: '/addaddress',
      component: addAddress
    }
  ]
})

// 所有的路由在被访问到之前（解析渲染对应组件页面），都会先经过全局前置守卫
// 只有全局前置守卫放行了，才会到达对应的页面

// 全局前置导航守卫
// 1. to 往哪里去，到哪里去的路由信息对象（路径，参数）
// 2. form 从哪里来，从哪里来的路由信息对象（路径，参数）
// 3. next() 是否放行
//    如果 next() 调用，直接放行，放行到to要去的路径
//    next(路径)  拦截到next里面配置的路径

// 定义一个数组，专门存放所有需要权限访问的页面
const authUrls = ['/pay', '/myorder']

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // 看 to.path 是否在 authUrls 中出现过
  if (!authUrls.includes(to.path)) {
    // 非权限页面直接放行
    next()
    return
  }

  // 是权限页面，判断 token
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
