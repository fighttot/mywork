<template>
  <section id="homelaout">
    <router-link to="/">
      <VImg src="@/assets/logo2.png" id="logo" v-if="$route.path !== '/loginRrgister'"></VImg>
    </router-link>
    <VNavigationDrawer v-model="drawer" location="right" temporary v-if="isMobile">
      <VList nav>
        <v-avatar color="brown" size="large" v-if="user.isLogin">
          <VImg :src="user.avatar"></VImg>
        </v-avatar>
        <v-avatar color="brown" size="large" v-if="!user.isLogin">
          <span>遊客</span>
        </v-avatar>
        <template v-for="navItem in navItems" :key="navItem.to">
          <VListItem :to="navItem.to" v-if="navItem.show">
            <template #prepend>
              <VIcon :icon="navItem.icon">
              </VIcon>
            </template>
            <VListItemTitle>{{ navItem.text }}
            </VListItemTitle>
            <template #append>
              <VBadge v-if="navItem.to === '/cart'" color="success" :content="user.cart" inline></VBadge>
              <VBadge v-if="navItem.to === '/like'" color="success" :content="user.like" inline></VBadge>
            </template>
          </VListItem>
        </template>
        <VListItem v-if="user.isLogin" @click="logout">
          <template #prepend>
            <VIcon icon="mdi-logout"></VIcon>
          </template>
          <VListItemTitle>登出</VListItemTitle>
        </VListItem>
      </VList>
    </VNavigationDrawer>
    <VAppBar class="flayoutapbar" v-if="$route.path !== '/loginRrgister'" :elevation="0" scroll-behavior="hide"
      scroll-threshold="200">
      <!-- <VContainer class="d-flex align-center"> -->
      <div class="d-flex align-center">

        <!-- <VAppBarTitle>型影不離</VAppBarTitle> -->

        <template v-if="!isMobile">
          <VBtn variant="text" :active="false" to='/manufacturers' prepend-icon="mdi-package-variant">廠商介紹</VBtn>
          <VBtn variant="text" :active="false" to='/proHome' prepend-icon="mdi-tag">商品一覽</VBtn>
          <VBtn variant="text" :active="false" to='/like' v-if="user.isLogin" prepend-icon="mdi-heart">
            <VBadge color="success" :content="user.like" floating></VBadge>
          </VBtn>
          <VSpacer></VSpacer>
          <VBtn variant="text" :active="false" to='/cart' prepend-icon="mdi-cart" v-if="user.isLogin" class="homecart">
            <VBadge color="success" :content="user.cart" floating></VBadge>
          </VBtn>
          <v-menu min-width="200px" rounded>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar color="brown" size="large" v-if="user.isLogin">
                  <VImg :src="user.avatar"></VImg>
                </v-avatar>
                <v-avatar color="brown" size="large" v-if="!user.isLogin">
                  <span>遊客</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <span v-if="user.isLogin">{{ user.name }}</span>
                  <span v-if="!user.isLogin">歡迎加入我們</span>
                  <v-divider class="my-3" v-if="!user.isLogin"></v-divider>
                  <v-btn rounded variant="text" v-if="!user.isLogin" to='/loginRrgister' prepend-icon="mdi-account-plus">
                    登入/註冊
                  </v-btn>
                  <v-divider class="my-3" v-if="user.isLogin && user.isAdmin"></v-divider>
                  <v-btn rounded variant="text" v-if="user.isLogin && user.isAdmin" to='/admin' prepend-icon="mdi-cog">
                    後台管理
                  </v-btn>
                  <v-divider class="my-3" v-if="user.isLogin"></v-divider>
                  <v-btn rounded variant="text" v-if="user.isLogin" to='/orders' prepend-icon="mdi-format-list-numbered">
                    我的訂單
                  </v-btn>
                  <v-divider class="my-3" v-if="user.isLogin"></v-divider>
                  <v-btn rounded variant="text" v-if="user.isLogin" @click="logout" prepend-icon="mdi-logout">
                    登出
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </template>
        <VSpacer v-if="isMobile"></VSpacer>
        <VAppBarNavIcon @click="drawer = true" v-if="isMobile"></VAppBarNavIcon>

        <!-- </VContainer> -->
      </div>
    </VAppBar>
    <VMain>
      <RouterView></RouterView>
    </VMain>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

// gsap動畫

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
const user = useUserStore()
const createSnackbar = useSnackbar()
const router = useRouter()
const drawer = ref(false)

const navItems = computed(() => {
  return [
    { to: '/loginRrgister', text: '加入我們', icon: 'mdi-account-plus', show: !user.isLogin },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: user.isLogin },
    { to: '/like', text: '收藏', icon: 'mdi-heart', show: user.isLogin },
    { to: '/orders', text: '訂單', icon: 'mdi-format-list-numbered', show: user.isLogin },
    { to: '/proHome', text: '商品一覽', icon: 'mdi-tag', show: true },
    { to: '/manufacturers', text: '廠商介紹', icon: 'mdi-package-variant', show: true },
    { to: '/', text: '回首頁', icon: 'mdi-home', show: true },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: user.isLogin && user.isAdmin }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.lougot()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom',
        rounded: 'pill',
        variant: 'tonal'
      }
    })
    router.push('/loginRrgister')
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom',
        rounded: 'pill',
        variant: 'tonal'
      }
    })
  }
}

// gsap
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.fromTo('#logo', {
    yPercent: 0,
    opacity: 1
  }, {
    yPercent: -100,
    paused: false,
    duration: 0.5,
    scrollTrigger: {
      start: '400 30',
      end: () => '+=' + document.documentElement.scrollHeight, // 整份文件的高度
      onEnter(self) {
        // console.log(self) // 捲動軸 scrollTrigger 自己
        // console.log(self.animation) // scrollTrigger 物件會有一些自己的屬性可以操作
        self.animation.play() // 可以抓到控制的補間動畫，使用它的方法
      },
      onUpdate(self) {
        // console.log(self.direction)
        self.direction === 1 ? self.animation.play() : self.animation.reverse() // -1 往上時正向播放，1 往下時反向播放
      }
    },
    markers: true
  })
})

</script>
