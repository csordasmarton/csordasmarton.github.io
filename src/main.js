import "core-js/stable";
import "regenerator-runtime/runtime";

import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";

import vuetify from "@/plugins/vuetify";
import helper from "@/plugins/helper";

import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(helper);

new Vue({
  helper,
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
