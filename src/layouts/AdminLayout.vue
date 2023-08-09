<template>
  <VNavigationDrawer permanent>
    <VList>
      <VListItem :prepend-avatar="user.avatar" :title="user.account"></VListItem>
      <h1>
        {{ user.name }}
      </h1>
    </VList>
    <VDivider></VDivider>
    <VList>
      <VListItem v-for="navItem in navItems" :key="navItem.to" :to="navItem.to" :title="navItem.title"
        :prepend-icon="navItem.icon"></VListItem>
    </VList>
  </VNavigationDrawer>
  <VMain>
    <RouterView></RouterView>
  </VMain>
</template>

<script setup>
import { useUserStore } from '@/store/user'
const user = useUserStore()

const navItems = [
  { to: '/admin/products', title: '商品管理', icon: 'mdi-shopping' },
  { to: '/admin/orders', title: '訂單管理', icon: 'mdi-format-list-numbered' },
  { to: '/', title: '回首頁', icon: 'mdi-home' }
]
</script>
