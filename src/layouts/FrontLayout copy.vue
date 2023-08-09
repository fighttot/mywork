<template>
  <VNavigationDrawer v-model="drawer" location="right" temporary v-if="isMobile">
    <VList nav>
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
  <VAppBar color="primary" style="color: azure !important;">
    <VContainer class="d-flex align-center">
      <VBtn to="/" :active="false">
        <VAppBarTitle>型影不離</VAppBarTitle>
      </VBtn>
      <VSpacer></VSpacer>
      <VAppBarNavIcon @click="drawer = true" v-if="isMobile"></VAppBarNavIcon>
      <template v-if="!isMobile">
        <template v-for="navItem in navItems" :key="navItem.to">
          <VBtn variant="text" :prepend-icon="navItem.icon" :active="false" :to="navItem.to" v-if="navItem.show">{{
            navItem.text }}
            <VBadge v-if="navItem.to === '/cart'" color="success" :content="user.cart" floating></VBadge>
            <VBadge v-if="navItem.to === '/like'" color="success" :content="user.like" floating></VBadge>
          </VBtn>
        </template>
      </template>
      <VBtn v-if="!isMobile && user.isLogin" variant="text" prepend-icon="mdi-logout" @click="logout">登出</VBtn>
    </VContainer>
  </VAppBar>
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
    { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !user.isLogin },
    { to: '/login', text: '登入', icon: 'mdi-login', show: !user.isLogin },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: user.isLogin },
    { to: '/like', text: '收藏', icon: 'mdi-heart', show: user.isLogin },
    { to: '/orders', text: '訂單', icon: 'mdi-format-list-numbered', show: user.isLogin },
    { to: '/proHome', text: '產品頁', icon: 'mdi-tag', show: user.isLogin },
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
        location: 'bottom'
      }
    })
    router.push('/login')
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
