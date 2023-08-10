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
        <h1 class="text-center">商品管理</h1>
      </VCol>
      <VDivider></VDivider>
      <VCol cols="12">
        <!-- <VBtn color="green" @click="openDialog">新增商品</VBtn> -->
        <VDataTableServer v-model:items-per-page="tableItemsPerPage" v-model:sort-by="tableSortBy"
          v-model:page="tablePage" :items="tableProducts" :headers="tableHeaders" :loading="tableLoading"
          :items-length="tableItemsLength" hover @update:items-per-page="tableLoadItems" @update:sort-by="tableLoadItems"
          @update:page="tableLoadItems" :search="tableSearch">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>我的商品</v-toolbar-title>
              <VTextField label="搜尋" append-icon="mdi-magnify" v-model="tableSearch" @click:append="tableApplySearch"
                @keydown.enter="tableApplySearch"></VTextField>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template #activator="{ props }">
                  <v-btn color="primary" dark class="mb-2" v-bind="props" @click="openDialog">
                    新增商品
                  </v-btn>
                </template>

              </v-dialog>
            </v-toolbar>
          </template>
          <template #[`item.images`]="{ item }">
            <VImg :src="ig" v-for="(ig, i) in  item.raw.images" :key="i" cover aspect-ratio="16/9"></VImg>
          </template>
          <template #[`item.sell`]="{ item }">
            <VIcon icon="mdi-check" v-if="item.raw.sell"></VIcon>
          </template>
          <template #[`item.edit`]="{ item }">
            <VBtn icon="mdi-pencil" @click="tableEditItem(item.raw)" variant="text"></VBtn>
          </template>
        </VDataTableServer>
      </VCol>
    </VRow>
    <!-- 一定要放在 VContainer裡面-->
    <VDialog persistent v-model="dialog" width="800px" scrollable>
      <VForm :disabled="isSubmitting" @submit.prevent="submit">
        <VCard style="height:80vh;">
          <VCardTitle>{{ dialogId.length > 0 ? '編輯商品' : '新增商品' }}</VCardTitle>
          <VCardText>
            <VTextField label="名稱" v-model="name.value.value" :error-messages="name.errorMessage.value">
            </VTextField>
            <VTextField label="價格" v-model.number="price.value.value" :error-messages="price.errorMessage.value"
              type="number" min="0">
            </VTextField>
            <VTextField label="分類" v-model="category.value.value" :error-messages="category.errorMessage.value">
            </VTextField>
            <VSelect :items="manufacturersItems" label="製造商" v-model="manufacturers.value.value"
              :error-messages="manufacturers.errorMessage.value">
            </VSelect>
            <VTextField label="主題色" v-model="color.value.value" :error-messages="color.errorMessage.value">
            </VTextField>
            <VTextField label="文字主題色" v-model="textColor.value.value" :error-messages="textColor.errorMessage.value">
            </VTextField>
            <VTextarea label="說明" v-model="description.value.value" :error-messages="description.errorMessage.value">
            </VTextarea>
            <VCheckbox label="上架" v-model="sell.value.value"></VCheckbox>

            <VueFileAgent v-model="files" v-model:raw-model-value="rawFiles" :max-files="6" max-size="5MB"
              accept="image/jpg,image/jpeg,image/png" :multiple="true" :error-text="{ type: '檔案格式錯誤', size: '檔案太大' }"
              help-text="選擇檔案或拖曳至此" deletable ref="fileAgent" v-if="!imageEditView.length > 0">
            </VueFileAgent>
            <VRow v-if="imageEditView.length > 0">
              <VCol v-for="(item, i) in imageEditView" :key="i" cover aspect-ratio="16/9">
                <VImg :src="item">
                </VImg>
              </VCol>
            </VRow>

            <p v-if="!files.length > 0 && !imageEditView.length > 0" class="text-center">需要圖片</p>
            <VBtn v-if="imageEditView.length > 0" @click="imageEditView = []">重新上傳圖片</VBtn>
          </VCardText>
          <VCardActions>
            <VSpacer>
              <VBtn color="red" @click="closeDialog" :loading="isSubmitting">取消</VBtn>
              <VBtn color="primary" @click="Reset" :loading="isSubmitting">重製</VBtn>
              <VBtn color="green" type="submit" :loading="isSubmitting">送出</VBtn>
            </VSpacer>
          </VCardActions>
        </VCard>
      </VForm>
    </VDialog>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const imageEditView = ref([])
