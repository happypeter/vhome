import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import resume from './modules/resume'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    blog,
    resume
  }
})
