import { defineStore } from 'pinia'
import { getNumberFact, getRandomFact } from "../api/numbersApi.ts"

export const useFactStore = defineStore('fact', {
  state: () => ({
    type: 'trivia',
    number: '',
    useRandom: false,
    fact: '',
    error: '',
    loading: false,
  }),
  actions: {
    setOptions(type: string, number: string, useRandom: boolean) {
      this.type = type
      this.number = number
      this.useRandom = useRandom
    },

    async fetchFact() {
      this.loading = true
      this.error = ''
      this.fact = ''

      try {
        if (this.useRandom) {
          this.fact = await getRandomFact(this.type)
        } else {
          if (!/^\d+$/.test(this.number)) {
            throw new Error('Число должно быть в виде цифры')
          }
          this.fact = await getNumberFact(this.type, this.number)
        }
      } catch (err: any) {
        this.error = err.message || 'Ошибка при получении данных'
      } finally {
        this.loading = false
      }
    },
  },
})
