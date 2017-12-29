import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/TaskList'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskList
    },
    {
      path: '/tasks/:id',
      name: 'task',
      component: Task
    }
  ]
})
