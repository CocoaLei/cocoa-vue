import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  devtools: true,
  state: {
    moduleName: '',
  },
  actions: {
    enterModulePage({ commit }, { name }) {
      commit('updateModuleName', name);
    },
  },
  mutations: {
    updateModuleName(state, name) {
      if (name && name !== state.moduleName) state.moduleName = name;
    },
  },
});

export default store;
