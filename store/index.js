export const state = () => ({
  cart: JSON.parse(localStorage.getItem('cart')).cart || {},
})

export const getters = {
  cart: (state) => {
    return state.cart
  },
}

export const mutations = {
  addItem: (state, payload) => {
    if (state.cart[payload.id]) {
      state.cart[payload.id].quantity =
        state.cart[payload.id].quantity + payload.quantity
    } else {
      state.cart[payload.id] = {
        id: payload.id,
        image: payload.image,
        name: payload.name,
        amount: payload.amount,
        quantity: payload.quantity,
      }
    }
    localStorage.setItem('cart', JSON.stringify(state))
  },
  removeItem: (state, id) => {
    delete state.cart[id]
    localStorage.setItem('cart', JSON.stringify(state))
  },
  increaseItemQuantity: (state, key) => {
    state.cart[key].quantity++
    localStorage.setItem('cart', JSON.stringify(state))
  },
  decreaseItemQuantity: (state, key) => {
    state.cart[key].quantity--
    localStorage.setItem('cart', JSON.stringify(state))
  },
}
