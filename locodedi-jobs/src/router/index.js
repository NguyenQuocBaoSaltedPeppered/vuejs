import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import ErrorNotFound from '../views/ErrorNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetail',
    component: JobDetails,
    // Cho phép truyền parameters của route đó (id) vào component (JobDetails)
    // dưới dạng 1 prop
    props: true
  },
  // redirect
  {
    // Các đường dẫn truy cập vào '/all-jobs'
    // sẽ được redirect đến '/jobs'
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchall
  {
    // Khi các đường dẫn truy cập nằm ngoài các đường dẫn được liệt kê ở trên
    // dùng cathAll vs regular expression (Regex)
    path: '/:catchAll(.*)',
    component: ErrorNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
