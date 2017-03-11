import Vue from 'vue'

const state = {
  schedule: []
}

const getters = {
  scheduleList: () => {
    return state.schedule
  }
}

const mutations = {
  'INIT_DATA' (state, datas) {
    state.schedule = datas
  },
  'SAVE_DATA' (state, data) {
    Vue.set(state.schedule, data.name, data.parsedData)
  }
}

const actions = {
  initData: ({ commit }) => {
    Vue.http.get('data.json').then(res => {
      console.log(res.body)
      commit('INIT_DATA', res.body)
    })
  },
  saveData: ({ commit }, data) => {
    const parsedData = JSON.parse(data)
    Vue.http.post(`data.json`, parsedData).then(res => {
      commit('SAVE_DATA', {name: res.body.name, parsedData})
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
