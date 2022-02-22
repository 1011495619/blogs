import Vue from 'vue'
import Vuex from 'vuex'
import { articleList, queryarticle } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList: []
  },
  mutations: {
    ARTICLELIST(state, articleList) {
      state.articleList = articleList
    }
  },
  actions: {

    // 获取文章列表
    async articleList({ commit }) {
      console.log(commit);
      let results = await articleList()
      console.log(results);
      if (results.status == 200) {
        commit("ARTICLELIST", results.data.data)
      }
    },

    // 获取文章内容

    // async queryarticle() {
    //   let results = await queryarticle()
    //   console.log(results);
    // }
  },
  modules: {
  }
})
