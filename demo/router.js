import Router from 'vue-router'
import Index from './pages/Index'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

console.log(routes)

export default new Router({
  base: '/tailwind-css-vue/',
  routes
})
