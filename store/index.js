export const state = () => ({
  cart: [],
  fromOrigin: null,
  country: null,
  search: '',
  searchItems: [],
})

export const getters = {
  cart: (state) => {
    return state.cart
  },
  getFromOrigin: (state) => {
    return state.fromOrigin
  },
  getCountry: (state) => {
    return state.country
  },
}

export const mutations = {
  updateSearch: (state, payload) => {
    state.search = payload
  },
  addItem: (state, payload) => {
    state.cart.push(payload)
    console.log(state.cart)
  },
  editItem: (state, payload, index) => {
    state.cart.splice(index, 1, payload)
  },
  removeItem: (state, index) => {
    state.cart.splice(index, 1)
  },
  increaseItemQuantity: (state, index) => {
    state.cart[index].quantity++
  },
  decreaseItemQuantity: (state, index) => {
    state.cart[index].quantity--
  },
  clearCart: (state) => {
    state.cart = []
  },

  setFromOrigin: (state, payload) => {
    state.fromOrigin = payload
  },
  setCountry: (state, payload) => {
    state.country = payload
  },
}
