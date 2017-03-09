import Vue from 'vue'
import Vuex from 'vuex'

import schedule from './modules/schedule'
// import * as actions from './actions'

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  // actions,
  modules: {
    schedule
  }
})
