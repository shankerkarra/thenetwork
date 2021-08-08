import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('LoginPage')
  },
  {
    path: '/profile',
    name: 'About',
    component: loadPage('ProfilePage')
  },
  {
    path: '/login',
    name: 'Login',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/search',
    name: 'Search',
    component: loadPage('SearchPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
