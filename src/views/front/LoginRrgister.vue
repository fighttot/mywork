<template>
  <section class="inthislogon">
    <VRow class="mainwindow d-flex align-center justify-center">
      <VCol cols="6">
        <div class="shadow">
          <LoginView class="wid"></LoginView>
        </div>
      </VCol>
      <VCol cols="6">
        <div class="shadow">
          <RegisterView class="wid"></RegisterView>
        </div>
      </VCol>
    </VRow>
  </section>
</template>
<script setup>

import LoginView from '@/components/LoginView.vue'
import RegisterView from '@/components/RegisterView.vue'

</script>
