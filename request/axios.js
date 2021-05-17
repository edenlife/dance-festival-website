import axios from 'axios'

const baseURL = 'https://api-staging.edenlife.ng/api/v3/website/'
const instance = axios.create({
  baseURL,
  crossdomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default instance
