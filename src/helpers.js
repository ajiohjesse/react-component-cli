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
    console.info('\n');

    console.info('----------------');
    console.info('COMMANDS');
    console.info('----------------');
    console.info(
      '✔️ Create component: crc <componentName>'
    );
    console.info(
      '✔️ Create plain component: crc <componentName> --plain'
    );
    console.info(
      '✔️ Create nested component: crc <componentName> foldername1 foldername2 ...'
    );
    console.info('✔️ Help: crc -help or crc --help');
    console.info('✔️ version: crc -v or crc --v');

    console.info('\n');

    console.info('----------------');
    console.info('CONFIG');
    console.info('----------------');

    console.info(`Create a global crc.config.json file
in the root folder of your computer 
or a project specific one in the root
directory of your project with the 
following options.`);

    console.info('\n');

    console.info({
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
