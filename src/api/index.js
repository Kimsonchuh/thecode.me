import Vue from 'vue';
import VueResource from 'vue-resource';
import store from '../store';

Vue.use(VueResource);

Vue.http.options.root = process.env.API_URL;
Vue.http.interceptors.push((request, next) => {
  const auth = store.state.account.auth;
  if (auth.check()) {
    const accessToken = auth.jwt_token.access_token;
    Vue.http.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete Vue.http.headers.common.Authorization;
  }
  // continue to next interceptor
  next();
});

export default {
  // ACCOUNT
  account_register(params) {
    return Vue.http.post('account/register', params);
  },
  account_login(params) {
    return Vue.http.post('account/login', params);
  },
  account_logout() {
    return Vue.http.post('account/logout');
  },
  account_get_profile() {
    return Vue.http.get('account/profile');
  },
  account_update_profile(params) {
    return Vue.http.put('account/profile', params);
  },
  account_update_configs(params) {
    return Vue.http.put('account/configs', params);
  },
  account_password_reset(params) {
    return Vue.http.post('account/password_modify', params);
  },
  account_password_modify(params) {
    return Vue.http.post('account/password_modify', params);
  },
  // USERS
  user_get_entity(id) {
    return Vue.http.get(`users/${id}`);
  },
  user_establish_relationship(id, params) {
    return Vue.http.post(`users/${id}/relationship`, params);
  },
  user_get_followers(id) {
    return Vue.http.get(`users/${id}/followers`);
  },
  user_get_following(id) {
    return Vue.http.get(`users/${id}/following`);
  },
  user_get_topics(id) {
    return Vue.http.get(`users/${id}/topics`);
  },
  user_get_subscribes(id) {
    return Vue.http.get(`users/${id}/subscribes`);
  },
  user_get_upvotes(id) {
    return Vue.http.get(`users/${id}/upvotes`);
  },
  // TOPIC
  topic_get_lists() {
    return Vue.http.get('topics');
  },
  topic_create_entity(params) {
    return Vue.http.post('topics', params);
  },
  topic_delete_entity(id) {
    return Vue.http.delete(`topics/${id}`);
  },
  topic_update_entity(id, params) {
    return Vue.http.put(`topics/${id}`, params);
  },
  topic_get_entity(id) {
    return Vue.http.get(`topics/${id}`);
  },
  topic_article_get_lists(id) {
    return Vue.http.get(`topics/${id}/articles`);
  },
  topic_get_subscribers(id) {
    return Vue.http.get(`topics/${id}/subscribers`);
  },
  topic_subscribe(id) {
    return Vue.http.post(`topics/${id}/subscribe`);
  },
  topic_unsubscribe(id) {
    return Vue.http.post(`topics/${id}/unsubscribe`);
  },
  // ARTICLE
  article_get_lists() {
    return Vue.http.get('articles{?page}');
  },
  article_create_entity(params) {
    return Vue.http.post('articles', params);
  },
  article_delete_entity(id) {
    return Vue.http.delete(`articles/${id}`);
  },
  article_update_entity(id, params) {
    return Vue.http.put(`articles/${id}`, params);
  },
  article_get_entity(id) {
    return Vue.http.get(`articles/${id}`);
  },
  article_upvote(id) {
    const params = { type: 'up' };
    return Vue.http.post(`articles/${id}/votes`, params);
  },
  article_downvote(id) {
    const params = { type: 'down' };
    return Vue.http.post(`articles/${id}/votes`, params);
  },
  article_get_votes(id) {
    return Vue.http.get(`articles/${id}/votes`);
  },
  article_comment_get_lists(id) {
    return Vue.http.get(`articles/${id}/comments`);
  },
  article_comment_create_entity(id, params) {
    return Vue.http.post(`articles/${id}/comments`, params);
  },
  article_comment_delete_entity(id, commentId) {
    return Vue.http.delete(`articles/${id}/comments/${commentId}`);
  },
  article_viewer_get_lists(id) {
    return Vue.http.get(`articles/${id}/viewers`);
  },
  // TAG
  tag_get_lists() {
    return Vue.http.get('tags');
  },
  tag_create_entity(params) {
    return Vue.http.post('tags', params);
  },
  tag_get_entity(name) {
    return Vue.http.get(`tags/${name}`);
  },
  tag_article_get_lists(name) {
    return Vue.http.get(`tags/${name}/articles`);
  },
};
