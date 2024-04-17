import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import UserLogin from '../components/UserLogin.vue'
import UserSignup from '../components/UserSignup.vue'
import AdminLogin from '../components/AdminLogin.vue'
import UserDashboard from '../components/UserDashboard.vue'
import CreateSection from '../components/CreateSection.vue'
import CreateBook from '../components/CreateBook.vue'
import DeleteSection from '../components/DeleteSection.vue'
import DeleteBook from '../components/DeleteBook.vue'
import EditSection from '../components/EditSection.vue'
import EditBook from '../components/EditBook.vue'
import BookRating from '../components/BookRating.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import BookAllocation from '../components/BookAllocation.vue'
import SearchBooks from '../components/SearchBooks.vue'
import BookRequests from '../components/BookRequests.vue'
import MyBooks from '../components/MyBooks.vue'


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
      {
        path: '/delete/section/:sectionid',
        name: 'DeleteSection',
        component: DeleteSection
      },
      {
        path: '/delete/book/:bookid',
        name: 'DeleteBook',
        component: DeleteBook
      },
      {
        path: '/edit/section/:sectionid',
        name: 'EditSection',
        component: EditSection
      },
      {
        path: '/edit/book/:bookid',
        name: 'EditBook',
        component: EditBook
      },
      {
        path: '/rating/book/:bookid/:userid',
        name: 'BookRating',
        component: BookRating
      },
      {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard
      },
      {
        path: '/allocation',
        name: 'BookAllocation',
        component: BookAllocation    
      },
      {
        path: '/search',
        name: 'SearchBooks',
        component: SearchBooks
      },
      {
        path: '/requests',
        name: 'BookRequests',
        component: BookRequests    
      },
      {
        path: '/mybooks/:userid',
        name: 'MyBooks',
        component: MyBooks    
      },
  ]
  
  const router = createRouter({
    history: createWebHistory(''),
    routes
  })
  
  export default router