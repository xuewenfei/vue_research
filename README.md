# research
# first version
# open http://localhost:8081/#/tasks
Navigated to http://localhost:8081/
log.js?4244:23 [HMR] Waiting for update signal from WDS...
TaskList.vue?4049:31 List beforeCreate
TaskList.vue?4049:34 List created
TaskList.vue?4049:37 List mounted
vue.esm.js?efeb:8439 Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools

# click task1, http://localhost:8081/#/tasks/1
beforeRouteEnter
Task.vue?5828:15 Detail 1 beforeCreate
Task.vue?5828:18 Detail 1 created
TaskList.vue?4049:40 List beforeDestroy
TaskList.vue?4049:43 List destroyed
Task.vue?5828:21 Detail 1 mounted
Task.vue?5828:32 beforeRouteEntercallback

# reopen list, http://localhost:8081/#/tasks
List beforeCreate
TaskList.vue?4049:34 List created
Task.vue?5828:24 Detail undefined beforeDestroy
Task.vue?5828:27 Detail undefined destroyed
TaskList.vue?4049:37 List mounted

# oepn task1, http://localhost:8081/#/tasks/1
beforeRouteEnter
Task.vue?5828:15 Detail 1 beforeCreate
Task.vue?5828:18 Detail 1 created
TaskList.vue?4049:40 List beforeDestroy
TaskList.vue?4049:43 List destroyed
Task.vue?5828:21 Detail 1 mounted
Task.vue?5828:32 beforeRouteEntercallback


#open task2,
Detail 2 beforeUpdate
Task.vue?e53e:30 Detail 2 updated
#history back
Detail 1 beforeUpdate
Task.vue?e53e:30 Detail 1 updated

#总结
如果下一次的路由和上一次的路由使用的组件是相同的话，
因为缓存的原因，不会执行creted的回调， 也不行行mounted回调
只执行update相关的回调

这样的话， 如果只是在created回调中fetch api data的话， 如果从
task1，直接跳转到task2，只能看到task1的内容，没有触发新的api调用






> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
