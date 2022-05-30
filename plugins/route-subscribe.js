export default ({ app }, inject) => {
  window.onNuxtReady(() => {
    const origin = document.referrer
    if (origin.includes('facebook')) {
      app.router.push('/signup')
    }
  })
}
