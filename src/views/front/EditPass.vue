<template>
  <section class="editpass">
    <section class="othertitle">
      <div class="bgbox">
        <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover></VImg>
      </div>
      <div class="bgbox2"></div>
    </section>
    <VContainer>
      <VRow>
        <VCol cols="12" class="text-center">
          <h1>修改會員資料</h1>
        </VCol>
        <VDivider></VDivider>
        <VRow>
          <VCol cols="6" class="ppopp">
            <VImg :src="user.image ? user.image : user.avatar" style="height: 200px; width: 200px; border-radius: 50%;"
              cover="">
            </VImg>
            <VueFileAgent v-model="files" v-model:raw-model-value="rawFiles" :max-files="1" max-size="1MB"
              accept="image/jpg,image/jpeg,image/png" :multiple="false" :error-text="{ type: '檔案格式錯誤', size: '檔案太大' }"
              help-text="選擇檔案或拖放到這裡" deletable ref="fileAgent"></VueFileAgent>
            <VBtn @click="upimg">送出大頭貼</VBtn>
            <!-- <VImg src="@/assets/alice-shimada-girls-und-panzer.gif" style="height: 500px;"></VImg> -->
          </VCol>
          <VCol cols="6">
            <VForm :disabled="isSubmitting" @submit.prevent="submit">
              <VTextField v-model="account.value.value" label="帳號:" counter max-length="20"
                :error-messages="account.errorMessage.value"></VTextField>
              <VTextField v-model="password.value.value" label="密碼:" counter max-length="20" type="password"
                :error-messages="password.errorMessage.value"></VTextField>
              <VTextField v-model="passwordConfirm.value.value" label="確認密碼:" counter max-length="20" type="password"
                :error-messages="passwordConfirm.errorMessage.value">
              </VTextField>
              <VTextField v-model="email.value.value" label="信箱(不得重複):" type="email"
                :error-messages="email.errorMessage.value">
              </VTextField>
              <VTextField v-model="name.value.value" label="暱稱(不得重複):" counter max-length="10"
                :error-messages="name.errorMessage.value"></VTextField>
              <div class="text-center">
                <VBtn type="submit">修改會員資料</VBtn>
                <VBtn @click="handleReset">重製</VBtn>
              </div>
            </VForm>
          </VCol>
        </VRow>
      </VRow>
    </VContainer>
  </section>
</template>

<script setup>

import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()
const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '最少四個字')
    .max(20, '最多20'),
  email: yup
    .string()
    .required('信箱必填')
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => validator.isEmail(value)
    ),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '最少四個字')
    .max(20, '最多20'),
  passwordConfirm: yup
    .string()
    .required('密碼必填')
    .min(4, '最少四個字')
    .max(20, '最多20')
    .oneOf([yup.ref('password')], '密碼不一致'),
  name: yup
    .string()
    .required('暱稱必填')
    .max(10, '最多10')
})

const { handleSubmit, isSubmitting, handleReset } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')
const name = useField('name')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await apiAuth.patch('/users/edit', {
      account: values.account,
      email: values.email,
      name: values.name,
      password: values.password
    })
    user.account = data.result.account
    user.email = data.result.email
    user.name = data.result.name
    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom',
        rounded: 'pill',
        variant: 'tonal'
      }
    })

    handleReset()
    router.push('/')
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

const files = ref([])
const rawFiles = ref([])
const fileAgent = ref(null)

const upimg = async () => {
  try {
    const fd = new FormData()
    if (files.value.length > 0) fd.append('image', files.value[0].file)
    const { data } = await apiAuth.post('/users/upimg', fd)
    console.log(data.result)
    user.image = data.result
    fileAgent.value.deleteFileRecord()
    createSnackbar({
      text: '大頭貼搞定',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom',
        rounded: 'pill',
        variant: 'tonal'
      }
    })
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
  ;

(async () => {
  try {
    account.value.value = user.account
    email.value.value = user.email
    name.value.value = user.name
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
})()
</script>
