export const initFbsdk = () => {
  return new Promise((resolve) => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '273029360956725',
        xfbml: true,
        cookie: true,
        version: 'v10.0',
      })
      FB.AppEvents.logPageView()
    }
    ;(function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      const js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  })
}
export const fbSdk = () => {
  initFbsdk()
  setTimeout(() => {
    FB.XFBML.parse()
  }, 1000)
}
