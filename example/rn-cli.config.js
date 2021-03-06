const path = require('path');
const escape = require('escape-string-regexp');
const blacklist = require('metro/src/blacklist');
const pak = require('../package.json');

const dependencies = Object.keys(pak.dependencies);
const peerDependencies = Object.keys(pak.peerDependencies);

module.exports = {
  getProjectRoots() {
    return [__dirname, path.join(__dirname, '..')];
  },
  getProvidesModuleNodeModules() {
    return [...dependencies, ...peerDependencies];
  },
  getBlacklistRE() {
    return blacklist([
      new RegExp(
        `^${escape(path.resolve(__dirname, '..', 'node_modules'))}\\/.*$`
      ),
    ]);
  }
};