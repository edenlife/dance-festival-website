const mixpanel = require('mixpanel-browser')
mixpanel.init('0dbc9d5e7fd428a3716831dfb6ad6508')

export const mixpanelTrackEvent = (name) => {
  mixpanel.track(name)
}

export const mixpanelTrackLink = (link, name) => {
  mixpanel.track_links(link, name, {
    referrer: document.referrer,
  })
}
