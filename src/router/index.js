import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Section1 from '@/views/Section1.vue'
import Section2 from '@/views/Section2.vue'
import Test from '@/views/Test.vue'
import Tasks from '@/views/Tasks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/section1',
    name: 'Section1',
    component: Section1
  },
  {
    path: '/section2',
    name: 'Section2',
    component: Section2
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  }
]

const router = new VueRouter({
  routes
})

export default router
