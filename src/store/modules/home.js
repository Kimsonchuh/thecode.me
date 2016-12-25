import Vue from 'vue';
import api from '../../api';
import * as types from '../mutation-types';

// const localStorage = global.localStorage;
// const JSON = global.JSON;

export default {
  state: {
    article_masthead: {},
    article_lists: {},
    article_motto: [],
    side_links: [],
  },
  mutations: {
    HOME_MASTHEAD_GET_ENTITY_SUCCESS: (state, { data }) => {
      if (data.length > 1) {
        Vue.set(state, 'article_masthead', data[0]);
      }
    },
    HOME_SIDE_TOPIC_GET_LISTS_SUCCESS: (state, { data }) => {
      Vue.set(state, 'side_topics', data);
    },
  },
  actions: {
    homeGetData({ commit }) {
      // masthead
      api.topic_article_get_lists('10').then((response) => {
        commit(types.HOME_MASTHEAD_GET_ENTITY_SUCCESS, response.data);
      });
      api.topic_article_get_lists('side-links').then((response) => {
        commit(types.HOME_SIDE_TOPIC_GET_LISTS_SUCCESS, response.data);
      });
    },
  },
};
