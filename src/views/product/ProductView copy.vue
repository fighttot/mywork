<template>
  <VContainer>
    <VRow :style="`background-color: ${product.color};`">
      <VCol cols="12">
        <h1 :style="`color: ${product.textColor};`">{{ product.name }}</h1>
      </VCol>

      <VCol cols="12">
        <VImg :src="item" v-for="(item, i) in product.images" :key="i"></VImg>
      </VCol>

      <VCol cols="12">
        <h1>{{ product.price }}</h1>
        <pre>有{{ product.totle }}人喜歡</pre>
        <pre>{{ product.description }}</pre>
        <pre>{{ product.category }}</pre>
        <pre>{{ product.manufacturers }}</pre>
        <VForm :disabled="isSubmitting" @submit.prevent="submitCart">
          <VTextField v-model.number="quantity.value.value" type="number" label="數量" min="0"
            :error-messages="quantity.errorMessage.value"></VTextField>
          <VBtn type="submit" color="green">加入購物車</VBtn>
          <VBtn :color="colorLike" @click="addLike">{{ colorLike === '#F2E1D9' ? '加入收藏' : '已加收藏' }}</VBtn>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
  <VOverlay :model-value="!product.sell" persistent class="align-center justify-center text-center">
    <h1 class="text-red"> 已下架 </h1>
    <VBtn to="/"> 回上頁</VBtn>
  </VOverlay>

  <VTable>
    <thead>
      <tr>
        <th>使用者</th>
        <th>評論</th>
        <th>日期</th>
        <th v-if="user.role === 1">審核</th>
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
            <VBtn @click="review(i, item.user._id)">{{ item.review ? '未通過' : '已通過' }}</VBtn>
          </td>

        </tr>
      </template>

    </tbody>
  </VTable>
  <VDialog v-model="dialog" width="auto">
    <VForm @submit.prevent="submitText">
      <VCard>
        <VCardTitle>
          <VImg :src="user.avatar"></VImg>{{ user.name }}
        </VCardTitle>
        <VCardText>
          <!-- <VTextField label="評論" counter maxlength="150" v-model="text.value.value"
            :error-messages="text.errorMessage.value"></VTextField> -->
          <VTextField v-model="form.text" label="留言" counter maxlength="150"
            :rules="[rules.required, rules.min, rules.max]"></VTextField>
        </VCardText>
      </VCard>
      <VBtn type="submit" color="green">確認</VBtn>
    </VForm>
  </VDialog>
  <VBtn @click="dialog = true">{{ repeat ? '編輯評論' : '新增評論' }}</VBtn>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'

const router = useRoute()
const createSnackbar = useSnackbar()
const user = useUserStore()
const dialog = ref(false)
const repeat = ref(false)
const aap = ref('')
app.value = 12
// const open = () => {
//   dialog.value = true
// }
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

const rules = {
  required: (value) => !!value || '欄位必填',
  min: (value) => value.length >= 10 || '長度必須大於 10 個字',
  max: (value) => value.length <= 150 || '長度必須小於 150 個字'
}

const submitText = async (values) => {
  try {
    const idx = product.value.peopleSay.findIndex(item => item.user.account === user.account)
    if (idx > -1) {
      const { data } = await apiAuth.patch(`products/${product.value._id}/say`,
        {
          text: form.text
        })
      product.value.peopleSay = data.result
    } else {
      const { data } = await apiAuth.post(`products/${product.value._id}/say`,
        {
          text: form.text
        })
      product.value.peopleSay = data.result
      repeat.value = true
    }

    // form.reset()
    form.text = ''
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
}

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
const colorLike = ref('#F2E1D9')
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
    if (lico.data.result) { colorLike.value = 'red' } else {
      colorLike.value = '#F2E1D9'
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
    if (lico.data.result) { colorLike.value = 'red' } else {
      colorLike.value = '#F2E1D9'
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
