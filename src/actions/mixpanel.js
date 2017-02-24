/* eslint-disable no-undef */

// Tracks page view
export function trackPageView(pathname) {
  mixpanel.track('Viewed Tools Page', { 'route': pathname });
  return { type: 'MIXPANEL_PAGE_VIEW' };
}

// Tracks successful login
// Does not track the button click or refreshed login
export function trackLogin() {
  mixpanel.track('Tools Login', {});
  return { type: 'MIXPANEL_LOGIN' };
}

// Tracks logout after button click
// Does not track silent log out
export function trackLogout() {
  mixpanel.track('Tools Logout', {});
  return { type: 'MIXPANEL_LOGOUT' };
}

// Tracks button clicks
// ie. share, refresh, copy, auth links
// Some component must have prop track={true}
export function trackButtonClick(title, component) {
  mixpanel.track('Tools Button Click', { title, component });
  return { type: 'MIXPANEL_BUTTON_CLICK' };
}
