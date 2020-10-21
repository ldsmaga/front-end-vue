import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import CreateProduct from '../views/products/Create.vue'
import EditProduct from '../views/products/Edit.vue'
import ShowProduct from '../views/products/Show.vue'

import UpdateUser from '../views/user/Update.vue'

import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    alias: '/'
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) =>{
      if(!store.getters['auth/authenticated']){
        return next({
          name:'signin'
        })
      }
      next()
    }
  },
  //Rotas de produtos:
  {
    path: '/products/create',
    name: 'create',
    component: CreateProduct,
    beforeEnter: (to, from, next) =>{
      if(!store.getters['auth/authenticated']){
        return next({
          name:'signin'
        })
      }
      next()
    }
  },
  {
    path: '/products/edit/:id',
    name: 'edit',
    component: EditProduct,
    beforeEnter: (to, from, next) =>{
      if(!store.getters['auth/authenticated']){
        return next({
          name:'signin'
        })
      }
      next()
    }
  },
  {
    path: '/products/show/:id',
    name: 'show',
    component: ShowProduct,
    beforeEnter: (to, from, next) =>{
      if(!store.getters['auth/authenticated']){
        return next({
          name:'signin'
        })
      }
      next()
    }
  },


  //User
  
  {
    path: '/user/update',
    name: 'updateUser',
    component: UpdateUser,
    beforeEnter: (to, from, next) =>{
      if(!store.getters['auth/authenticated']){
        return next({
          name:'signin'
        })
      }
      next()
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router