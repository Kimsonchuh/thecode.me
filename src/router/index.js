import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import _MainWrapperView from '../views/_MainWrapperView';

import NotFoundView from '../views/errors/NotFoundView';

import HomeIndexView from '../views/home/IndexView';

import TopicDetailView from '../views/topics/DetailView';

import ArticleDetailView from '../views/articles/DetailView';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: _MainWrapperView,
      children: [
        {
          path: '/',
          name: 'home_index',
          component: HomeIndexView,
        },
        {
          path: 'topics/:slug',
          name: 'topic_detail',
          component: TopicDetailView,
        },
        {
          path: 'articles/:slug',
          name: 'article_detail',
          component: ArticleDetailView,
        },
      ],
    },
    {
      path: '*',
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = store.state.account.auth;
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.check()) {
      next({
        path: '/account/login',
        query: { redirect_url: to.fullPath },
      });
      return;
    }
  }
  next();
});

export default router;
