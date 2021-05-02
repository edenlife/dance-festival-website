export default ({ app }, inject) => {
  window.onNuxtReady(() => {
    const origin = document.referrer
    console.log({ origin })
    // app.store.commit('setFromOrigin', origin)
  })
}
