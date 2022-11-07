const mixpanel = require('mixpanel-browser')
mixpanel.init('c6739f19f75b2f8d07fe76e4b063df7d')

export const mixpanelTrackEvent = (name) => {
  mixpanel.track(name)
}

export const mixpanelTrackLink = (link, name) => {
  mixpanel.track_links(link, name, {
    referrer: document.referrer,
  })
}