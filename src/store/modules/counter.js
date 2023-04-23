import { defineStore } from 'pinia'
import { ref } from '@vue/composition-api'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)

    function increment() {
      count.value++
    }

    return { count, increment }
  }, {
    persist: true,
  },
)
