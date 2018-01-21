// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TheContainer from './the-container'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

var http = axios.create({
  baseURL: 'http://localhost:1234',
  headers: {
    'Content-Type': 'application/json'
  }
})

Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<the-container/>',
  components: { TheContainer }
})
