<template>
  <div>
    <p>详情页面:{{$route.params.id}}</p>
    <router-link to="/tasks">列表</router-link>
  </div>
</template>

<script>
// import router from '@/router/index'
export default {
  methods: {

  },
  beforeCreate () {
    console.log(`Detail ${this.$route.params.id} beforeCreate`)
  },
  created () {
    console.log(`Detail ${this.$route.params.id} created`)
  },
  beforeMount () {
    console.log(`Detail ${this.$route.params.id} beforeMounted`)
  },
  mounted () {
    console.log(`Detail ${this.$route.params.id} mounted`)
  },
  beforeUpdate () {
    console.log(`Detail ${this.$route.params.id} beforeUpdate`)
  },
  updated () {
    console.log(`Detail ${this.$route.params.id} updated`)
  },
  beforeDestroy () {
    console.log(`Detail ${this.$route.params.id} beforeDestroy`)
  },
  destroyed () {
    console.log(`Detail ${this.$route.params.id} destroyed`)
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next(vm => {
      console.log('beforeRouteEntercallback')
      vm.name = 'pcd1'
    })
  }

}
</script>
