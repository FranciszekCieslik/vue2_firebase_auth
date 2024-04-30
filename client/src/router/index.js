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
    component:AccountView,
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'SettingsView',
    component: SettingsView,
    meta: { requiresAuth: true }
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem("LookLoomUser")){
      next({
        path: '/denied'
      });
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
