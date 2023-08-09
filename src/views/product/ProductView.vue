<template>
  <section id="proviewpage">
    <VContainer>
      <VRow>

        <VCol cols="12">
          <swiper :pagination="{ type: 'fraction', }" :navigation="true" :modules="modules" :loop="true" :speed="3000"
            :autoplay="{ delay: 5000, disableOnInteraction: false, }" class="mySwiper">
            <swiper-slide v-for="(item, i) in product.images" :key="i">
              <VImg :src="item" cover style="width: 100%; height: 100%;"></VImg>
            </swiper-slide>
          </swiper>
        </VCol>

        <VCol cols="12">
          <VRow>
            <VCol cols="6">
              <VTable :style="`color:${product.textColor}`" class="mainveiw">
                <thead>
                  <tr>
                    <th :style="`background-color:${product.color};color: ${product.textColor};`">作品名</th>
                    <td :style="`background-color:${product.color};`">{{ product.name }}</td>
                  </tr>
                  <tr>
                    <th :style="`background-color:${product.color};color: ${product.textColor};`">分類</th>
                    <td :style="`background-color:${product.color};`">{{ product.category }}</td>
                  </tr>
                  <tr>
                    <th :style="`background-color:${product.color};color: ${product.textColor};`">製造商</th>
                    <td :style="`background-color:${product.color};`">{{ product.manufacturers }}</td>
                  </tr>
                  <tr>
                    <th :style="`background-color:${product.color};color: ${product.textColor};`">價格</th>
                    <td :style="`background-color:${product.color};`">{{ product.price }}</td>
                  </tr>
                </thead>
              </VTable>
            </VCol>
            <VCol :style="`color: ${product.textColor}; background-color:${product.color};`" class="txt">
              <VRow class="d-flex align-center flex-column justify-center" style="text-align: center; height: 100%;">
                <VCol>
                  <p>{{ product.description }}</p>
                </VCol>
                <VCol>
                  <VForm :disabled="isSubmitting" @submit.prevent="submitCart">
                    <VTextField v-model.number="quantity.value.value" type="number" label="數量" min="0"
                      :error-messages="quantity.errorMessage.value"></VTextField>
                    <VBtn :style="`background-color:${product.color};color: ${product.textColor};`" type="submit">加入購物車
                    </VBtn>
                    <VBtn
                      :style="`background-color:${!colorLike ? product.color : product.textColor}; color:${!colorLike ? product.textColor : product.color}`"
                      @click="addLike">{{ !colorLike ? '加入收藏' : '已加收藏'
                      }}</VBtn>
                    <VBtn :style="`background-color:${product.color};color: ${product.textColor};`"
                      @click="drawer = !drawer"> 查看評論 </VBtn>
                  </VForm>
                </VCol>
              </VRow>
            </VCol>
          </VRow>

        </VCol>
      </VRow>
    </VContainer>
    <VOverlay :model-value="!product.sell" persistent class="align-center justify-center text-center">
      <h1 class="text-red"> 已下架 </h1>
      <VBtn to="/"> 回上頁</VBtn>
    </VOverlay>
    <VNavigationDrawer v-model="drawer" location="right" temporary width="700"
      :style="`background-color:${product.color};`">
      <div>
        <VTable :style="`color:${product.textColor}; background-color:${product.color};`">
          <thead>
            <tr>
              <th :style="`color:${product.textColor};`">使用者</th>
              <th :style="`color:${product.textColor};`">評論</th>
              <th :style="`color:${product.textColor};`">日期</th>
              <th :style="`color:${product.textColor};`" v-if="user.role === 1">審核</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="user.role === 0">
              <tr v-for="(item, i) in product.peopleSay" :key="i">
                <template v-if="!item.review">
                  <td>{{ item.user.name }}</td>
                  <td>{{ item.text }}</td>
                  <td>{{ new Date(item.date).toLocaleString() }}</td>
                </template>
              </tr>
            </template>
            <template v-if="user.role === 1">
              <tr v-for="(item, i) in product.peopleSay" :key="i">
                <td>

                  <VImg style="display: inline-block;  vertical-align: middle;"
                    :src="`https://source.boringavatars.com/beam/120/${item.user.account}?colors=0db2ac,f5dd7e,fc8d4d,fc694d,faba32`"
                    width="50px">
                  </VImg>
                  {{ item.user.name }}
                </td>
                <td>{{ item.text }}</td>
                <td>{{ new Date(item.date).toLocaleString() }}</td>
                <td>
                  <VBtn @click="review(i, item.user._id)"
                    :style="`background-color:${!item.review ? product.color : product.textColor}; color:${!item.review ? product.textColor : product.color}`">
                    {{ item.review ? '未通過' : '已通過' }}</VBtn>
                </td>

              </tr>
            </template>

          </tbody>
        </VTable>
      </div>
      <VBtn @click="dialog = true"
        :style="`background-color:${!repeat ? product.color : product.textColor}; color:${!repeat ? product.textColor : product.color}`"
        class="otherbtn">
        {{ repeat ? '編輯評論' : '新增評論' }}</VBtn>
    </VNavigationDrawer>

    <VDialog v-model="dialog" width="auto">
      <VForm :disabled="isSAY" @submit.prevent="submitText" style="width: 400px;">
        <VCard :style="`background-color:${product.color};color: ${product.textColor};`">
          <VCardTitle>
            <VImg :src="user.avatar" style="width: 20%; display: inline-block;"></VImg>
            <span> {{ user.name }}</span>
          </VCardTitle>
          <VCardText>
            <VTextField v-model="text.value.value" label="留言" counter maxlength="150"
              :error-messages="text.errorMessage.value"></VTextField>
          </VCardText>
          <VBtn type="submit" class="otherbtn" :style="`background-color:${product.color};color: ${product.textColor};`">
            確認</VBtn>
        </VCard>

      </VForm>
    </VDialog>

  </section>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
