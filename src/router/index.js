import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@app/dashboard/routes'
import categories from '@app/categories/routes'
import auth from '@app/auth/routes'
import users from '@app/users/routes'

const routes = [
  ...dashboard,
  ...categories,
  ...auth,
  ...users
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
