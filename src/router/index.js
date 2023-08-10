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
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
