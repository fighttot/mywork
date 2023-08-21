<template>
  <section class="ManufacturersView">
    <section class="othertitle">
      <div class="bgbox">
        <div class="scene">
          <div class="imgbox" data-depth="-0.5">
            <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover>
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

      <VImg src="@/assets/shamain.png" class="shamiko">
        <div class="introduce">
        </div>
      </VImg>
    </section>

  </section>
  <section class="Manfooter">

  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import parallax from 'parallax-js'
import { useUserStore } from '@/store/user'
const user = useUserStore()
onMounted(async () => {
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
    const windowWidth = window.innerWidth
    if (windowWidth > 1300) {
      gsap.to('.shamiko', {
        x: -200,
        scale: 1.3,
        duration: 1,
        ease: 'circ'
      })
    } else {
      gsap.to('.shamiko', {
        scale: 1.3,
        duration: 1,
        ease: 'circ'
      })
    }

    gsap.to('.introduce', {
      opacity: 1,
      rotationX: 30,
      rotationY: 190,
      duration: 2,
      transformOrigin: '0% 50% -100',
      ease: 'back',
      stagger: 0.1
    })
  })

  shamiko.addEventListener('mouseout', (event) => {
    gsap.to('.shamiko', {
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'circ'
    })
    gsap.to('.introduce', {
      opacity: 0,
      duration: 2,
      ease: 'back',
      rotationY: 0
    })
  })
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
    limitY: 100
  })
  parallaxInstance.disable()
  bgbox.addEventListener('mouseover', (event) => {
    parallaxInstance.enable()
  })
  bgbox.addEventListener('mouseout', (event) => {
    parallaxInstance.disable()
  })
  await nextTick()
  user.loding = false
})

</script>
