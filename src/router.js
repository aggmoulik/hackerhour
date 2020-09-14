import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('./views/Schedule.vue')
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('./views/Speakers.vue')
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: () => import('./views/Contributors.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('./views/Blogs.vue')
    }
  ]
})
