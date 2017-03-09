// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './routes'
import store from './store/store'

import { FIREBASE_URL } from './config'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = FIREBASE_URL

const router = new VueRouter({
  routes,
  mode: 'history',  // default mode hash => default push state
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
