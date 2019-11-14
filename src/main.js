import Vue from 'vue'
import App from './App.vue'

import Function from './burry/prototype'

import {router} from './router'

Vue.config.productionTip = false;

Vue.use(Function);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
