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
    ARTICLE_GET_LISTS_SUCCESS: (state, { data }) => {
      Vue.set(state, 'lists', data);
    },
    ARTICLE_GET_ENTITY_SUCCESS: (state, { data }) => {
      Vue.set(state, 'entity', data);
    },
  },
  actions: {
    articleGetLists({ commit }) {
      api.article_get_lists().then((response) => {
        commit(types.ARTICLE_GET_LISTS_SUCCESS, response.data);
      });
    },
    articleAreateEntity({ commit }, id) {
      api.article_create_entity(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleDeleteEntity({ commit }, id) {
      api.article_delete_entity(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleUpdateEntity({ commit }, id) {
      api.article_update_entity(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleGetEntity({ commit }, id) {
      api.article_get_entity(id).then((response) => {
        commit(types.ARTICLE_GET_ENTITY_SUCCESS, response.data);
      });
    },
    articleUpvote({ commit }, id) {
      api.article_upvote(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleDownvote({ commit }, id) {
      api.article_downvote(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleGetVotes({ commit }, id) {
      api.article_get_votes(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleCommentGetLists({ commit }, id) {
      api.article_comment_get_lists(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleCommentCreateEntity({ commit }, id, params) {
      api.article_comment_create_entity(id, params).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleCommentDeleteEntity({ commit }, id) {
      api.article_comment_delete_entity(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    articleViewerGetLists({ commit }, id) {
      api.article_viewer_get_lists(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
  },
};
