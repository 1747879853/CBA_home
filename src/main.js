// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import Home from './view/home.vue'
import store from './store/index.js'
import Vuex from 'vuex'
import  VueTouch from 'vue-touch'
import axios from 'axios'
Vue.use(Vuex)
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.use(Vant);
Vue.prototype.$axios = axios
 if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(VueTouch,{name:'v-touch'})
VueTouch.config.swipe = {
  threshold:50  //设置左右滑动的距离
}
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})