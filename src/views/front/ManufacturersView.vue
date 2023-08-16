<template>
  <section class="ManufacturersView">
    <section class="othertitle">
      <div class="bgbox">
        <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover></VImg>
      </div>
      <div class="bgbox2"></div>
    </section>
    <VContainer>
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

      <VImg src="@/assets/shamico.png" cover class="shamiko"></VImg>

    </VContainer>

  </section>
  <section class="Manfooter">

  </section>
</template>

<script setup>

</script>
