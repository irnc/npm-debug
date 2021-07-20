// node src/enabled.js
// DEBUG=npm-debug node src/enabled.js
const debug = require('debug')('npm-debug');

const version = () => {
  console.log('version called');
  return process.version;
}

debug(`version: ${version()}`);

if (debug.enabled) {
  debug(`version: ${version()}`);
}
