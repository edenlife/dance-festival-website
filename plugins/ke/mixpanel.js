const mixpanel = require('mixpanel-browser')
mixpanel.init('c16b4674c30ea16107936190659c8600')

export const mixpanelTrackEvent = (name) => {
  mixpanel.track(name)
}

export const mixpanelTrackLink = (link, name) => {
  mixpanel.track_links(link, name, {
    referrer: document.referrer,
  })
}
