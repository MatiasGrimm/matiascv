import { createRouter, createWebHashHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
