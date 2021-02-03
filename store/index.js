export const state = () => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
})

export const getters = {
  cart: (state) => {
    return state.cart
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
}
