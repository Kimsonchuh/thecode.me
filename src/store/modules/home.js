import Vue from 'vue';
import api from '../../api';
import * as types from '../mutation-types';

// const localStorage = global.localStorage;
// const JSON = global.JSON;

export default {
  state: {
    article_masthead: {},
    article_lists: {},
    article_motto: {},
    article_links: [],
  },
  mutations: {
    HOME_MASTHEAD_GET_ENTITY_SUCCESS: (state, { data }) => {
      if (data.length > 0) {
        Vue.set(state, 'article_masthead', data[0]);
      }
    },
    HOME_MOTTO_GET_ENTITY_SUCCESS: (state, { data }) => {
      if (data.length > 0) {
        Vue.set(state, 'article_motto', data[0]);
      }
    },
  },
  actions: {
    homeGetData({ commit }) {
      // masthead
      api.topic_article_get_lists('25').then((response) => {
        commit(types.HOME_MASTHEAD_GET_ENTITY_SUCCESS, response.data);
      });
      // motto
      api.topic_article_get_lists('49').then((response) => {
        commit(types.HOME_MOTTO_GET_ENTITY_SUCCESS, response.data);
      });
    },
  },
};
