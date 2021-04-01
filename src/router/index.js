import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Datasets from '../views/Datasets.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/datasets',
    name: 'Datasets',
    component: Datasets,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
