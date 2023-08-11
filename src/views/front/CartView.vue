<template>
  <section class="othertitle">
    <div class="bgbox">
      <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover></VImg>
    </div>
    <div class="bgbox2"></div>
  </section>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1>購物車</h1>
      </VCol>
      <VCol cols="12">
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
              <td :style="`color: ${item.product.textColor};`">{{ item.product.name }}</td>
              <td :style="`background-color: ${item.product.color};`">{{ item.product.price }}</td>
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
        <VBtn color="green" @click="dialog = true">結帳</VBtn>
      </VCol>
    </VRow>

    <VDialog v-model="dialog" width="400px" persistent>
      <v-card class="text-center">
        <VCardTitle>結帳資訊</VCardTitle>
        <VForm :disabled="isSubmitting" @submit.prevent="submit">
          <VSelect :items="seventhomeItems" label="便利商店貨到付款" v-model="seventhome.value.value"
            :error-messages="seventhome.errorMessage.value"></VSelect>
          <VTextField label="哪一家店?" v-model="paypoint.value.value" :error-messages="paypoint.errorMessage.value">
          </VTextField>
          <VBtn color="green" @click="submit" :disabled="!canCheckout">結帳</VBtn>
          <VBtn @click="dialog = false">取消</VBtn>
        </VForm>
      </v-card>
    </VDialog>
  </VContainer>
</template>
<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()
const cart = ref([])
const dialog = ref(false)
const seventhomeItems = ['萊爾富', '7-11', '全家']
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
        location: 'bottom'
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
        location: 'bottom'
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
    .required('缺少店址')
})

const { handleSubmit, isSubmitting, handleReset } = useForm({
  validationSchema: schema
})

const seventhome = useField('seventhome')
const paypoint = useField('paypoint')

const submit = handleSubmit(async (values) => {
  try {
    await apiAuth.post('/orders', {
      seventhome: values.seventhome + values.paypoint
    })
    user.cart = 0
    router.push('/orders')
    dialog.value = false
    handleReset()
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
</script>
