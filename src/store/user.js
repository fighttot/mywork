// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole'
import { apiAuth } from '@/plugins/axios'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const cart = ref(0)
  const role = ref(UserRole.USER)
  const like = ref(0)
  const name = ref('')
  const image = ref('')
  const loding = ref(true)

  const login = (data) => {
    token.value = data.token
    account.value = data.account
    email.value = data.email
    cart.value = data.cart
    role.value = data.role
    like.value = data.like
    name.value = data.name
    image.value = data.image
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/120/${account.value}?colors=0db2ac,f5dd7e,fc8d4d,fc694d,faba32`
  })

  const getProfile = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      role.value = data.result.role
      cart.value = data.result.cart
      like.value = data.result.like
      name.value = data.result.name
      image.value = data.result.image
    } catch (error) {
      token.value = ''
    }
  }
  const lougot = () => {
    token.value = ''
    account.value = ''
    email.value = ''
    cart.value = 0
    role.value = UserRole.USER
    like.value = []
    name.value = ''
    image.value = ''
  }

  return {
    token,
    account,
    email,
    cart,
    role,
    like,
    name,
    login,
    isLogin,
    isAdmin,
    avatar,
    getProfile,
    lougot,
    loding,
    image
  }
}, {
  persist: {
    key: 'projectD',
    paths: ['token']
  }
})
