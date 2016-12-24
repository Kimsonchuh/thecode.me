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
    NOTIFICATION_GET_LISTS_SUCCESS: (state, { data }) => {
      Vue.set(state, 'lists', data);
    },
    NOTIFICATION_GET_ENTITY_SUCCESS: (state, { data }) => {
      Vue.set(state, 'entity', data);
    },
  },
  actions: {
    notificationGetLists({ commit }) {
      api.notification_get_lists().then((response) => {
        commit(types.NOTIFICATION_GET_LISTS_SUCCESS, response.data);
      });
    },
    notificationDeleteEntity({ commit }, id) {
      api.notification_delete_entity(id).then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    notificationGetEntity({ commit }, id) {
      api.notification_get_entity(id).then((response) => {
        commit(types.NOTIFICATION_GET_ENTITY_SUCCESS, response.data);
      });
    },
    notificationGetCounts({ commit }) {
      api.notification_get_counts().then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
    notificationMarkAsRead({ commit }) {
      api.notification_mark_as_read().then((response) => {
        commit(types.REQUEST_SUCCESS, response.data);
      });
    },
  },
};
