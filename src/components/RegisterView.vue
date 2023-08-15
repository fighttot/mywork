<template>
  <section class="regicom">
    <VContainer>
      <VRow>
        <VCol cols="12" class="text-center">
          <h1>註冊</h1>
        </VCol>
        <VDivider></VDivider>
        <VCol cols="12" style="padding: 250px 10px 0px 10px ;">
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
              <VBtn type="submit">註冊</VBtn>
              <VBtn @click="handleReset">重製</VBtn>
            </div>
          </VForm>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>

<script setup>

import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

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
    .required()
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
    await api.post('/users', {
      account: values.account,
      email: values.email,
      name: values.name,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom',
        rounded: 'pill',
        variant: 'tonal'
      }
    })
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login({
      token: data.result.token,
      account: data.result.account,
      name: data.result.name,
      email: data.result.email,
      cart: data.result.cart,
      role: data.result.role,
      like: data.result.like
    })
    createSnackbar({
      text: '登入成功',
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
</script>
