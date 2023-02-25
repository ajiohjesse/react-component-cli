const path = require('path');
const os = require('os');
const { requireOptional } = require('./utils');

const configDefaults = {
  src: true,
  extension: 'jsx',
  styleOption: 'plain',
};

const globalConfigPath = path.resolve(
  os.homedir(),
  'crc.config.json'
);

const localConfigPath = path.resolve(
  process.cwd(),
  'crc.config.json'
);

const localOverrides = requireOptional(localConfigPath);
const globalOverrides = requireOptional(globalConfigPath);

// Get the configuration for this component.
// Overrides are as follows:
//  - default values
//  - globally-set overrides
//  - project-specific overrides

const config = Object.assign(
  {},
  configDefaults,
  globalOverrides,
  localOverrides
);

module.exports = { config, configDefaults };
