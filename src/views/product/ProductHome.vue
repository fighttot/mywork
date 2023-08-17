<template>
  <VContainer>
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

// gsap動畫

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const createSnackbar = useSnackbar()
const products = ref([])

// gsap

gsap.registerPlugin(ScrollTrigger)
onMounted(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
    // 下次渲染
    await nextTick()
    // 動畫控制
    const boxs = document.querySelectorAll('.box1')
    boxs.forEach((box) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: 'top 70%',
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
