const path = require('path');
const config = require('./config.js');
const package = require('../package.json');

//args refers to additional arguments passed to the cli after
//component name and will be used as nested folders for the component
function getComponentPath(
  componentName,
  args,
  prefersPlainComponent
) {
  return path.resolve(
    process.cwd(),
    config.src
      ? 'src' + path.sep + 'components'
      : 'components',
    args ? args.join(path.sep) : '',
    prefersPlainComponent
      ? ''
      : config.styleOption === 'css-modules'
      ? componentName
      : ''
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
  getComponentPath,
  renderVersion,
  renderHelp,
};
