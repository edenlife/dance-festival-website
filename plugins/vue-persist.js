import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'eden-vuex',
      storage: window.localStorage,
    }).plugin(store)
  })
}
