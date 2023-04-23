<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <button @click="add">+1</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '@/store'

export default {
  name: 'App',
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
    add() {
      this.increment()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
