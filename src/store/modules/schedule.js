import Vue from 'vue'
import { router } from '../../main'

const state = {
  id: 0,
  status: false,
  schedule: {}
}

const getters = {
  scheduleList: (state, getters) => {
    return state.schedule
  },
  schedule: (state, getters) => {
    return state.schedule[state.id]
  },
  status: (state, getters) => {
    return state.status
  }
}

const mutations = {
  'INIT_DATA' (state, datas) {
    state.schedule = datas
  },
  'SET_ID' (state, id) {
    state.id = id
  },
  'SAVE_STATUS' (state, status) {
    state.status = status
  },
  'SAVE_DATA' (state, data) {
    if (!state.schedule) {
      state.schedule = {}
    }
    Vue.set(state.schedule, data.key, data.data)
  },
  'REMOVE_DATA' (state, key) {
    Vue.delete(state.schedule, key)
  }
}

const actions = {
  initData: ({ commit }) => {
    let tempData = {}
    Vue.http.get('data.json').then(res => {
      if (res.body) {
        const keys = Object.keys(res.body)
        for (let i = 0; i < keys.length; i++) {
          if (res.body[keys[i]].hookType !== 'dooray-weeklist') {
            tempData[keys[i]] = res.body[keys[i]]
          }
        }
        commit('INIT_DATA', tempData)
      }
    })
  },
  setId: ({ commit }, id) => {
    commit('SET_ID', id)
  },
  initStatus: ({ commit }) => {
    Vue.http.get(`data/status.json`).then(res => {
      commit('SAVE_STATUS', res.body)
    })
  },
  saveStatus: ({ commit }, status) => {
    Vue.http.put(`data/status.json`, status).then(res => {
      commit('SAVE_STATUS', res.body)
    })
  },
  saveData: ({ commit }, data) => {
    Vue.http.post(`data.json`, data).then(res => {
      commit('SAVE_DATA', {key: res.body.name, data})
      router.go('/')
    })
  },
  removeData: ({ commit }, key) => {
    Vue.http.delete(`data/${key}.json`).then(res => {
      commit('REMOVE_DATA', key)
      router.push('/')
    })
  },
  modifyData: ({ commit }, data) => {
    Vue.http.put(`data/${data.key}.json`, data.data).then(res => {
      commit('SAVE_DATA', {key: data.key, data: data.data})
      router.push(`/scheduler/${data.key}`)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
