// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TheContainer from './the-container'
import router from './router'
import EventBus from '@/plugins/event-bus'

Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')

Vue.use(EventBus)

require('bootstrap-sass')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<the-container/>',
  components: { TheContainer }
})
