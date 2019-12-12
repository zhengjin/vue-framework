import Vue from 'vue'
import App from './App.vue'

import Function from './tracker/prototype'

import {router} from './router'

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.config.productionTip = false;

Vue.use(Function);
Sentry.init({
    dsn: 'http://f4ab5fa5d6884c0f8c9b4e9737a359ba@localhost:9000/4',
    integrations: [new Integrations.Vue({Vue, attachProps: true})],
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
