<template>
  <VCard :style="`background-color: ${color};`">
    <VImg :src="item" v-for="(item, i) in  images" :key="i" aspect-ratio="16/9" height="300" cover></VImg>
    <RouterLink :to="/proHome/ + _id" class="text-decoration-none">
      <VCardTitle :style="`color: ${textColor};`">{{ name }}</VCardTitle>
    </RouterLink>
    <VCardSubtitle>${{ price }}</VCardSubtitle>
    <VCardText>
      <pre>{{ description }}</pre>
    </VCardText>
    <VCardActions>
      <VBtn color="primary" prepend-icon="mdi-cart" @click="addCart">加入購物車</VBtn>
      <VBtn prepend-icon="mdi-heart" @click="addLike" :color="colorLike">{{ colorLike === '#F2E1D9' ? '加入收藏' : '已加收藏' }}
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  name: {
    type: String,
    default: () => ''
  },
  price: {
    type: Number,
    default: () => 0
  },
  images: {
    type: Array,
    default: () => []
  },
  description: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  manufacturers: {
    type: String,
    default: () => ''
  },
  sell: {
    type: Boolean,
    default: () => true
  },
  color: {
    type: String,
    default: () => ''
  },
  textColor: {
    type: String,
    default: () => ''
  }

})
const user = useUserStore()
const createSnackbar = useSnackbar()
const colorLike = ref('#F2E1D9')

const addCart = async () => {
  try {
    const { data } = await apiAuth.post('users/cart',
      {
        product: props._id,
        quantity: 1
      })
    user.cart = data.result
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

const addLike = async () => {
  try {
    const { data } = await apiAuth.post('users/like',
      {
        product: props._id
      })
    user.like = data.result.length
    const lico = await apiAuth.post('/products/red',
      {
        app: props._id
      })
    if (lico.data.result) { colorLike.value = 'red' } else {
      colorLike.value = '#F2E1D9'
    }
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

(async () => {
  try {
    const { data } = await apiAuth.post('/products/red',
      {
        app: props._id
      })
    if (data.result) { colorLike.value = 'red' }
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
})()
</script>
