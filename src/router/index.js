import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';
import SIMA_Notifications from "../Notifications/Notifications";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dash',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout/DashboardLayout.vue'),
    children:[
      {
      path: "about",
      name: "About",
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
     meta:{requiresAuth:true}
    },
    {
      path: '/pond',
      name: 'Pond',
      component: () => import(/* webpackChunkName: "about" */ '../views/PondView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/user',
      name: 'User',
      component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/iot-module',
      name: 'IOT',
      component: () => import(/* webpackChunkName: "about" */ '../views/ConfigurarModuloView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/historial',
      name: 'Historial',
      component: () => import(/* webpackChunkName: "about" */ '../views/HistorialView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/canastillas',
      name: 'Canastillas',
      component: () => import(/* webpackChunkName: "about" */ '../views/CanastillasView.vue'),
      meta:{requiresAuth:true}
    },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta:{requiresAuth:true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.afterEach((to, from, next) => {
  console.log('to',to)
  const{getters:{isLoggedIn,getUser}} = store;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if(to.path === "/login" && isLoggedIn){
      router.push({ path: '/' })
    }
  if (!isLoggedIn) {
     router.push({ path: '/login' })
    } else {
      SIMA_Notifications.init(getUser)
      next? next():null
    }
  } else {
    SIMA_Notifications.init(getUser)
    next? next():null
  }
})

export default router
