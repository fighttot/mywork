<template>
  <section class="homeview">
    <div class="bgbox">
      <div class="show">
        夢，開始的地方，也是結束的地方，<br>
        是否一直祈禱著，夢有實現的一天。<br>
        秋天過去，春天來到，夏天結束，冬天又再開始，<br>
        你期待著的夢，永遠的夢。
        <br>
        <br>
        <br>
        歡迎您的到來，<br>
        進入夢幻的世界，<br>
        與可愛的美少女模型一起冒險!
      </div>
      <div class="scene">
        <div class="imgbox" data-depth="-0.5">
          <VImg src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </VImg>
        </div>
      </div>
    </div>
    <div class="bgbox2"></div>
    <section class="section01">
      <div class="text-center photo3title">
        <p>NEW products</p>
      </div>
      <div class="four">
        <VRow>
          <VCol cols="12" md="4" class="d-flex align-center photo3" v-for="card in cards" :key="card._id">
            <RouterLink :to="/proHome/ + card._id" class=toroup>
              <div class="text">
                <VImg class="textimg" :src="card.images[0]" cover>
                  <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                      <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                    </div>
                  </template>
                </VImg>
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
            30% OFF
          </h1>
          <h4 class="subheading">
            暑假特別優惠! 加入會員即可領取折價優惠券
          </h4>
          <p>加入LINE 接收最新商品以及熱門推薦喔!</p>
          <p>ID:@473kooid</p>
        </div>
      </v-parallax>
    </section>
    <div class="hottitle">
      <h1>
        <pre>現  正  熱  銷</pre>
      </h1>
    </div>
    <section class="section03">
      <VImg src="@/assets/watame-dance.gif" class="imggif one" cover></VImg>
      <VImg src="@/assets/takane-lui-hololive.gif" class="imggif two" cover></VImg>
      <VImg src="@/assets/hololive.gif" class="imggif three"></VImg>
      <div class="d-flex flex-column  justify-center align-center cubetexttwo">
        <span class="cubetextanimate">►</span>
        <span class="cubetextanimate1">可</span>
        <span class="cubetextanimate2">旋</span>
        <span class="cubetextanimate3">轉</span>
      </div>
      <div class="eightwidth">
        <swiper :effect="'cube'" :grabCursor="true" :cubeEffect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }" :speed="1000" :pagination="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="thcube in thcubes" :key="thcube._id">
            <RouterLink :to="/proHome/ + thcube._id">
              <img style="object-fit: cover; height: 100%; width: 100%;" :src="thcube.images[0]" @load="onImgLoad" />
            </RouterLink>
          </swiper-slide>
        </swiper>

        <VImg src="@/assets/aqa.png" class="photo" @load="onImgLoad"></VImg>
        <!-- <img src="@/assets/aua.jpg"> -->
        <div class="d-flex flex-column  justify-center align-center cubetextone">
          <span class="cubetextanimate">主</span>
          <span class="cubetextanimate1">打</span>
          <span class="cubetextanimate2">商</span>
          <span class="cubetextanimate3">品</span>
          <span class="cubetextanimate4">喲</span>
          <span class="cubetextanimate5">!</span>
        </div>
      </div>
    </section>

    <section class="homefooter">
      <VRow>
        <VCol>
          <h4> 聯絡我們:</h4>
          <p>信箱: PFSKContactus@gmail.com</p>
          <p>地址: 24302新北市泰山區貴子里致遠新村55之1號</p>
        </VCol>
        <VCol>
          <h4>營業時間:</h4>
          <p>每周二到每週日</p>
          <p>上午 10:00 ~ 晚上 22:00</p>
        </VCol>
        <VCol>
          <p>加入LINE 接收最新商品以及熱門推薦喔!</p>
          <p>ID:@473kooid</p>
          此為泰山職訓專題製作網站，並無任何實際商業用途。<br>
          <p>如需反應任何狀況，可於line聯絡製作者</p>
        </VCol>
      </VRow>
    </section>
  </section>
</template>
<script setup>
import { api } from '@/plugins/axios'
import { ref, computed, onMounted, nextTick } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import parallax from 'parallax-js'

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

