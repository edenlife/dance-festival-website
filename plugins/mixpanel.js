const mixpanel = require('mixpanel-browser')
mixpanel.init('ffd103e7f1e36a707c13475ceca8aad1')

export const mixpanelTrackEvent = (name) => {
  mixpanel.track(name)
}

export const mixpanelTrackLink = (link, name) => {
  mixpanel.track_links(link, name, {
    referrer: document.referrer,
  })
}

// mixpanel.track('event name', {
//   distinct_id: 'unique client id',
//   property_1: 'value 1',
//   property_2: 'value 2',
//   property_3: 'value 3',
// })
// mixpanel.track_links('#nav a', 'click nav link', {
//   referrer: document.referrer,
// })