const createSnackbar = useSnackbar()
// 一頁幾筆
const tableItemsPerPage = ref(5)
// 排序
const tableSortBy = ref([
  {
    key: 'name',
    order: 'asc'
  }
])
// 頁碼
const tablePage = ref(1)
// 表格商品
const tableProducts = ref([])
// 表格欄位
const tableHeaders = [
  { title: '圖片', align: 'center', sortable: false, key: 'images' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '製造商', align: 'center', sortable: true, key: 'manufacturers' },
  { title: '分類', align: 'center', sortable: true, key: 'category' },
  { title: '價錢', align: 'center', sortable: true, key: 'price' },
  { title: '主題色', align: 'center', sortable: false, key: 'color' },
  { title: '文字主題色', align: 'center', sortable: false, key: 'textColor' },
  { title: '上架', align: 'center', sortable: true, key: 'sell' },
  { title: '喜歡', align: 'center', sortable: true, key: 'totle' },
  { title: '售出數', align: 'center', sortable: true, key: 'sellTotle' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(false)
// 表格總資料數
const tableItemsLength = ref(0)
// 表格載入資料的function

// 表格搜尋
const tableSearch = ref('')
const tableLoadItems = async () => {
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('./products/all', {
      params: {
        // 現在在第幾頁
        page: tablePage.value,
        // 一頁幾筆資料
        itemsPerPage: tableItemsPerPage.value,
        // 排序
        sortBy: tableSortBy.value[0]?.key || '_id',
        sortOrder: tableSortBy.value[0]?.order || 'asc',
        search: tableSearch.value
      }
    })
    tableProducts.value.splice(0, tableProducts.value.length, ...data.result.data)
    tableItemsLength.value = data.result.count
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
  tableLoading.value = false
}
tableLoadItems()
// 彈出開關
const dialog = ref(false)
const dialogId = ref('')

// 套用搜尋的function
const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}

// 表格編輯
const tableEditItem = (item) => {
  dialogId.value = item._id
  name.value.value = item.name
  price.value.value = item.price
  description.value.value = item.description
  category.value.value = item.category
  manufacturers.value.value = item.manufacturers
  color.value.value = item.color
  textColor.value.value = item.textColor
  sell.value.value = item.sell
  imageEditView.value = item.images
  dialog.value = true
}

const openDialog = () => {
  dialogId.value = ''
}

const closeDialog = () => {
  dialog.value = false
  resetForm()
  imageEditView.value = ref([])
  if (rawFiles.value.length > 0) {
    for (let i = 0; i < rawFiles.value.length * 2; i++) {
      fileAgent.value.deleteFileRecord(rawFiles.value[i])
      fileAgent.value.deleteFileRecord(files.value[i])
    }
  }

  for (let i = 0; i < files.value.length * 2; i++) {
    fileAgent.value.deleteFileRecord(files.value[i])
  }
}

// 重製
const Reset = () => {
  handleReset()
  if (rawFiles.value.length > 0) {
    for (let i = 0; i < rawFiles.value.length * 2; i++) {
      fileAgent.value.deleteFileRecord(rawFiles.value[i])
      fileAgent.value.deleteFileRecord(files.value[i])
    }
  }
  for (let i = 0; i < files.value.length * 2; i++) {
    fileAgent.value.deleteFileRecord(files.value[i])
  }
}

const manufacturersItems = ['MIMEYOI', 'ALTER', '好微笑', '壽屋']

const schema = yup.object({
  name: yup
    .string()
    .required('缺少名稱'),
  price: yup
    .number()
    .required('缺少價格')
    .min(0, '價格錯誤')
    .typeError('沒有價格'),
  description: yup
    .string()
    .required('缺少說明'),
  category: yup
    .string()
    .required('缺少分類'),
  manufacturers: yup
    .string()
    .required('缺少製造商')
    .test('製造商錯誤', (value) => manufacturersItems.includes(value)),
  sell: yup
    .boolean(),
  color: yup
    .string()
    .required('需要主題色'),
  textColor: yup
    .string()
    .required('需要文字主題色')
})

const { handleSubmit, isSubmitting, handleReset, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    price: 0,
    description: '',
    category: '',
    manufacturers: '',
    color: '',
    textColor: '',
    sell: false
  }
})

const name = useField('name')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const manufacturers = useField('manufacturers')
const sell = useField('sell')
const color = useField('color')
const textColor = useField('textColor')

const files = ref([])
const rawFiles = ref([])
const fileAgent = ref(null)

const submit = handleSubmit(async (values) => {
  if (dialogId.value.length === 0 && files.value.length === 0) {
    return createSnackbar({
      text: '沒有圖片',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
  try {
    const fd = new FormData()
    fd.append('name', values.name)
    fd.append('price', values.price)
    fd.append('description', values.description)
    fd.append('category', values.category)
    fd.append('manufacturers', values.manufacturers)
    fd.append('sell', values.sell)
    fd.append('color', values.color)
    fd.append('textColor', values.textColor)

    for (let i = 0; i < files.value.length; i++) {
      if (files.value.length > 0) {
        fd.append('images', files.value[i].file)
      }
    }

    if (dialogId.value.length > 0) {
      // 找不到
      await apiAuth.patch('/products/' + dialogId.value, fd)
      createSnackbar({
        text: '修改成功',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: 'green',
          location: 'bottom'
        }
      })
    } else {
      await apiAuth.post('/products', fd)

      createSnackbar({
        text: '新增成功',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: 'green',
          location: 'bottom'
        }
      })
    }

    closeDialog()
    tableLoadItems()
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
