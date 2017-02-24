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

// Tracks inspect success
export function trackSpfInspect(domain) {
  mixpanel.track('Tools SPF Inspect', { domain });
  return { type: 'MIXPANEL_SPF_INSPECT' };
}

// UI Mixpanel Events

// Tracks button clicks
// Some component must have prop track={true}
export function trackButtonClick(title, component) {
  mixpanel.track('Tools Button Click', { title, component });
  return { type: 'MIXPANEL_BUTTON_CLICK' };
}

// Tracks clicks on history list rows
export function trackSpfHistoryClick(domain) {
  mixpanel.track('Tools SPF History Click', { domain });
  return { type: 'MIXPANEL_SPF_HISTORY_CLICK' };
}