const modules = [Pagination, Autoplay, Navigation]

const router = useRoute()
const createSnackbar = useSnackbar()
const user = useUserStore()
const dialog = ref(false)
const repeat = ref(false)
const drawer = ref(false)

watch(drawer, () => {
  if (drawer.value) {
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.height = '100vh'
  } else {
    document.documentElement.style.overflow = 'auto'
    document.documentElement.style.height = ''
  }
})
const form = reactive({
  text: ''
})

const review = async (i, id) => {
  console.log(product.value._id)
  try {
    await apiAuth.patch(`products/${product.value._id}/review`, {
      id
    })
    product.value.peopleSay[i].review = !product.value.peopleSay[i].review
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

const schemaSay = yup.object({
  text: yup.string().required('缺少評論').min(10, '最少10個字')
    .max(150, '最多150')
})
const { isSubmitting: isSAY, handleSubmit: handSAY, handleReset } = useForm({
  validationSchema: schemaSay
})
const text = useField('text')

const submitText = handSAY(async (values) => {
  try {
    const idx = product.value.peopleSay.findIndex(item => item.user.account === user.account)
    if (idx > -1) {
      const { data } = await apiAuth.patch(`products/${product.value._id}/say`,
        {
          text: values.text
        })
      product.value.peopleSay = data.result
    } else {
      const { data } = await apiAuth.post(`products/${product.value._id}/say`,
        {
          text: values.text
        })
      product.value.peopleSay = data.result
      repeat.value = true
    }
    handleReset()
    dialog.value = false
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

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '最少1')
  // ,text: yup.string()
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 0
    // ,text: ''
  }
})
const quantity = useField('quantity')
// const text = useField('text')
const submitCart = handleSubmit(async (values) => {
  try {
    const { data } = await apiAuth.post('users/cart',
      {
        product: product.value._id,
        quantity: values.quantity
      })
    user.cart = data.result
    quantity.value.value = 0
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
const product = ref({
  _id: '',
  name: '',
  price: '',
  images: [],
  description: '',
  category: '',
  manufacturers: '',
  sell: true,
  color: '',
  textColor: '',
  totle: '',
  peopleSay: []
})
const colorLike = ref(false)
const addLike = async () => {
  try {
    const { data } = await apiAuth.post('users/like',
      {
        product: product.value._id
      })
    user.like = data.result.length
    product.value.totle = data.result.totle
    const lico = await apiAuth.post('/products/red',
      {
        app: product.value._id
      })
    if (lico.data.result) { colorLike.value = true } else {
      colorLike.value = false
    }
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
}

(async () => {
  try {
    const { data } = await api.get('/products/' + router.params.id)
    // 一個等於怎麼寫?
    product.value = data.result
    // product.value.peopleSay = Array.from({ length: 100 }, (people) => {
    //   return product.value.peopleSay[0]
    // })
    // product.value._id = data.result._id
    // product.value.name = data.result.name
    // product.value.price = data.result.price
    // product.value.images = data.result.images
    // product.value.description = data.result.description
    // product.value.category = data.result.category
    // product.value.manufacturers = data.result.manufacturers
    // product.value.sell = data.result.sell
    // product.value.color = data.result.color
    // product.value.peopleSay = data.result.peopleSay
    // const say = await api.get('/products/' + router.params.id + '/say')
    // product.value.peopleSay = say.data.result
    const idx = product.value.peopleSay.findIndex(item => item.user.account === user.account)
    console.log(idx)
    if (idx > -1) { repeat.value = true }
    const lico = await apiAuth.post('/products/red',
      {
        app: product.value._id
      })
    if (lico.data.result) { colorLike.value = true } else {
      colorLike.value = false
    }
    document.title = '購物網 |' + product.value.name
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
</script>
