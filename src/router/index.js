import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import New from '@/views/New'
import Task from '@/views/Task'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Tasks,
      name: 'tasks'
    },
    {
      path: '/new',
      component: New,
      name: 'new'
    },
    {
      path: '/task/:id',
      component: Task,
      name: 'task'
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
