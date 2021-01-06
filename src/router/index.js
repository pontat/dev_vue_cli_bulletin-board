import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PostsCreate from '../views/posts/Create.vue';
import PostsDetail from '../views/posts/Detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/create',
    name: 'PostsCreate',
    component: PostsCreate
  },
  {
    path: '/posts/:id',
    name: 'PostsDetail',
    component: PostsDetail
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
