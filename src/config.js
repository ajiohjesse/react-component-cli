const path = require('path');
const fs = require('fs');

const defaultConfig = require('../config.json');
let userConfig = null;

const userConfigPath = path.resolve(
  process.cwd(),
  'crc.config.json'
);

if (fs.existsSync(userConfigPath)) {
  userConfig = require(userConfigPath);
}

//The user config overwrites the default
const config = Object.assign({}, defaultConfig, userConfig);

module.exports = config;
