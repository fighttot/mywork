<template>
  <section class="comproduct">
    <!-- <VCard :style="`background-color: ${color};`">
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
  </VCard> -->

    <div :style="`width:100%; background-color: ${color} ;`" class="box1">
      <VRow>
        <VCol :style="`color: ${textColor};`" class="title d-flex justify-center align-center flex-column" cols="5">
          <h3>{{ name }}</h3>
          <div>{{ manufacturers }}</div>
        </VCol>
        <VCol cols="7" class="d-flex align-center">
          <swiper :effect="'fade'" :speed="2000" :modules="modules" class="mySwiper" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }" :loop="true">
            <swiper-slide v-for="(item, i) in  images" :key="i">
              <RouterLink :to="/proHome/ + _id" class="text-decoration-none">
                <VImg :src="item" cover></VImg>
              </RouterLink>
            </swiper-slide>
          </swiper>
          <div class="click d-flex align-center flex-column" :style="`color: ${textColor};`">
            <!-- ▲click!! -->
            <span>◄</span>
            <span>c</span>
            <span>l</span>
            <span>i</span>
            <span>c</span>
            <span>k</span>
            <span>!</span>
            <span>!</span>
          </div>
        </VCol>
      </VRow>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// gsap動畫

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
const modules = [Pagination, Autoplay, EffectFade]

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
