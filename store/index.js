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
  greenhouse: {
    token: '',
    authenticated: false,
    location: '',
    user: {},
    reset_email: '',
    reset_code: '',
    success_state: '',
    location_areas: []
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
  getLocation: (state) => {
    return state.greenhouse.location
  },
  getGreenhouseSuccessState: (state) => {
    return state.greenhouse.success_state
  },
  getLocationAreas: (state) => {
    return state.greenhouse.location_areas
  }
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
  setGreenhouse: (state, payload) => {
    state.greenhouse.token = payload.token
    state.greenhouse.authenticated = !!payload.token
    state.greenhouse.location = payload.location
    state.greenhouse.user = payload.user
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
  setLocationAreas: (state, payload) => {
    state.greenhouse.location_areas = payload
  }
}
