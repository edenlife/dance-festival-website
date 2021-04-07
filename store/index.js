export const state = () => ({
  cart: process.browser ? JSON.parse(localStorage.getItem('cart')) : [],
  blogNavId: null,
})

export const getters = {
  cart: (state) => {
    return state.cart
  },
  blogNavId: (state) => {
    return state.blogNavId
  },
}

export const mutations = {
  addItem: (state, payload) => {
    state.cart.push(payload)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  removeItem: (state, index) => {
    state.cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  increaseItemQuantity: (state, index) => {
    state.cart[index].quantity++
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  decreaseItemQuantity: (state, index) => {
    state.cart[index].quantity--
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  clearCart: (state) => {
    state.cart = []
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  blogNavId: (state, payload) => {
    state.blogNavId = payload
  },
}
