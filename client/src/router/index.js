import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from "../views/SignIn.vue"
import LoginFailed from '@/views/LoginFailed.vue'
import AccessDenied from '@/views/AccessDenied.vue'
import AccountView from '@/views/AccountView.vue'
import SettingsView from '@/views/SettingsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path:'/loginfailed',
    name:'LoginFailed',
    component: LoginFailed
  },
  {
    path:'/denied',
    name:'AccessDenied',
    component:AccessDenied
  },
  {
    path:'/account',
    name:'AccountView',
    component:AccountView
  },
  {
    path: '/settings',
    name: 'SettingsView',
    component: SettingsView
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
