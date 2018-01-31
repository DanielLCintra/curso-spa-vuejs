import http from '@/service/http'
import findIndex from 'lodash/findIndex'

const fetch = async ({ commit }) => {
  const response = await http.get('/categoria')

  if (response != null) {
    const categories = response.data
    commit('SET_LIST', categories)
  }
}

const update = ({ commit, state }, obj) => {
  const index = findIndex(state.list, { id: obj.id })
  const payload = { category: obj, index }
  commit('SET_ONE', payload)
}

export default {
  fetch,
  update
}
