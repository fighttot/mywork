<template>
  <section class="cardview ">
    <section class="othertitle">
      <div class="bgbox">
        <div class="scene">
          <div class="imgbox" data-depth="-0.5">
            <VImg class="mainimg" src="@/assets/Zuikaku3.jpg" cover>
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
          <h1>購物車</h1>
        </VCol>
        <VCol cols="12" class="cartheight">
          <VTable>
            <thead>
              <tr>
                <th>圖片</th>
                <th>名稱</th>
                <th>單價</th>
                <th>數量</th>
                <th>小記</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" item in cart" :key="item._id" :class="{ 'bg-red-lighten-5': !item.product.sell }">
                <td>
                  <VImg :src="item.product.images[0]" cover aspect-ratio="1"></VImg>
                </td>
                <td>
                  <router-link :to="`/proHome/${item.product._id}`">{{ item.product.name }}</router-link>
                </td>
                <td>{{ item.product.price }}</td>
                <td>
                  <VBtn color="primary" variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)"></VBtn>
                  {{ item.quantity }}
                  <VBtn color="primary" variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)"></VBtn>
                </td>
                <td>
                  {{ item.quantity * item.product.price }}
                </td>
                <td>
                  <VBtn color="red" variant="text" icon="mdi-delete"
                    @click="updateCart(item.product._id, item.quantity * -1)">
                  </VBtn>
                </td>
              </tr>
              <tr>
                <td colspan="6" class="text-center" v-if="cart.length === 0">沒有商品</td>
              </tr>
            </tbody>
          </VTable>
        </VCol>
        <VCol cols="12" class="text-center">
          <p>總金額:{{ total }}</p>
          <VBtn @click="dialog = true" color="secondary">結帳</VBtn>
        </VCol>
      </VRow>

      <VDialog v-model="dialog" width="400px" persistent>
        <v-card class="text-center">
          <VCardTitle>結帳資訊</VCardTitle>
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <VSelect :items="seventhomeItems" label="便利商店貨到付款" v-model="seventhome.value.value"
              :error-messages="seventhome.errorMessage.value" v-if="!paynext"></VSelect>
            <VSelect label="付款方式?" v-model="payway.value.value" :error-messages="payway.errorMessage.value" v-if="paynext"
              :items="paynextItems">
            </VSelect>
            <VTextField label="哪一家店?" v-model="paypoint.value.value" :error-messages="paypoint.errorMessage.value"
              v-if="!paynext">
            </VTextField>
            <VBtn @click="paynext = true" v-if="!paynext">上一步</VBtn>
            <VBtn @click="payupnext" v-if="paynext">下一步</VBtn>
            <VBtn color="green" @click="submit" :disabled="!canCheckout">結帳</VBtn>
            <VBtn @click="dialog = false, handleReset()">取消</VBtn>
          </VForm>
        </v-card>
      </VDialog>
    </VContainer>

  </section>
  <FooTer></FooTer>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import FooTer from '@/components/FooTer.vue'
import parallax from 'parallax-js'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()
const cart = ref([])
const dialog = ref(false)
const paynext = ref(true)
const seventhomeItems = ['萊爾富', '7-11', '全家']
const paynextItems = ['貨到付款現金', '貨到付款刷卡']
const updateCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.post('users/cart',
      {
        product,
        quantity
      })
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
    user.cart = data.result
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
const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const total = computed(() => {
  return cart.value.reduce((total, current) => total + (current.quantity * current.product.price), 0)
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
})()

const schema = yup.object({
  seventhome: yup
    .string()
    .required('缺少製造商')
    .test('地址錯誤', (value) => seventhomeItems.includes(value)),
  paypoint: yup
    .string()
    .required('缺少店址'),
  payway: yup
    .string()
    .required('缺少付款方式')
})

const { handleSubmit, isSubmitting, handleReset } = useForm({
  validationSchema: schema
})

const seventhome = useField('seventhome')
const paypoint = useField('paypoint')
const payway = useField('payway')

const payupnext = () => {
  if (payway.value.value) {
    paynext.value = false
  } else {
    createSnackbar({
      text: '請填寫付款方式',
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

const submit = handleSubmit(async (values) => {
  try {
    await apiAuth.post('/orders', {
      seventhome: values.seventhome + values.paypoint,
      paywat: values.payway
    })
    user.cart = 0
    router.push('/orders')
    dialog.value = false
    paynext.value = true
    handleReset()
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
})

onMounted(() => {
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
