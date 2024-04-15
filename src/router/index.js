import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import UserLogin from '../components/UserLogin.vue'
import UserSignup from '../components/UserSignup.vue'
import AdminLogin from '../components/AdminLogin.vue'
import UserDashboard from '../components/UserDashboard.vue'
import CreateSection from '../components/CreateSection.vue'
import CreateBook from '../components/CreateBook.vue'


const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/login',
        name: 'UserLogin',
        component: UserLogin
      },
      {
        path: '/signup',
        name: 'UserSignup',
        component: UserSignup
      },
      {
        path: '/admin_login',
        name: 'AdminLogin',
        component: AdminLogin
      },
      {
        path: '/dashboard/:userid',
        name: 'UserDashboard',
        component: UserDashboard
      },
      {
        path: '/create/section',
        name: 'CreateSection',
        component: CreateSection
      },
      {
        path: '/create/book/:sectionid',
        name: 'CreateBook',
        component: CreateBook
      },
  ]
  
  const router = createRouter({
    history: createWebHistory(''),
    routes
  })
  
  export default router