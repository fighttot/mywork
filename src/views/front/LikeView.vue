<template>
  <section class="likeview">
    <section class="othertitle">
      <div class="bgbox">
        <div class="scene">
          <div class="imgbox" data-depth="-0.5">
            <VImg class="mainimg" src="@/assets/Shoukaku.jpg" cover>
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
    <VContainer>
      <VRow>
        <VCol cols="12">
          <h1>收藏</h1>
        </VCol>
        <VCol cols="12" class="likeheight">
          <VTable>
            <thead>
              <tr>
                <th>圖片</th>
                <th>名稱</th>
                <th>單價</th>
                <th>上架狀態</th>
                <th>移除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" item in like" :key="item._id" :class="{ 'bg-red-lighten-5': !item.product.sell }">
                <td>
                  <VImg :src="item.product.images[0]" cover aspect-ratio="1"></VImg>
                </td>
                <td :style="`color: ${item.product.textColor};`">
                  <router-link :to="`/proHome/${item.product._id}`">
                    {{ item.product.name }}
                  </router-link>
                </td>
                <td>{{ item.product.price }}</td>
                <td>
                  <VIcon icon="mdi-check" v-if="item.product.sell"></VIcon>
                  <VIcon icon="mdi-close" v-if="!item.product.sell"></VIcon>
                </td>
                <td>
                  <VBtn color="primary" variant="text" icon="mdi-heart-broken" @click="updateLike(item.product._id)">
                  </VBtn><br>
                  <VBtn color="primary" variant="text" icon="mdi-cart" @click="alonAddCart(item.product._id)"
                    v-if="item.product.sell"> </VBtn>
                </td>
              </tr>
              <tr>
                <td colspan="6" class="text-center" v-if="like.length === 0">沒有收藏</td>
              </tr>
            </tbody>
          </VTable>
        </VCol>
        <VCol cols="12" class="text-center">
          <p>總收藏:{{ like.length }}</p>
        </VCol>
        <VCol cols="12" class="text-center">
          <VBtn class="btnlick" @click="submit" :disabled="!canCheckout">全部加入購物車</VBtn>
        </VCol>
      </VRow>
    </VContainer>
    <FooTer></FooTer>
  </section>
</template>
<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import FooTer from '@/components/FooTer.vue'
import parallax from 'parallax-js'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()
const like = ref([])
const updateLike = async (product) => {
  try {
    const { data } = await apiAuth.post('users/like',
      {
        product
      })
    const idx = like.value.findIndex(item => item.product._id === product)

    like.value.splice(idx, 1)

    user.like = data.result.length
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
}
//

const canCheckout = computed(() => {
  return like.value.length > 0 && !like.value.some(item => !item.product.sell)
})

const alonAddCart = async (product) => {
  try {
    const idx = like.value.findIndex(item => item.product._id === product)
    console.log(idx)

    const { data } = await apiAuth.post('/users/likeoversing', { product })
    like.value.splice(idx, 1)
    user.like = data.result.like
    user.cart = data.result.cart
  } catch (error) {
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
}

const submit = async (req, res) => {
  try {
    const { data } = await apiAuth.post('/users/likeover')

    user.like = 0
    user.cart = data.result
    router.push('/cart')
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
}

// (async () => {
//   try {
//     const { data } = await apiAuth.get('/users/like')
//     like.value.push(...data.result)
//   } catch (error) {
//     createSnackbar({
//       text: error.response.data.message,
//       showCloseButton: false,
//       snackbarProps: {
//         timeout: 2000,
//         color: 'red',
//         location: 'bottom',
//         rounded: 'pill',
//         variant: 'tonal'
//       }
//     })
//   }
// })()

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/like')
    like.value.push(...data.result)
    user.loding = false
  } catch (error) {
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
  await nextTick()
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
})

</script>
