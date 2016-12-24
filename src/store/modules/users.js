import Vue from 'vue';
import api from '../../api';
import * as types from '../mutation-types';

// const localStorage = global.localStorage;
// const JSON = global.JSON;

export default {
  state: {
    entity: null,
  },
  mutations: {
    USER_GET_ENTITY_SUCCESS: (state, { data }) => {
      Vue.set(state, 'entity', data);
    },
  },
  actions: {
    userGetEntity({ commit }, id) {
      api.user_get_entity(id).then((response) => {
        commit(types.USER_GET_ENTITY_SUCCESS, response.data);
      });
    },
    userEstablishRelationship({ commit }, id, params) {
      api.user_establish_relationship(id, params).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    userGetFollowers({ commit }, id) {
      api.user_get_followers(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    userGetFollowing({ commit }, id) {
      api.user_get_following(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    userGetTopics({ commit }, id) {
      api.user_get_topics(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    userGetSubscribes({ commit }, id) {
      api.user_get_subscribes(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    userGetUpvotes({ commit }, id) {
      api.user_get_upvotes(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
  },
};
