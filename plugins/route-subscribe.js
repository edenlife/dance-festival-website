export default ({ app }, inject) => {
  window.onNuxtReady(() => {
    const origin = document.referrer
    console.log({ origin })
    if (origin.includes('facebook')) {
      app.router.push('/signup')
    }
  })
}
