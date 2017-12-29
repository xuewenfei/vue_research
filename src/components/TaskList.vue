<template>
  <div>
    <p>列表页面</p>
    <ul>
      <li v-for="task in tasks">
        <a :href="task.url" >
          {{task.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      tasks:
      [
        {
          id: 1,
          url: '/#tasks/1',
          name: 'task1'
        },
        {
          id: 2,
          url: '/#tasks/1',
          name: 'task2' }
      ]
    }
  }

}
</script>
