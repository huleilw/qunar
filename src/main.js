// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入css
import 'css/reset.css'
import 'css/iconfont.css'
import 'swiper/dist/css/swiper.css'

//引入js解决点击事件300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);
//vuex
import store from './store';
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
