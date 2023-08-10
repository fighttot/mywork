<template>
  <section class="logincom">
    <VContainer>
      <VRow class="text-center">
        <VCol cols="12">
          <h1>登入</h1>
        </VCol>
        <VDivider></VDivider>
        <VCol cols="12">
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <VTextField label="帳號" counter maxlength="20" v-model="account.value.value"
              :error-messages="account.errorMessage.value"></VTextField>
            <VTextField label="密碼" counter maxlength="20" type="password" v-model="password.value.value"
              :error-messages="password.errorMessage.value"></VTextField>
            <div class="text-center">
              <VBtn type="submit" color="green">登入</VBtn>
              <VBtn color="primary" @click="handleReset">重製</VBtn>
            </div>
          </VForm>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>

<script setup>

import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '最少四個字')
    .max(20, '最多20'),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '最少四個字')
    .max(20, '最多20')
})

const { handleSubmit, isSubmitting, handleReset } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
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
        location: 'bottom'
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
        location: 'bottom'
      }
    })
  }
})
</script>
