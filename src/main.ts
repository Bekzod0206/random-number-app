import { createApp } from 'vue'

import './style.css'
import App from './App.vue'

// Router
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Vuetify styles
// @ts-ignore
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Pinia
import { createPinia } from 'pinia'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app')
