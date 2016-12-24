// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';

import App from './App';

Vue.use(VueLazyload);

require('./filters');

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/images/placeholder_image.png',
  loading: 'static/images/placeholder_image.png',
  attempt: 1,
});

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
// Now the app has started!
