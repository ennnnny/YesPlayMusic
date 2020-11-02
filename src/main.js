import Vue from "vue";
import VueGtag from "vue-gtag";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/locale";
import "@/assets/icons";
import "@/utils/filters";
import { initMediaSession } from "@/utils/mediaSession";
import "./registerServiceWorker";
import { dailyTask } from "@/utils/common";

// import * as Sentry from "@sentry/browser";
// import { Vue as VueIntegration } from "@sentry/integrations";
// import { Integrations } from "@sentry/tracing";

Vue.use(
  VueGtag,
  {
    config: { id: "G-V5357H0HVE" },
    includes: [{ id: "G-9VKPWXNS05" }],
  },
  router
);

Vue.config.productionTip = false;

initMediaSession();

// if (process.env.VUE_APP_ENABLE_SENTRY === "true") {
//   Sentry.init({
//     dsn:
//       "https://30aaa25152974f48971912a394ab6bc3@o436528.ingest.sentry.io/5477409",
//     integrations: [
//       new VueIntegration({
//         Vue,
//         tracing: true,
//       }),
//       new Integrations.BrowserTracing(),
//     ],
//
//     // We recommend adjusting this value in production, or using tracesSampler
//     // for finer control
//     tracesSampleRate: 1.0,
//   });
// }

dailyTask();

new Vue({
  i18n,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