import { useUserStore } from '@/store/user'
const user = useUserStore()
const modules = [EffectCube, Pagination, Autoplay]
const createSnackbar = useSnackbar()

const products = ref([])

const cards = computed(() => {
  return products.value.slice(-3)
})
const thcubes = computed(() => {
  return products.value.slice(products.value.length - 7, products.value.length - 3)
})
const imgLoaded = ref(0)
const onImgLoad = () => {
  imgLoaded.value++
  if (imgLoaded.value >= thcubes.value.length + 1) {
    console.log(imgLoaded.value)
    hologif()
  }
}
const hologif = () => {
  const windowWidth = window.innerWidth
  if (windowWidth > 1400) {
    gsap.from('.imggif.three', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'bottom top',
        end: 'bottom center'
      },
      x: 100,
      opacity: 0,
      duration: 3
    })
    gsap.from('.imggif.one', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'bottom top',
        end: 'bottom center'
      },
      x: -100,
      opacity: 0,
      duration: 3
    })
  } else if (windowWidth > 700) {
    gsap.from('.imggif.three', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'top 35%',
        end: 'bottom center'
      },
      x: 100,
      opacity: 0,
      duration: 3
    })
    gsap.from('.imggif.one', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'top 35%',
        end: 'bottom center'
      },
      x: -100,
      opacity: 0,
      duration: 3
    })
  } else {
    gsap.from('.imggif.three', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'top 60%',
        end: 'bottom center'
      },
      x: 100,
      opacity: 0,
      duration: 2
    })
    gsap.from('.imggif.one', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'top 60%',
        end: 'bottom center'
      },
      x: -100,
      opacity: 0,
      duration: 2
    })
  }
}
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
        location: 'bottom',
        rounded: 'pill',
        variant: 'tonal'
      }
    })
  }
  user.loding = false
  await nextTick()
  const windowWidth = window.innerWidth
  if (windowWidth > 1200) {
    gsap.from('.imggif.two', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'top top',
        end: 'bottom center'
      },
      y: 100,
      opacity: 0,
      duration: 2
    })
  } else {
    gsap.from('.imggif.two', {
      scrollTrigger: {
        trigger: '.section03',
        start: 'top 50%',
        end: 'bottom center'
      },
      y: 100,
      opacity: 0,
      duration: 2
    })
  }

  gsap.from('.photo3', {
    scrollTrigger: {
      trigger: '.four',
      start: 'top 80%',
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
      start: 'top 90%',
      end: 'bottom center'
    },
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: 'back.in(5)'
  })
  gsap.from('.hottitle', {
    scrollTrigger: {
      trigger: '.hottitle',
      start: 'top 40%',
      end: 'bottom center'
    },
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: 'back.in(5)'
  })

  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: 'power1.inOut'
    },
    // timeline 屬性設定(指整體時間軸)
    repeat: -1
  })

  tl
    .to('.cubetextanimate', { opacity: 0 })
    .to('.cubetextanimate', { opacity: 1 })
    .to('.cubetextanimate1', { opacity: 0 })
    .to('.cubetextanimate1', { opacity: 1 })
    .to('.cubetextanimate2', { opacity: 0 })
    .to('.cubetextanimate2', { opacity: 1 })
    .to('.cubetextanimate3', { opacity: 0 })
    .to('.cubetextanimate3', { opacity: 1 })
    .to('.cubetextanimate4', { opacity: 0 })
    .to('.cubetextanimate4', { opacity: 1 })
    .to('.cubetextanimate5', { opacity: 0 })
    .to('.cubetextanimate5', { opacity: 1 })

  // 視差
  const scene = document.querySelector('.scene')
  const bgbox = document.querySelector('.bgbox')
  const parallaxInstance = new parallax(scene, {
    // 位移量，預設 10
    scalarX: 10,
    scalarY: 10,
    // 摩擦力，預設 0.1，0 ~ 1
    frictionX: 0.1,
    frictionY: 0.1,
    // 限制移動量
    limitX: 100,
    limitY: 110
  })
  parallaxInstance.disable()
  bgbox.addEventListener('mouseover', (event) => {
    parallaxInstance.enable()
  })
  bgbox.addEventListener('mouseout', (event) => {
    parallaxInstance.disable()
  })
})
</script>
