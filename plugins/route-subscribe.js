export default ({ app }, inject) => {
  window.onNuxtReady(() => {
    const origin = window.location.origin
    if (!origin.includes('edenlife')) {
      app.router.push('/signup')
    }
  })
}
