const BASE_URL = process.env.VUE_APP_API
export const fetchWrapper = (url) => ({
  async _fetch(method, data = null) {
    const requestUrl = `${BASE_URL}${url}`
    const headers = {
      'Content-Type': 'application/json',
    }
    const options = {
      method,
      headers,
    }
    if (data) {
      options.body = JSON.stringify(data)
    }
    const response = await fetch(requestUrl, options)
    return await this._parseResponse(response)
  },
  async _parseResponse(response) {
    if (!response.ok) {
      return
    }
    return await response.json()
  },
  get() {
    return this._fetch('GET')
  },
  post(data) {
    return this._fetch('POST', data)
  },
  put(data) {
    return this._fetch('PUT', data)
  },
  delete() {
    return this._fetch('DELETE')
  },
})
