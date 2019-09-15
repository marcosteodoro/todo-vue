import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import 'normalize.css'
import 'material-design-icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
