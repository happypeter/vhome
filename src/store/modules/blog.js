import axios from 'axios'

const state = {
  all: []
}

const mutations = {
  loadPosts(state, posts) {
    state.all = posts
  }
}

const actions = {
  fetchPosts({ commit }) {
    const uri = 'https://jsonplaceholder.typicode.com/posts/'
    axios.get(uri).then(res => {
      commit('loadPosts', res.data)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
