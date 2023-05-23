
import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {

  state: () => ({ count: 0, name: 'Eduardo' }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++
    },
  },

  persist: {
    storage: sessionStorage,
  },

})



// import { useCounterStore } from '@/stores/counter'
// const counterStore = useCounterStore()

// <button @click="counterStore.increment()">click me</button>