<template>
  <div class="bgbox">
    <div class="show">
      文案等待決定
    </div>
    <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover></VImg>
  </div>
  <div class="bgbox2"></div>
  <section class="section01">
    <div class="text-center photo3title">
      <p>NEW PICK</p>
    </div>
    <div class="four">
      <VRow>
        <VCol cols="12" md="4" class="d-flex align-center photo3" v-for="card in cards" :key="card._id">
          <RouterLink :to="/proHome/ + card._id" class=toroup>
            <div class="text">
              <VImg class="textimg" :src="card.images[0]" cover></VImg>
            </div>
          </RouterLink>
        </VCol>
      </VRow>

    </div>
  </section>

  <section class="section02">
    <v-parallax src="@/assets/littorio004.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </div>
    </v-parallax>
  </section>
  <section class="section03">
    <div class="eightwidth">
      <swiper :effect="'cube'" :grabCursor="true" :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }" :speed="1000" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="thcube in thcubes" :key="thcube._id">
          <RouterLink :to="/proHome/ + thcube._id">
            <img style="object-fit: cover; height: 100%; width: 100%;" :src="thcube.images[0]" />
          </RouterLink>
        </swiper-slide>
      </swiper>

      <VImg src="@/assets/aqa.png" class="photo"></VImg>
      <!-- <img src="@/assets/aua.jpg"> -->
      <div class="d-flex flex-column  justify-center align-center cubetext">
        <span class="cubetextanimate">主</span>
        <span class="cubetextanimate">打</span>
        <span class="cubetextanimate">商</span>
        <span class="cubetextanimate">品</span>
        <span class="cubetextanimate">喲</span>
        <span class="cubetextanimate">!</span>
      </div>
    </div>
  </section>

  <section class="homefooter">

  </section>
</template>
<script setup>
import { api } from '@/plugins/axios'
import { ref, computed, onMounted, nextTick } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

// gsap動畫

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules'
const modules = [EffectCube, Pagination, Autoplay]
const createSnackbar = useSnackbar()

const products = ref([])

const cards = computed(() => {
  return products.value.slice(-3)
})
const thcubes = computed(() => {
  return products.value.slice(products.value.length - 7, products.value.length - 3)
})

gsap.registerPlugin(ScrollTrigger)
onMounted(async () => {
  try {
    const data = await api.get('/products')
    products.value.push(...data.data.result)
  } catch (error) {
    console.log(error)
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
  await nextTick()
  gsap.from('.photo3', {
    scrollTrigger: {
      trigger: '.four',
      start: 'top 60%',
      end: 'bottom center'
    },
    stagger: {
      each: 0.5,
      from: 'start',
      ease: 'back.in(5)'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'back'
  })
  gsap.from('.photo3title', {
    scrollTrigger: {
      trigger: '.four',
      start: 'top 70%',
      end: 'bottom center'
    },
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: 'back.in(5)'
  })

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  })

  tl
    .from('.cubetextanimate', {
      opacity: 1,
      duration: 1,
      yoyo: true,
      ease: 'none',
      stagger: 1
    })
    .to('.cubetextanimate', {
      opacity: 0,
      duration: 1,
      yoyo: true,
      ease: 'none',
      stagger: 1
    }, 1)

  // gsap.to('.cubetextanimate', {
  //   repeat: -1,
  //   // yoyo: true,
  //   opacity: 0,
  //   duration: 0.5,
  //   ease: 'back.in(5)',
  //   // stagger: 1
  //   stagger: {
  //     each: 1,
  //     from: 'end',
  //     ease: 'none',
  //     // repeat: -1,
  //     yoyo: true
  //   }
  // })
})
</script>
