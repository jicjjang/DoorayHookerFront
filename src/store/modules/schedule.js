const state = {
  schedule: []
}

const getters = {
  schedulList () {
    return state.schedule
  },
  schedule (state) {
    return state.schedule[0]
  }
}

const mutations = {
  'SAVE_DATA' (state, data) {
    state.schedule = data
  }
}

const actions = {
  saveData ({ commit }, data) {
    commit('SAVE_DATA', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
