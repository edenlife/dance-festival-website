export const state = () => ({
  cart: [],
  blogNavId: null,
  allPosts: [],
  featuredPost: null,
  popularPost: [],
  recommendedPost: [],
  homePosts: [],
  lifePosts: [],
  foodPosts: [],
  edenPosts: [],
})

export const getters = {
  cart: (state) => {
    return state.cart
  },
  blogNavId: (state) => {
    return state.blogNavId
  },
  getAllPosts: (state) => {
    return state.allPosts
  },
  getFeaturedPost: (state) => {
    return state.featuredPost
  },
  getPopularPost: (state) => {
    return state.popularPost
  },
  getRecommendedPost: (state) => {
    return state.recommendedPost
  },
  getHomePosts: (state) => {
    return state.homePosts
  },
  getLifePosts: (state) => {
    return state.lifePosts
  },
  getFoodPosts: (state) => {
    return state.foodPosts
  },
  getEdenPosts: (state) => {
    return state.edenPosts
  },
}

export const mutations = {
  addItem: (state, payload) => {
    state.cart.push(payload)
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
  blogNavId: (state, payload) => {
    state.blogNavId = payload
  },
  setAllPosts: (state, payload) => {
    state.allPosts = payload
  },
  setFeaturedPost: (state, payload) => {
    state.featuredPost = payload
  },
  setPopularPost: (state, payload) => {
    state.popularPost = payload
  },
  setRecommendedPost: (state, payload) => {
    state.recommendedPost = payload
  },
  setHomePosts: (state, payload) => {
    state.homePosts = payload
  },
  setLifePosts: (state, payload) => {
    state.lifePosts = payload
  },
  setFoodPosts: (state, payload) => {
    state.foodPosts = payload
  },
  setEdenPosts: (state, payload) => {
    state.edenPosts = payload
  },
}
