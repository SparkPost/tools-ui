/* eslint-disable */
// ^ "complexity"
const validate = (values) => {
  const errors = {
    mx: {},
    a: {}
  };

  const domain = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i;

  // Test first domain input
  if (!domain.test(values.domain)) {
    errors.domain = 'Must be a valid domain';
  }

  // Example of a required field
  if (!values.domain) {
    errors.domain = 'Domain required';
  }

  // Test MX host field array
  const mxHostErrors = [];

  values.mx.hosts.forEach((host, index) => {
    const mxErrors = {};
    if (host.name && !domain.test(host.name)) {
      mxErrors.name = 'Invalid hostname';
      mxHostErrors[index] = mxErrors;
    }
  });

  if (mxHostErrors.length) {
    errors.mx.hosts = mxHostErrors;
  }

  // Test A host field array
  const aHostErrors = [];

  values.a.hosts.forEach((host, index) => {
    const aErrors = {};
    if (host.name && !domain.test(host.name)) {
      aErrors.name = 'Invalid hostname';
      aHostErrors[index] = aErrors;
    }
  });

  if (aHostErrors.length) {
    errors.a.hosts = aHostErrors;
  }

  return errors;
};

export default validate;
