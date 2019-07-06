const environments = {};

environments.dev = {
  port: 3000,
  envName: 'dev',
};

environments.production = {
  port: 5000,
  envName: 'production',
};

const nodeEnv = process.env.NODE_ENV;
const currentEnv = typeof(nodeEnv) === 'string' ? nodeEnv.toLowerCase() : '';

export default typeof(environments[currentEnv]) === 'object' ? environments[currentEnv] : environments.dev;
