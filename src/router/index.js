// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
        meta: {
          title: '型影不離',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/front/CartView.vue'),
        meta: {
          title: '型影不離 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'like',
        name: 'Like',
        component: () => import(/* webpackChunkName: "like" */ '@/views/front/LikeView.vue'),
        meta: {
          title: '型影不離 | 收藏',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */ '@/views/front/OrdersView.vue'),
        meta: {
          title: '型影不離 | 訂單',
          login: true,
          admin: false
        }
      },
      {
        path: 'manufacturers',
        name: 'ManufacturersView',
        component: () => import(/* webpackChunkName: "manufacturers" */ '@/views/front/ManufacturersView.vue'),
        meta: {
          title: '型影不離 | 廠商介紹',
          login: false,
          admin: false
        }
      },
      {
        path: 'loginRrgister',
        name: 'LoginRrgister',
        component: () => import(/* webpackChunkName: "login-rrgister" */ '@/views/front/LoginRrgister.vue'),
        meta: {
          title: '型影不離 | 加入我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'forgetPass',
        name: 'ForgetPass',
        component: () => import(/* webpackChunkName: "forgetPass" */ '@/views/front/ForgetPass.vue'),
        meta: {
          title: '型影不離 | 忘記密碼',
          login: false,
          admin: false
        }
      },
      {
        path: 'editPass',
        name: 'EditPass',
        component: () => import(/* webpackChunkName: "editPass" */ '@/views/front/EditPass.vue'),
        meta: {
          title: '型影不離 | 更改密碼',
          login: true,
          admin: false
        }
      }
    ]

  }, {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin-home" */ '@/views/admin/AdminHome.vue'),
        meta: {
          title: '型影不離 | 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin-products" */ '@/views/admin/AdminProducts.vue'),
        meta: {
          title: '型影不離 | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin-orders" */ '@/views/admin/OrdersView.vue'),
        meta: {
          title: '型影不離 | 訂單管理',
          login: true,
          admin: true
        }
      }
    ]
  }, {
    path: '/proHome',
    component: () => import('@/layouts/ProductLayout.vue'),
    children: [
      {
        path: '',
        name: 'proHome',
        component: () => import(/* webpackChunkName: "pro-home" */ '@/views/product/ProductHome.vue'),
        meta: {
          title: '型影不離 | 產品列表',
          login: false,
          admin: false
        }
      },
      {
        path: ':id',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '@/views/product/ProductView.vue'),
        meta: {
          title: '型影不離 | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'mimeyoi',
        name: 'Mimeyoi',
        component: () => import(/* webpackChunkName: "mimeyoi" */ '@/views/product/MimeyoiView.vue'),
        meta: {
          title: '型影不離 | MIMEYOI',
          login: false,
          admin: false
        }
      },
      {
        path: 'goodsmile',
        name: 'Goodsmile',
        component: () => import(/* webpackChunkName: "goodsmile" */ '@/views/product/GoodsmileView.vue'),
        meta: {
          title: '型影不離 | Goodsmile',
          login: false,
          admin: false
        }
      },
      {
        path: 'alter',
        name: 'Alter',
        component: () => import(/* webpackChunkName: "alter" */ '@/views/product/AlterView.vue'),
        meta: {
          title: '型影不離 | Alter',
          login: false,
          admin: false
        }
      },
      {
        path: 'daiki',
        name: 'Daiki',
        component: () => import(/* webpackChunkName: "daiki" */ '@/views/product/DaikiView.vue'),
        meta: {
          title: '型影不離 | Daiki',
          login: false,
          admin: false
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
  window.scrollTo(0, 0)
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  if (from === START_LOCATION) {
    await user.getProfile()
  }

  if (user.isLogin && ['/loginRrgister'].includes(to.path)) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/loginRrgister')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
