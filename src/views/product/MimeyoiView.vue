<template>
  <section class="Mimeyoi">
    <div class="logo">
      <VImg src="@/assets/MIMEYOlg.jpg"></VImg>
    </div>
    <div class="text">
      <p>Company name MIMEYOI Inc.</p><br>
      <p>Established 2018/10</p><br>
      <p> CEO Yuichiro Kurokawa</p><br>
      <p>Address 1-4-8 Koya Ichikawa-shi Chiba</p>
    </div>
    <div class="footer">
      Copyright © PFSK. All figure in here.
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
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
