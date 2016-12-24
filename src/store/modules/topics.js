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
    TOPIC_GET_LISTS_SUCCESS: (state, { data }) => {
      Vue.set(state, 'lists', data);
    },
    TOPIC_GET_ENTITY_SUCCESS: (state, { data }) => {
      Vue.set(state, 'entity', data);
    },
  },
  actions: {
    topicGetLists({ commit }) {
      api.topic_get_lists().then((response) => {
        commit(types.TOPIC_GET_ENTITY_SUCCESS, response.data);
      });
    },
    topicCreateEntity({ commit }, id) {
      api.topic_create_entity(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    topicUpdateEntity({ commit }, id) {
      api.topic_update_entity(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    topicGetEntity({ commit }, id) {
      api.topic_get_entity(id).then((response) => {
        commit(types.TOPIC_GET_ENTITY_SUCCESS, response.data);
      });
    },
    topicArticleGetLists({ commit }, id) {
      api.topic_article_get_lists(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    topicGetSubscribers({ commit }, id) {
      api.topic_get_subscribers(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    topicSubscribe({ commit }, id) {
      api.topic_subscribe(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    topicUnsubscribe({ commit }, id) {
      api.topic_unsubscribe(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
  },
};
