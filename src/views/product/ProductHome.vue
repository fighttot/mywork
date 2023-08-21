<template>
  <VContainer>
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="productsearch" size="x-small">
          搜<br>
          尋<br>
          商<br>
          品
        </v-btn>
      </template>
      <v-list width="500" class="productsearchvlist">
        <v-list-item>
          <VTextField label="搜尋" append-icon="mdi-magnify" v-model="tableSearch" @click:append="tableApplySearch"
            @keydown.enter="tableApplySearch"></VTextField>
        </v-list-item>
      </v-list>
    </v-menu>
    <VRow>
      <VCol cols="12" v-for="product in products" :key="product._id" style="margin: 50px 0px;">

        <ProductCard v-bind="product">

        </ProductCard>

      </VCol>
    </VRow>
  </VContainer>
  <div style="text-align: center; margin: 10px 0 20px 0; color:#B8860B; text-shadow: 0px 0px 10px #000000;">
    Copyright © PFSK. All figure in here.
  </div>
</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref, onMounted, nextTick } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
import { useUserStore } from '@/store/user'
// gsap動畫

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const user = useUserStore()
// 搜尋
const tableSearch = ref('')
const tableApplySearch = async () => {
  try {
    const { data } = await api.get('./products/getone', {
      params: {
        search: tableSearch.value
      }
    })
    products.value = data.result
    await nextTick()
    applyAnimations()
    window.scrollTo(0, 0)
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
const createSnackbar = useSnackbar()
const products = ref([])

// gsap
const applyAnimations = () => {
  // 動畫控制
  const boxs = document.querySelectorAll('.box1')
  boxs.forEach((box) => {
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        start: 'top 75%',
        end: 'bottom center'
        // markers: true
      },
      backgroundColor: 'rgb(255,255,255)',
      boxShadow: '10px 10px 20px rgba(0, 0, 0, 0)',
      duration: 2,
      ease: 'none'
    })
  })
  const titles = document.querySelectorAll('.title')
  titles.forEach((title) => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 4
    })

    tl
      .from(title, {
        opacity: 1,
        duration: 1,
        yoyo: true,
        ease: 'none'
      })
      .to(title, {
        opacity: 1,
        duration: 1,
        yoyo: true,
        ease: 'none'
      })
  })
  const clicks = document.querySelectorAll('.click')
  clicks.forEach((click) => {
    gsap.from(click, {
      scrollTrigger: {
        trigger: click,
        start: 'top 90%',
        end: 'bottom center'
        // markers: true
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'back'
    })
  })
}

gsap.registerPlugin(ScrollTrigger)
onMounted(async () => {
  try {
    const { data } = await api.get('/products/')
    products.value.push(...data.result)
    user.loding = false
    // 下次渲染
    gsap.to('.productsearch', {
      y: -100,
      opacity: 1,
      duration: 1
    })
    await nextTick()
    applyAnimations()
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
})
</script>
