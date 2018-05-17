import axios from 'axios'
import { API_URL } from '../../constants/ApiConstants'

const state = {
  toc: []
}

const mutations = {
  loadPostToc(state, posts) {
    state.toc = posts
  }
}

const actions = {
  fetchPostToc({ commit }) {
    const uri = `${API_URL}/posts/index.json`
    axios.get(uri).then(res => {
      commit('loadPostToc', res.data)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
