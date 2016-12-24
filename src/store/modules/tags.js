import Vue from 'vue';
import api from '../../api';
import * as types from '../mutation-types';

// const localStorageglobal.localStorage;
// const JSONglobal.JSON;

export default {
  state: {
    lists: [],
    entity: null,
  },
  mutations: {
    TAG_GET_LISTS_SUCCESS: (state, { data }) => {
      Vue.set(state, 'lists', data);
    },
    TAG_GET_ENTITY_SUCCESS: (state, { data }) => {
      Vue.set(state, 'entity', data);
    },
  },
  actions: {
    tagGetLists({ commit }) {
      api.tag_get_lists().then((response) => {
        commit(types.TAG_GET_LISTS_SUCCESS, response.data);
      });
    },
    tagCreateEntity({ commit }, params) {
      api.tag_create_entity(params).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    tagGetEntity({ commit }, name) {
      api.tag_get_entity(name).then((response) => {
        commit(types.TAG_GET_ENTITY_SUCCESS, response.data);
      });
    },
    tagArticleGetLists({ commit }, name) {
      api.tag_article_get_lists(name).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
  },
};
