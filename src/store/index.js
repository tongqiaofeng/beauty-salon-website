import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // baseUrl: 'http://192.168.0.164:8081/app/beauty',
    // baseUrl: 'http://hk.wistechx.cn:8085/app/beauty',
    baseUrl: 'https://hk.wistechx.cn/app/api/beauty',
  },
  mutations: {},
  actions: {},
  modules: {}
});