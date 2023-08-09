/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// 表單實驗功能
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { zhHant } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTableServer
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#FD8F5F',
          secondary: '#F2E1D9'
        }
      }

    }
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  }
})
