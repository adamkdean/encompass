'use strict';

const fs = require('fs');

module.exports = exports = function encompass (path) {
  const stat = fs.statSync(path);
  if (stat.isDirectory()) {
    const entries = fs.readdirSync(path);
    let modules = {};
    entries.forEach((entry) => {
      const module = encompass(path + '/' + entry),
            name = entry.replace(/\.[^/.]+$/, '');
      modules[name] = module;
    });
    return modules;
  } else if (stat.isFile()) {
    return require(path);
  }
};
