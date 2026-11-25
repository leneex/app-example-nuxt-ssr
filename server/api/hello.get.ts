export default defineEventHandler(() => {
  return {
    message: 'Hello from the Nuxt API (runs on the server)',
    at: new Date().toISOString(),
  }
})
