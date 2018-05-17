import axios from 'axios'
import { API_URL } from '../../constants/ApiConstants'

const state = {
  toc: [],
  currentPost: ''
}

const mutations = {
  loadPostToc(state, posts) {
    state.toc = posts
  },
  loadCurrentPost(state, post) {
    state.currentPost = post
  }
}

const actions = {
  fetchPostToc({ commit }) {
    const uri = `${API_URL}/posts/index.json`
    axios.get(uri).then(res => {
      commit('loadPostToc', res.data)
    })
  },
  fetchPost({ commit }, { id }) {
    const uri = `${API_URL}/posts/${id}.md`
    axios.get(uri).then(res => {
      commit('loadCurrentPost', res.data)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
