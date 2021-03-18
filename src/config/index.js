import defaultConfig from './default';
import development from './development';
import staging from './staging';
import production from './production';
import test from './test';
import _ from 'lodash';

const envs = { development, staging, production, test };
const getConfig = (env) => (
  _.merge({}, defaultConfig, envs[env])
);
const currentEnv = (process.env.NODE_ENV === 'test') ? 'test' : process.env.REACT_APP_ENV;

export default getConfig(currentEnv);
