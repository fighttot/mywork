<template>
  <section class="backtop">
    <div class="bgbox">
      <VImg class="mainimg" src="@/assets/71b8e0fl+cL._AC_SL1500.jpg" cover></VImg>
    </div>
    <div class="bgbox2"></div>
  </section>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1>訂單管理</h1>
      </VCol>
      <VCol cols="12">處理中的訂單</VCol>
      <VCol cols="12">
        <VTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>建立日期</th>
              <th>使用者</th>
              <th>金額</th>
              <th>商品</th>
              <th>狀態</th>
              <th>付款方式</th>
              <th>地址</th>
              <th>修改日期</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order._id">
              <template v-if="order.ok !== '訂單已完成' && order.ok !== '訂單已取消'">
                <td>{{ order._id }}</td>
                <td>{{ new Date(order.date).toLocaleString() }}</td>
                <td>{{ order.user.account }}</td>
                <td>{{ order.total }}</td>
                <td>
                  <ul>
                    <li v-for="item in order.cart" :key="item._id">
                      {{ item.product.name }}*{{ item.quantity }}
                    </li>
                  </ul>
                </td>
                <td> {{ order.ok }}</td>
                <td> {{ order.paywat }}</td>
                <td> {{ order.seventhome }}</td>
                <td>{{ new Date(order.changedate).toLocaleString() }}</td>

                <td>
                  <VBtn @click="editorder(order._id, 2)" :disabled="order.ok === '訂單確認中' ? false : true">
                    成立訂單</VBtn>

                  <VBtn @click="editorder(order._id, 3)"
                    :disabled="order.ok === '訂單已成立' || order.ok === '結單無法取消' ? false : true">
                    完成訂單
                  </VBtn>

                  <VBtn @click="editorder(order._id, 6)" :disabled="order.ok === '取消確認中' ? false : true">
                    結單無法取消
                  </VBtn>

                  <VBtn @click="editorder(order._id, 4)"
                    :disabled="order.ok === '訂單已完成' || order.ok === '訂單已取消' || order.ok === '結單無法取消' ? true : false">取消訂單
                  </VBtn>
                </td>
              </template>
            </tr>
          </tbody>
        </VTable>
      </VCol>
      <VCol cols="12">完成的訂單</VCol>
      <VCol cols="12">
        <VTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>建立日期</th>
              <th>使用者</th>
              <th>金額</th>
              <th>商品</th>
              <th>狀態</th>
              <th>付款方式</th>
              <th>地址</th>
              <th>修改日期</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order._id">
              <template v-if="order.ok === '訂單已完成'">
                <td>{{ order._id }}</td>
                <td>{{ new Date(order.date).toLocaleString() }}</td>
                <td>{{ order.user.account }}</td>
                <td>{{ order.total }}</td>
                <td>
                  <ul>
                    <li v-for="item in order.cart" :key="item._id">
                      {{ item.product.name }}*{{ item.quantity }}
                    </li>
                  </ul>
                </td>
                <td> {{ order.ok }}</td>
                <td> {{ order.paywat }}</td>
                <td> {{ order.seventhome }}</td>
                <td>{{ new Date(order.changedate).toLocaleString() }}</td>

                <td>
                  已完成無法編輯
                </td>
              </template>
            </tr>
          </tbody>
        </VTable>
      </VCol>
      <VCol cols="12">取消的訂單</VCol>
      <VCol cols="12">
        <VTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>建立日期</th>
              <th>使用者</th>
              <th>金額</th>
              <th>商品</th>
              <th>狀態</th>
              <th>付款方式</th>
              <th>地址</th>
              <th>修改日期</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order._id">
              <template v-if="order.ok === '訂單已取消'">
                <td>{{ order._id }}</td>
                <td>{{ new Date(order.date).toLocaleString() }}</td>
                <td>{{ order.user.account }}</td>
                <td>{{ order.total }}</td>
                <td>
                  <ul>
                    <li v-for="item in order.cart" :key="item._id">
                      {{ item.product.name }}*{{ item.quantity }}
                    </li>
                  </ul>
                </td>
                <td> {{ order.ok }}</td>
                <td> {{ order.paywat }}</td>
                <td> {{ order.seventhome }}</td>
                <td>{{ new Date(order.changedate).toLocaleString() }}</td>

                <td>
                  已取消無法編輯
                </td>
              </template>
            </tr>
          </tbody>
        </VTable>
      </VCol>
    </VRow>
  </VContainer>
  <FooTer></FooTer>
</template>

<script setup>
import { ref } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import FooTer from '@/components/FooTer.vue'

const createSnackbar = useSnackbar()
const orders = ref([])

const editorder = async (id, check) => {
  try {
    const backans = await apiAuth.post('/orders/editorder', {
      id,
      check
    })

    const idx = orders.value.findIndex(item => item._id === id)
    orders.value[idx].ok = backans.data.result.ok
    orders.value[idx].changedate = backans.data.result.changedate
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

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.value.push(...data.result.map(order => {
      order.total = order.cart.reduce((total, current) => total + (current.product.price * current.quantity), 0)
      return order
    }))
    console.log(orders.value.length)
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
