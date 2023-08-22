<template>
  <div class="lidcover d-flex align-center justify-center flex-column">
    <VBtn @click="opendor" class="bt1" v-if="contro">歡<br><br>迎<br><br>加<br><br>入</VBtn>
    <VBtn @click="opendor" class="bt2" v-if="!contro">歡<br><br>迎<br><br>回<br><br>來</VBtn>
    <VBtn icon="mdi-home" class="bt1home" v-if="contro" to="/"></VBtn>
    <VBtn icon="mdi-home" class="bt2home" v-if="!contro" to="/"> </VBtn>
  </div>
  <section class="inthislogon">
    <VRow class="mainwindow d-flex align-center justify-center">
      <VCol cols="6">
        <div class="shadowa">
          <LoginView class="wida"></LoginView>
        </div>
      </VCol>
      <VCol cols="6">
        <div class="shadowb">
          <RegisterView class="widb"></RegisterView>
        </div>
      </VCol>
    </VRow>
  </section>
</template>
<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import LoginView from '@/components/LoginView.vue'
import RegisterView from '@/components/RegisterView.vue'
import { useUserStore } from '@/store/user'
const user = useUserStore()
const tween = ref(null)
const contro = ref('')
const rand = Math.floor(Math.random() * 2) + 1

const opendor = () => {
  if (tween.value) {
    if (contro.value) {
      tween.value.play()
      contro.value = !contro.value
    } else {
      tween.value.reversed(!tween.value.reversed())
      contro.value = !contro.value
    }
  }
}
onMounted(() => {
  tween.value = gsap.to('.lidcover', {
    x: '50vw',
    duration: 1,
    ease: 'linear',
    paused: true
  })
  if (tween.value) {
    if (rand === 1) {
      tween.value.play()
      contro.value = false
    } else {
      tween.value.reversed(!tween.value.reversed())
      contro.value = true
    }
  }
  user.loding = false
})
</script>
