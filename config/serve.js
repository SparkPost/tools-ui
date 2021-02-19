// TODO: Either install this as a dev dependency, or get it working from the global install directory.
const server = require('pushstate-server');

server.start({
  port: 3000,
  directory: './build'
});
