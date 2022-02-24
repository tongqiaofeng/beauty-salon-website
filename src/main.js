import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'

// 全局函数
import functions from './utils/globalFunctions.js'
// 防止重复点击
import preventClick from './utils/clickStatefrom' // 根据自己的路径

import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import twLocale from 'element-ui/lib/locale/lang/zh-TW'
import kmLocale from 'element-ui/lib/locale/lang/km'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

Vue.use(functions)
Vue.use(preventClick)

Vue.use(element, {
  zhLocale,
  enLocale,
  twLocale
})
Vue.use(VueI18n)

Vue.prototype.$axios = axios

Vue.config.productionTip = false;

const i18n = new VueI18n({
  // 语言标识,默认汉语,先去localStorage查找，如果存在并有效，localStorage值即为默认语言类型；否则默认为中文简体
  // localStorage.getItem("DefaultLanguage") == null ? 'zh-CN' : 
  locale: localStorage.getItem("DefaultLanguage") == null ? 'en-US' : localStorage.getItem(
    "DefaultLanguage"),
  messages: {
    'zh-CN': Object.assign(require("../static/lang/zh-CN"), zhLocale),
    'en-US': Object.assign(require("../static/lang/en"), enLocale),
    'zh-TW': Object.assign(require("../static/lang/zh-TW"), twLocale),
    'en-KH': Object.assign(require("../static/lang/en-KH"), kmLocale)
  }
});
locale.i18n((key, value) => i18n.t(key, value)); //为了之后将element-ui组件本地化

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response)
  }
);

new Vue({
  router,
  store,
  i18n, //将VueI18n挂载到vue实例上
  render: h => h(App)
}).$mount("#app");