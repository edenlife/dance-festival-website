export const state = () => ({
  cart: {},
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
      return
    }
    state.cart[payload.id] = {
      id: payload.id,
      image: payload.image,
      name: payload.name,
      amount: payload.amount,
      quantity: payload.quantity,
    }
  },
  removeItem: (state, id) => {
    delete state.cart[id]
  },
}
