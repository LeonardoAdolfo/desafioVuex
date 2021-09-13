import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqCategories: [],
    singleCatagory: {},
    singleQuestion: {},
    currentComponent: 'FaqCategories',
    transitionDepth: 1
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, data) {
      state.faqCategories = data
    },
    SET_CURRENT_COMPONENT(state, payload) {
      state.currentComponent = payload
    },
    SET_SINGLE_CATEGORY(state, payload) {
      state.singleCatagory = payload
    },
    SET_SINGLE_QUESTION(state, payload) {
      state.singleQuestion = payload
    },
    INCREASE_TRANSITION_DEPTH(state) {
      state.transitionDepth++
    },
    DECREASE_TRANSITION_DEPTH(state) {
      state.transitionDepth--
    }
  },
  actions: {
    fetchFaqCategorias({ commit }) {
      const data = faqCategories
      commit('SET_FAQ_CATEGORIES', data)
    },
    changeCurrentComponent({ commit }, payload) {
      commit('SET_CURRENT_COMPONENT', payload)
    },
    increaseTransitonDepth({ commit }) {
      commit('INCREASE_TRANSITION_DEPTH')
    },
    decreaseTransitonDepth({ commit }) {
      commit('DECREASE_TRANSITION_DEPTH')
    },
    getSingleCategory({ commit }, payload) {
      commit('SET_SINGLE_CATEGORY', payload)
    },
    getSingleQuestion({ commit }, payload) {
      commit('SET_SINGLE_QUESTION', payload)
    }
  },
  getters: {
    $currentComponent(state) {
      return state.currentComponent
    },
    $allCategories(state) {
      return state.faqCategories
    },
    $singleCategory(state) {
      return state.singleCatagory
    },
    $singleQuestion(state) {
      return state.singleQuestion
    },
    $transitionDepth(state) {
      return state.transitionDepth
    }
  }
})
