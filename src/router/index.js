import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/TaskList'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tasks',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/tasks/:id',
      name: 'TaskDetail',
      component: Task
    }
  ]
})
