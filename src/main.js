import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
const opts = {}
window.Swal = require('sweetalert2')
window.axios = require('axios')
Vue.config.productionTip = false

new Vue({
  router,
  vuetify:new Vuetify(opts),
  render: h => h(App)
}).$mount('#app')
