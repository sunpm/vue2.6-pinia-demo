<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<h1>{{useCounterStore.count}}</h1>-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapStores } from 'pinia'
import { useCounterStore } from '@/store'

export default {
  name: 'App',
  computed: {
    ...mapStores(useCounterStore)
  },
  components: {
    HelloWorld
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
