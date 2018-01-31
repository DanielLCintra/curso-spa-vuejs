import Vue from 'vue'

const SET_LIST = (state, obj) => {
  state.list = obj.categories
}

const SET_ONE = (state, obj) => {
  const { index, category } = obj

  if (index > -1) {
    Vue.set(state.list, index, category)
  } else {
    state.list.unshift(category)
  }
}

export default {
  SET_LIST,
  SET_ONE
}
