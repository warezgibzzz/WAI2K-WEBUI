import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./assets/main.css";
import VueAxios from "vue-axios";
import Axios from "axios";
import type { AxiosStatic } from "axios";

library.add(fas);
library.add(far);
library.add(fab);

const app = createApp(App);
const store = createPinia();

declare module "pinia" {
  export interface PiniaCustomProperties {
    $api: string;
    axios: AxiosStatic;
  }
}

app.use(VueAxios, Axios);
app.provide("axios", app.config.globalProperties.axios);
app.provide("$api", "http://localhost:17555");
store.use(({ store }) => {
  store.axios = app.config.globalProperties.axios;
  store.$api = "http://localhost:17555";
});
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
