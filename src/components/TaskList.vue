<template>
  <div>
    <p>列表页面</p>
    <ul>
      <li v-for="task in tasks">
        <router-link :to="{name: 'task', params: {id: task.id}}">{{task.name}}</router-link>
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
          name: 'task1'
        },
        {
          id: 2,
          name: 'task2' }
      ]
    }
  },
  methods: {
  },
  beforeCreate () {
    console.log('List beforeCreate')
  },
  created () {
    console.log('List created')
  },
  beforeMount () {
    console.log('List beforeMounted')
  },
  mounted () {
    console.log('List mounted')
  },
  beforeUpdate () {
    console.log('List beforeUpdate')
  },
  updated () {
    console.log('List updated')
  },
  beforeDestroy () {
    console.log('List beforeDestroy')
  },
  destroyed () {
    console.log('List destroyed')
  }

}
</script>
