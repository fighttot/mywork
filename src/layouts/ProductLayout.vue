<template>
  <section id="prolaout">
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
    <VAppBar :elevation="0" class="appbar" scroll-behavior="hide" scroll-threshold="30">
      <VContainer class="d-flex align-center">
        <VSpacer></VSpacer>
        <VBtn to="/" :active="false">
          <VAppBarTitle>型影不離</VAppBarTitle>
        </VBtn>

        <template v-if="!isMobile">
          <VBtn variant="text" :active="false" to='/manufacturers' prepend-icon="mdi-package-variant">廠商介紹</VBtn>
          <VBtn variant="text" :active="false" to='/proHome' prepend-icon="mdi-tag">商品一覽</VBtn>
          <VSpacer></VSpacer>
          <VBtn variant="text" :active="false" to='/like' v-if="user.isLogin" prepend-icon="mdi-heart">
            <VBadge :content="user.like" floating></VBadge>
          </VBtn>

          <VBtn variant="text" :active="false" to='/cart' prepend-icon="mdi-cart" v-if="user.isLogin">
            <VBadge :content="user.cart" floating></VBadge>
          </VBtn>
          <VSpacer></VSpacer>
          <!-- <v-menu min-width="200px" rounded>
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
          </v-menu> -->
        </template>
        <VSpacer v-if="isMobile"></VSpacer>
        <VAppBarNavIcon @click="drawer = true" v-if="isMobile"></VAppBarNavIcon>

      </VContainer>
    </VAppBar>
  </section>
  <VMain>
    <RouterView :key="$route.path"></RouterView>
  </VMain>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

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
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: user.isLogin && user.isAdmin },
    { to: '/', text: '回首頁', icon: 'mdi-home', show: true }
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
        location: 'bottom'
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
        location: 'bottom'
      }
    })
  }
}

</script>
