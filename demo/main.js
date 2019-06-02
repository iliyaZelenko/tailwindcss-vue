import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.min.css'

// icons
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'
import router from './router'

import { MAIN_MODULE } from './config'

MAIN_MODULE.then(({ TailwindCssVue }) => {
  Vue.use(Vuetify)
  Vue.use(TailwindCssVue)
  Vue.use(Router)

  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
})
