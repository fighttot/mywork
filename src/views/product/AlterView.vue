<template>
  <section class="Alter">

    <div class="logo">
      <VImg src="@/assets/ALTERlogo.png"></VImg>
    </div>

    <div class="text">
      <p>有限会社 アルター</p><br>
      <p>Established 2005/03</p><br>
      <p> CEO 三上 隆</p><br>
      <p>玩具・フィギュアの企画、開発、製造、販売業務</p><br>
      <p>フィギュア<br>主に女性キャラクターを立体化したハイクオリティ<br>塗装済完成品シリーズ</p>
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
