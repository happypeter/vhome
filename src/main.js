import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import {VueMasonryPlugin} from 'vue-masonry'

Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
