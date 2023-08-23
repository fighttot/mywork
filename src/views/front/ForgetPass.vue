<template>
  <section class="forgerpass">
    <section class="othertitle">
      <div class="bgbox">
        <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover></VImg>
      </div>
      <div class="bgbox2"></div>
    </section>
    <VContainer>
      <VRow>
        <VCol cols="12" class="text-center">
          <h1>忘記密碼</h1>
        </VCol>
        <VDivider></VDivider>
        <VRow>
          <VCol cols="6">
            <VImg src="@/assets/rikka-takanashi-takanashi-rikka.gif" style="height: 500px;">
              <p>再<br>想<br>想<br>?</p>
            </VImg>
            <!-- <P>想想?</P> -->
          </VCol>
          <VCol cols="6">
            <div class="shadow">
              <div class="shadowbox">
                <VForm :disabled="isSubmitting" @submit.prevent="submit">
                  <VTextField v-model="account.value.value" label="帳號:" counter max-length="20"
                    :error-messages="account.errorMessage.value"></VTextField>
                  <VTextField v-model="password.value.value" label="密碼:" counter max-length="20" type="password"
                    :error-messages="password.errorMessage.value"></VTextField>
                  <VTextField v-model="passwordConfirm.value.value" label="確認密碼:" counter max-length="20" type="password"
                    :error-messages="passwordConfirm.errorMessage.value">
                  </VTextField>
                  <VTextField v-model="email.value.value" label="確認信箱" type="email"
                    :error-messages="email.errorMessage.value">
                  </VTextField>
                  <div class="text-center">
                    <VBtn type="submit">創新密碼</VBtn>
                    <VBtn @click="handleReset">重製</VBtn>
                  </div>
                </VForm>
              </div>
            </div>
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
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

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
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting, handleReset } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users/forget', {
      account: values.account,
      email: values.email,
      password: values.password
    })
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

onMounted(() => {
  user.loding = false
})
</script>
