<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <GithubBtn />
    <hr>
    <h1>Option Store</h1>
    <h3>{{ count }}</h3>
    <h3>双倍：{{ double }}</h3>
    <div>
      <button @click="add">+1</button>
      <button @click="reduce">-1</button>
    </div>
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { GithubBtn } from '@/components'
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '@/store'

export default {
  name: 'App',
  computed: {
    ...mapState(useCounterStore, ['count', 'double']),
  },
  components: {
    HelloWorld,
    GithubBtn
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement']),
    add() {
      this.increment()
    },
    reduce() {
      this.decrement()
    },
  },
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
  display: flex;
  flex-direction: column;
  align-items: center;

}

button {
  background: #FBCA1F;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
}

button:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

button:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}
</style>
