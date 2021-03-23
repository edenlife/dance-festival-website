export const state = () => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  blogId: null,
  blogNavId: null,
})

export const getters = {
  cart: (state) => {
    return state.cart
  },
  blogId: (state) => {
    return state.blogId
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
  updateId: (state, payload) => {
    state.blogId = payload
  },
  blogNavId: (state, payload) => {
    state.blogNavId = payload
  },
}
