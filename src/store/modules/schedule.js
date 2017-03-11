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
  },
  'REMOVE_DATA' (state, key) {
    Vue.delete(state.schedule, key)
  }
}

const actions = {
  initData: ({ commit }) => {
    Vue.http.get('data.json').then(res => {
      commit('INIT_DATA', res.body)
    })
  },
  saveData: ({ commit }, data) => {
    const parsedData = JSON.parse(data)
    Vue.http.post(`data.json`, parsedData).then(res => {
      commit('SAVE_DATA', {name: res.body.name, parsedData})
    })
  },
  removeData: ({ commit }, key) => {
    Vue.http.delete(`data/${key}.json`).then(res => {
      commit('REMOVE_DATA', key)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
