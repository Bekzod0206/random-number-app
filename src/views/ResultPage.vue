<template>
  <v-btn prepend-icon="mdi-home-search-outline" color="primary" @click="$router.push('/')">
    Home
  </v-btn>
  <div class="my-4">
    <h2>Тип: {{ factStore.type }}</h2>
    <h2>Число: {{ factStore.useRandom ? 'Random' : factStore.number }}</h2>
  </div>

  <v-progress-circular
    v-if="factStore.loading"
    indeterminate
    color="primary"
    size="40"
    class="my-4"
  />

  <v-alert v-else-if="factStore.error" type="error" class="my-4">
    {{ factStore.error }}
  </v-alert>

  <v-alert v-else-if="factStore.fact" type="info" class="my-4">
    {{ factStore.fact }}
  </v-alert>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useFactStore } from '../store/factStore.ts'

const factStore = useFactStore()

onMounted(() => {
  factStore.fetchFact()
})
</script>
