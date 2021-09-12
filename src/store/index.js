import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json"

export default createStore({
  state: {
    faqCategories: [],
    questionsCategory: {},
    answerQuestion: {},
    currentComponent: 'faqCategories',
    page: 1
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, data) {
      state.faqCategories = data
    },
    INCREASE_PAGE(state) {
      state.page++
    },
    DECREASE_PAGE(state) {
      state.page--
    },
    SET_NEW_COMPONENT(state, payload){
      state.currentComponent = payload
    },
    SET_QUESTION_CATEGORY(state, payload){
      state.questionsCategory = payload
    },
    SET_ANSWER_QUESTION(state, payload){
      state.answerQuestion = payload
    },
  },
  actions: {
    fetchFaqCategorias({ commit }) {
      const data = faqCategories

      commit('SET_FAQ_CATEGORIES', payload)
    },
    

  },
  getters: {

  },
});
