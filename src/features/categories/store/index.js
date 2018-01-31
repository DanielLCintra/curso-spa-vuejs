import http from '@/service/http'

export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async fetch ({ commit }) {
      const response = await http.get('/categoria')

      if (response != null) {
        const categories = response.data
        commit('SET_LIST', categories)
      }
    }
  },
  mutations: {
    SET_LIST (state, obj) {
      state.list = obj.categories
    }
  }
  // mutations
}
