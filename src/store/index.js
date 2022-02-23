import Vue from 'vue'
import Vuex from 'vuex'
import { articleList, queryarticle } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList: [],
    queryarticle: {}
  },
  mutations: {
    ARTICLELIST(state, articleList) {
      state.articleList = articleList
    },
    QUERYARTICLE(state, articleList) {
      state.queryarticle = articleList
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

    async queryarticle(context, route) {
      // console.log(a, b);
      let results = await queryarticle(route)
      console.log(results);
      if (results.status == 200) {
        context.commit("QUERYARTICLE", results.data.data)
      } else {
        alert('错误')
      }
    }
  },
  modules: {
  }
})
