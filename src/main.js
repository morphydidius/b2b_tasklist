import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'whatwg-fetch';
import './scss/fonts.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
