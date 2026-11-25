<template>
  <div>
    <h1>Home</h1>
    <p class="lead">
      This app is rendered on the server (SSR).
    </p>
  </div>
</template>

<script setup lang="ts">
const { data: serverTime } = await useAsyncData('server-time', () => {
  return Promise.resolve(new Date().toISOString())
})
</script>

<style scoped>
h1 {
  font-size: 1.75rem;
  margin: 0 0 0.75rem;
}

.lead {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
</style>
