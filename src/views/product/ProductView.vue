<template>
  <section id="proviewpage">
    <VContainer>
      <VRow>
        <VCol cols="12">

          <swiper :pagination="{ type: 'fraction', }" :navigation="true" :modules="modules" :loop="true" :speed="3000"
            :autoplay="{ delay: 5000, disableOnInteraction: false, }" class="mySwiper">
            <section class="trantext" :style="`border-left: 1px solid ${product.textColor};`">
              <span :style="`color:${product.textColor}`">{{ product.name }}</span><br>
              <span :style="`color:${product.textColor}`">{{ product.category }}</span><br><br>
              <span :style="`color:${product.textColor}`">${{ product.price }}</span><br>
              <span :style="`color:${product.textColor}`">{{ product.manufacturers }}</span>
            </section>
            <swiper-slide v-for="(item, i) in product.images" :key="i">
              <VImg :src="item" cover style="width: 100%; height: 100%;"></VImg>
            </swiper-slide>
          </swiper>
        </VCol>

        <VCol cols="12">
          <VRow>
            <VCol cols="6" class="animationtable">
              <VTable :style="`color:${product.color}`" class="mainveiw">
                <thead>
                  <tr>
                    <th :style="`color: ${product.color};`">作品名</th>
                    <td>{{ product.name }}</td>
                  </tr>
                  <tr>
                    <th :style="`color: ${product.color};`">分類</th>
                    <td>{{ product.category }}</td>
                  </tr>
                  <tr>
                    <th :style="`color: ${product.color};`">製造商</th>
                    <td>{{ product.manufacturers }}</td>
                  </tr>
                  <tr>
                    <th :style="`color: ${product.color};`">價格</th>
                    <td>{{ product.price }}</td>
                  </tr>
                </thead>
              </VTable>
            </VCol>
            <VCol :style="`color: ${product.color};`" class="txt">
              <VRow class="d-flex align-center flex-column justify-center animationfield"
                style="text-align: center; height: 100%;">
                <VCol>
                  <p>{{ product.description }}</p>
                </VCol>
                <VCol>
                  <VForm :disabled="isSubmitting" @submit.prevent="submitCart"
                    :style="`border-bottom: 15px solid ${product.color};`" class="underline">
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
                <template v-if="item.review">
                  <td>{{ item.user.name }}</td>
                  <td>管理員審核中</td>
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
          <VBtn type="submit" class="otherbtn" :style="`background-color:${product.textColor};color: ${product.color};`">
            確認</VBtn>
        </VCard>

      </VForm>
    </VDialog>
  </section>
  <VContainer>
    <section class="gastlike">
      <div class="link" :style="`border-bottom: 5px solid ${product.color};`">
        <span :style="`background-color:${product.color};color: ${product.textColor};`"> 關聯商品</span>
      </div>
      <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :speed="2000" :pagination="true" :modules="modules" class="mySwiper" :initialSlide="2">
        <swiper-slide v-for="pog in toga" :key="pog._id">
          <RouterLink :to="/proHome/ + pog._id">
            <VImg :src="pog.images[0]" cover></VImg>
          </RouterLink>
        </swiper-slide>
      </swiper>
    </section>
  </VContainer>
  <div style="text-align: center; margin: 10px 0 20px 0; color:#F2E1D9; text-shadow: 0px 0px 10px #000000;">
    Copyright © PFSK. All figure in here.
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'
// gsap
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules'

const modules = [EffectCoverflow, Pagination, Autoplay, Navigation]

const router = useRoute()
const createSnackbar = useSnackbar()
const user = useUserStore()
const dialog = ref(false)
const repeat = ref(false)
const drawer = ref(false)
const toga = ref([])

watch(drawer, () => {
  if (drawer.value) {
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.height = '100vh'
  } else {
    document.documentElement.style.overflow = 'auto'
    document.documentElement.style.height = ''
  }
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
};

(async () => {
  try {
    const { data } = await api.get('/products/' + router.params.id)
    product.value = data.result
    const idx = product.value.peopleSay.findIndex(item => item.user.account === user.account)
    if (idx > -1) { repeat.value = true }
    if (user.isLogin) {
      const lico = await apiAuth.post('/products/red',
        {
          app: product.value._id
        })
      if (lico.data.result) { colorLike.value = true } else {
        colorLike.value = false
      }
    }
    const { data: togather } = await api.get('/products')
    toga.value = togather.result.filter((item) => {
      return item.category === data.result.category
    })
    const idp = togather.result.findIndex(item => item._id === product.value._id)
    toga.value.splice(idp, 1)
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

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.from('.animationtable', {
    scrollTrigger: {
      trigger: '.animationtable',
      start: 'top 60%',
      end: 'bottom center'
      // markers: true
    },
    x: 100,
    opacity: 0,
    duration: 2,
    ease: 'none'
  })
  gsap.from('.animationfield', {
    scrollTrigger: {
      trigger: '.animationfield',
      start: 'top 60%',
      end: 'bottom center'
    },
    opacity: 0,
    duration: 1,
    ease: 'none'
  })
  gsap.from('.gastlike', {
    scrollTrigger: {
      trigger: '.gastlike',
      start: 'top 70%',
      end: 'bottom center'
    },
    y: -50,
    opacity: 0,
    duration: 3,
    ease: 'none'
  })
})
</script>
