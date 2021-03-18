/**
 * Custom redux middleware to log out all actions
 */

const debug = () => (next) => (action) => {
  console.log(`=== ACTION: ${action.type} ===`); // eslint-disable-line no-console
  console.log(action); // eslint-disable-line no-console
  next(action);
};

export default debug;
