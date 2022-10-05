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
  fromOrigin: null,
  country: null,
  greenhouse: {
    token: '',
    user: {},
    reset_email: '',
    reset_code: '',
    success_state: '',
  },
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
  getFromOrigin: (state) => {
    return state.fromOrigin
  },
  getCountry: (state) => {
    return state.country
  },
  getGreenhouseToken: (state) => {
    return state.greenhouse.token
  },
  getGreenhouseUser: (state) => {
    return state.greenhouse.user
  },
  getGreenhouseResetEmail: (state) => {
    return state.greenhouse.reset_email
  },
  getGreenhouseResetCode: (state) => {
    return state.greenhouse.reset_code
  },
  getGreenhouseSuccessState: (state) => {
    return state.greenhouse.success_state
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
  setFromOrigin: (state, payload) => {
    state.fromOrigin = payload
  },
  setCountry: (state, payload) => {
    state.country = payload
  },
  setGreenhouseToken: (state, token) => {
    state.greenhouse.token = token
  },
  setGreenhouseUser: (state, user) => {
    state.greenhouse.user = user
  },
  setGreenhouseResetEmail: (state, payload) => {
    state.greenhouse.reset_email = payload
  },
  setGreenhouseResetCode: (state, payload) => {
    state.greenhouse.reset_code = payload
  },
  setSuccessState: (state, payload) => {
    state.greenhouse.success_state = payload
  },
  setGreenhouseLogout: (state) => {
    state.greenhouse.token = null
    state.greenhouse.user = {}
    state.greenhouse.reset_email = ''
    state.greenhouse.reset_code = ''
    state.greenhouse.success_state = ''
  },
}
