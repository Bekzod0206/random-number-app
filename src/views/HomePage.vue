<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useFactStore } from "../store/factStore.ts"

const router = useRouter()
const factStore = useFactStore()

const submit = () => {
  if (!factStore.useRandom && !/^\d+$/.test(factStore.number)) {
    alert('Число должно быть в виде цифры')
    return
  }

  router.push('/result')
}
</script>

<template>
  <div class="md:grid md:grid-cols-2 gap-6">
    <v-select v-model="factStore.type" :items="['math', 'trivia', 'date']" label="Type" />
    <v-text-field v-model="factStore.number" label="Number" :disabled="factStore.useRandom" />
  </div>
  <v-checkbox v-model="factStore.useRandom" label="Use random number" />
  <v-btn prepend-icon="mdi-magnify" color="primary" @click="submit">
    Search
  </v-btn>
</template>
