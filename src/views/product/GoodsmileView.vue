<template>
  <section class="Goodsmile">
    <div class="logo">
      <VImg src="@/assets/gsc_logo.png"></VImg>
    </div>
    <div class="text">
      <p>GOOD SMILE COMPANY<br>株式会社グッドスマイルカンパニー</p><br>
      <p>Established 2001/05</p><br>
      <p>Scale Figure<br>
        主要以聚氯乙烯（PVC）材質製造。模型一般為1/8比例，也有部份是1/7或其他比例。</p><br>
      <p>Nendoroid<br>
        是Good Smile
        Company於2006年起所推出的一系列SD版角色模型的商品總稱。<br>頭身比約為2.5～3頭身，以強調角色的可愛特性為重點。<br>其頭髮、表情、手腳為可動通用設計，玩家可以混合系列內不同套裝內的部件。
      </p>
      <p>figma<br>
        Max Factory企劃及開發、Good Smile Company發售的可動式人物模型系列。<br>比例大約是1/12。
      </p>
    </div>
    <div class="footerman4">
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
  user.loding = false
})
</script>
