<template>
  <section class="Daiki">
    <div class="logo">
      <VImg src="@/assets/DAIKI.jpg"></VImg>
    </div>
    <div class="text">
      <p>ダイキ工業</p><br>
      <p>Established 1996/04</p><br>
      <p> CEO Yuichiro Kurokawa</p><br>
      <p>主要取引先 <br>
        宮沢模型(株)、(株)ハピネット・ホビーマーケティング</p><br>
      <p>キャラクターフィギュアの企画、製造、販売</p><br>
      <p>キャラクターグッズの企画、製造、販売</p><br>
    </div>
    <div class="footer">
      Copyright © PFSK. All figure in here.
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { useUserStore } from '@/store/user'
const user = useUserStore()

onMounted(() => {
  user.loding = false
  gsap.from('.text', {
    x: 100,
    rotationY: 90,
    autoAlpha: 0,
    duration: 2,
    ease: 'circ',
    delay: 1
  })

  gsap.from('.logo', {
    y: -60,
    rotationX: 90,
    autoAlpha: 0,
    ease: 'back',
    duration: 2
  })
})
</script>
