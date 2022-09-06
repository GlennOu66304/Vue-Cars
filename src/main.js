import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import axios from "./utils/index";
import store from './store/index.js'
// 1.set up the axios in the global;
import  './utils/amap'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
