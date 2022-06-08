import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout/DashboardLayout.vue'),
    children:[
      {
      path: "about",
      name: "About",
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
     meta:{requiresAuth:true}
    },
    {
      path: '/pond',
      name: 'Estanques',
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
      path: '/inventario',
      name: 'Inventario',
      component: () => import(/* webpackChunkName: "about" */ '../views/InventarioView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/canastillas',
      name: 'Canastillas',
      component: () => import(/* webpackChunkName: "about" */ '../views/CanastillasView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path: '/config-iot',
      name: 'ConfigIot',
      component: () => import(/* webpackChunkName: "about" */ '../views/SetConfigurarIotView.vue'),
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




export default router
