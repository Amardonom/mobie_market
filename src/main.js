import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Row, Col } from 'vant'
import './stylus/index.styl'
import './stylus/public.styl'
Vue.use(Button, Row, Col)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
