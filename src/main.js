// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import Util from '@/helpers/util'

Vue.use(Util)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
let vm =  new Vue({
  el: '#app', //把APP.vue 文件挂载到 根目录下 index.html 
  router, 
  store,
  components: { App },
  template: '<App/>',
})
