<template>
  <section class="ManufacturersView">
    <section class="othertitle">
      <div class="bgbox">
        <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover></VImg>
      </div>
      <div class="bgbox2"></div>
    </section>
    <section class="bocheigh">
      <div class="Mautext Mbox1">
        <div>
          <RouterLink :to="'/proHome/mimeyoi'"> > more</RouterLink>
        </div>
      </div>

      <div class="Mautext Mbox2">
        <div>
          <RouterLink :to="'/proHome/alter'"> > more</RouterLink>
        </div>
      </div>
      <div class="Mautext Mbox3">
        <div>
          <RouterLink :to="'/proHome/daiki'"> > more</RouterLink>
        </div>
      </div>
      <div class="Mautext Mbox4">

        <div>
          <RouterLink :to="'/proHome/goodsmile'"> > more</RouterLink>
        </div>
      </div>

      <VImg src="@/assets/shamain.png" class="shamiko"></VImg>
    </section>

  </section>
  <section class="Manfooter">

  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
gsap.set('.bocheigh', {
  perspective: 300
})
onMounted(() => {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut(5)'
    },
    repeat: -1

  })

  tl
    .to('.shamiko', { y: -100 })
    .to('.shamiko', { y: 0 })

  const shamiko = document.querySelector('.shamiko')

  shamiko.addEventListener('mouseover', (event) => {
    gsap.to('.shamiko', {
      x: -200,
      scale: 1.3,
      rotationY: 180,
      duration: 1,
      ease: 'circ'
    })
  })

  shamiko.addEventListener('mouseout', (event) => {
    gsap.to('.shamiko', {
      x: 0,
      scale: 1,
      rotationY: 0,
      duration: 1,
      ease: 'circ'
    })
  })
})

</script>
