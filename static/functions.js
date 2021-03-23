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
    case id % 4:
      return {
        'background-color': '#FFF9F5',
      }
    case id % 3:
      return {
        'background-color': '#F7F8FE',
      }
    case id % 2:
      return {
        'background-color': '#F0FBFF',
      }
    default:
      return {
        'background-color': '#F0FBFF',
      }
  }
}

export const getNavigationColor = (path, category) => {
  if (path === '/') {
    return {
      'background-color': '#fff9f5',
    }
  } else if (path.includes('contact_us')) {
    return {
      'background-color': '#ffffff',
    }
  } else if (path.includes('faq')) {
    return {
      'background-color': '#F7FDFF',
    }
  } else if (path.includes('food')) {
    return {
      'background-color': '#F6FFFA',
    }
  } else if (path.includes('laundry')) {
    return {
      'background-color': '#F7F8FE',
    }
  } else if (path.includes('cleaning')) {
    return {
      'background-color': '#FFFCFA',
    }
  } else if (path.includes('checkout')) {
    return {
      'background-color': '#ffffff',
    }
  } else if (path.includes('gifts')) {
    return {
      'background-color': '#fff8f7',
    }
  } else if (path.includes('about_us')) {
    return {
      'background-color': '#F7FDFF',
    }
  } else if (path.includes('companies')) {
    return {
      'background-color': '#F7F8FE',
    }
  } else if (path.includes('pricing')) {
    return {
      'background-color': '#F6FFFA',
    }
  } else if (path.includes('terms_and_condition')) {
    return {
      'background-color': '#ffffff',
    }
  } else if (path.includes('blog')) {
    return {
      'background-color': '#F6FFFA',
    }
  }
}
