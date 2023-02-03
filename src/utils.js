const fs = require('fs');
const path = require('path');
const config = require('./config.js');
const package = require('../package.json');

//rest refers to additional args passed to the cli after
//component name and will be used as nested folders for the component
function getComponentPath(componentName, rest) {
  return path.resolve(
    process.cwd(),
    config.src
      ? 'src' + path.sep + 'components'
      : 'components',
    rest ? rest.join(path.sep) : '',
    config.styleOption === 'css-modules'
      ? componentName
      : ''
  );
}

function formatName(string) {
  const sentenceCase =
    string.charAt(0).toUpperCase() + string.slice(1);

  //camelize
  return sentenceCase.replace(
    /[^a-zA-Z0-9]+(.)/g,
    (_, chr) => chr.toUpperCase()
  );
}

function renderVersion(args) {
  if (args.includes('-v') || args.includes('--v')) {
    console.info(
      'create-react-component v',
      package.version
    );
    process.exit(0);
  }
}

function renderHelp(args) {
  if (args.includes('-help') || args.includes('--help')) {
    console.info('----------------');
    console.info('COMMANDS');
    console.info('----------------');
    console.info('Create component: crc <componentName>');
    console.info('Help: crc -help or crc --help');
    console.info('version: crc -v or crc --v');

    console.info('----------------');
    console.info('CONFIG');
    console.info('----------------');

    console.info(`Create a custom crc.config.json file
in the root of your project directory
to customize the default options.`);

    console.table({
      src: 'true || false',
      extension: 'jsx  || tsx || js || ts',
      styleOption:
        'css-modules || styled-components || plain',
    });

    process.exit(0);
  }
}

module.exports = {
  formatName,
  getComponentPath,
  renderVersion,
  renderHelp,
};
