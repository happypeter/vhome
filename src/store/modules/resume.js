import axios from 'axios'
import { API_URL } from '../../constants/ApiConstants'

const state = {
  skills: []
}

const mutations = {
  loadSkills(state, skills) {
    state.skills = skills
  }
}

const actions = {
  fetchSkillData({ commit }) {
    const uri = `${API_URL}/resume/skills.json`
    axios.get(uri).then(res => {
      commit('loadSkills', res.data)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
