// eslint-disable-next-line import/no-anonymous-default-export
export default ({ types = {}, initialState = {} }) => (state = initialState, action = {}) => {
  if (typeof types[action.type] === 'function') {
    return types[action.type](state, action);
  }

  return state;
};
