const mixpanel = require('mixpanel-browser')
mixpanel.init('204d51e4df37fc97609ca3b79a3f45a0')

export const mixpanelTrackEvent = (name) => {
  mixpanel.track(name)
}

export const mixpanelTrackLink = (link, name) => {
  mixpanel.track_links(link, name, {
    referrer: document.referrer,
  })
}