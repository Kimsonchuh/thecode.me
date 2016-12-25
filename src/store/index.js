import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

import home from './modules/home';
import account from './modules/account';
import topics from './modules/topics';
import articles from './modules/articles';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home,
    account,
    topics,
    articles,
  },
  strict: debug,
});
