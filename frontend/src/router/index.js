import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Job from "@/views/Job";
import JobEditor from "@/views/JobEditor";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job/:id',
    name:'Job',
    component: Job,
    props:true
  },
  {
    path: '/editor',
    name: 'JobEditor',
    component: JobEditor,
    props: true,
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
