import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: [],
    isLoading: false
  },
  getters: {
    getStarredById: (state) => (id) => state.starred.find((item) => item.id === id)
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.starred = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_ISSUE (state, payload) {
      state.starred = state.starred.map(item => {
        if (payload.id === item.id) {
          item.issues = payload.issues
        }
        return item
      })
    }
  },
  actions: {
    async getStarredRepos ({ commit }) {
      try {
        const { data } = await api.starred.getStarredRepos()
        commit('SET_STARRED', data)
      } catch (e) {
        alert('Возникла ошибка при загрузке страницы')
      }
    },
    async getIssues ({ commit }, { id, owner, repo }) {
      try {
        commit('SET_LOADING', true)
        const { data } = await api.issues.getIssues({ owner, repo })
        commit('SET_ISSUE', { id, issues: data })
      } catch (e) {
        alert('Возникла ошибка при загрузке страницы')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}
