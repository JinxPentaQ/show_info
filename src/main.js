import Vue from 'vue';
import App from './App';
import { router } from './router';
import axios from 'axios'
import QS from 'qs'
import 'lib-flexible'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)


import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

Vue.prototype.$axios = axios
Vue.prototype.qs = QS;

axios.defaults.baseURL = 'https://api.tmpay777.com';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
