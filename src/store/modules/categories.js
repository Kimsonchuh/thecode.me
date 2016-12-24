import Vue from 'vue';
import api from '../../api';
import * as types from '../mutation-types';

// const localStorage = global.localStorage;
// const JSON = global.JSON;

export default {
  state: {
    lists: [],
    entity: null,
  },
  mutations: {
    CATEGORY_GET_LISTS_SUCCESS: (state, { data }) => {
      Vue.set(state, 'lists', data);
    },
    CATEGORY_GET_ENTITY_SUCCESS: (state, { data }) => {
      Vue.set(state, 'entity', data);
    },
  },
  actions: {
    categoryGetLists({ commit }) {
      api.category_get_lists().then((response) => {
        commit(types.CATEGORY_GET_LISTS_SUCCESS, response.data);
      });
    },
    categoryGetEntity({ commit }, id) {
      api.category_get_entity(id).then((response) => {
        commit(types.CATEGORY_GET_ENTITY_SUCCESS, response.data);
      });
    },
    categoryTopicGetLists({ commit }, id) {
      api.category_topic_get_lists(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
  },
};
