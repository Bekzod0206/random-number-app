import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ResultPage from '../views/ResultPage.vue'

const routes = [
  { path: '/', name: "Home", component: HomePage },
  { path: '/result', name: "Result", component: ResultPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router