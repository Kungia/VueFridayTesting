import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Sales from '../components/Sales.vue'
import Leasing from '../components/Leasing.vue'
import Vehicles from '../components/Vehicles.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Vehicles,
  },
  {
    path: '/sale',
    name: 'Sales',
    component: Sales,
  },
  {
    path: '/leasing',
    name: 'Leasing',
    component: Leasing,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
