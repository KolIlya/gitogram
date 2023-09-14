import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    userData: []
  },
  getters: {
  },
  mutations: {
    SET_USERDATA (state, payload) {
      state.userData = payload
    }
  },
  actions: {
    async getUserData ({ commit }) {
      try {
        const { data } = await api.user.getUserData()
        commit('SET_USERDATA', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
