import { createRouter, createWebHistory } from 'vue-router'
import MovieDetailView from '../views/MovieDetailView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'movieDetail',
    component: MovieDetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
