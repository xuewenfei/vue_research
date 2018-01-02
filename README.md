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
nothing
#history back
nothing




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
