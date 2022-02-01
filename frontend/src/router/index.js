import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Post from '../components/Post.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/post', 
        name: 'Post', 
        component: Post
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      }
    ]
  })
  
  export default router;