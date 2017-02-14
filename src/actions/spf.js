export function saveHistory(domain, status) {
  return {
    type: 'SPARKPOST_API_REQUEST',
    meta: {
      type: 'SPF_SAVE_HISTORY',
      url: '/messaging-tools/spf/history',
      method: 'post',
      data: { domain, status }
    }
  };
}

export function inspect(domain) {
  return {
    type: 'SPARKPOST_API_REQUEST',
    meta: {
      type: 'SPF_INSPECT',
      url: '/messaging-tools/spf/query',
      params: { domain },
      chain: {
        success: ({ dispatch, getState, results: { status } }) => {
          const { auth } = getState();
          if (auth.loggedIn) {
            dispatch(saveHistory(domain, status));
          }
        }
      }
    }
  };
}

export function expandAll() {
  return { type: 'SPF_TREE_EXPAND_ALL' };
}

export function collapseAll() {
  return { type: 'SPF_TREE_COLLAPSE_ALL' };
}

export function expand(id) {
  return { type: 'SPF_TREE_EXPAND', payload: id };
}

export function collapse(id) {
  return { type: 'SPF_TREE_COLLAPSE', payload: id };
}

export function getHistory() {
  return {
    type: 'SPARKPOST_API_REQUEST',
    meta: {
      type: 'SPF_GET_HISTORY',
      method: 'GET',
      url: '/messaging-tools/spf/history'
    }
  };
}
