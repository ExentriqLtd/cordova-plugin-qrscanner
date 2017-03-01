#!/usr/bin/env node

module.exports = function(context) {
  var execSync = require('child_process').execSync;
  execSync('cd ' +__dirname+ '; npm install; gulp');
};
