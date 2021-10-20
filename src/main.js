import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App)
  .use(router)
  //   .use(BootstrapVue)
  //   .use(IconsPlugin)
  .mount("#app");
