import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export const formatNumber = (number) => {
  return number ? number.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0
}

export const currencyFormat = (number) => {
  return number ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0
}

export const scrollToApp = (id, description) => {
  mixpanelTrackEvent(`Get Started - (${description})`)
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    const scrollToElement = document.querySelector(id)
    scrollToElement.scrollIntoView()
  }

  if (/android/i.test(userAgent)) {
    window.open(
      ` https://play.google.com/store/apps/details?id=com.ouredenlife.app`
    )
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.open(`https://apps.apple.com/us/app/eden-life/id1482373755?ls=1`)
  }

  const scrollToElement = document.querySelector(id)
  scrollToElement.scrollIntoView()
}

export const placeholderColorMix = (id) => {
  const remainder = 0
  switch (remainder) {
    case id % 10:
      return {
        'background-color': 'rgba(33, 150, 83, 0.15)',
      }
    case id % 9:
      return {
        'background-color': 'rgba(242, 153, 74, 0.15)',
      }
    case id % 8:
      return {
        'background-color': 'rgba(235, 87, 87, 0.15)',
      }
    case id % 7:
      return {
        'background-color': 'rgba(47, 128, 237, 0.15)',
      }
    case id % 6:
      return {
        'background-color': 'rgba(155, 81, 224, 0.15)',
      }
    case id % 5:
      return {
        'background-color': 'rgba(94, 112, 101, 0.15)',
      }
    case id % 4:
      return {
        'background-color': 'rgba(121, 85, 72, 0.15)',
      }
    default:
      return {
        'background-color': '#EEEEEE',
      }
  }
}
