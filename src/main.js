import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'

Vue.use(ELEMENT)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
