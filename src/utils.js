const fs = require('fs');
const path = require('path');
const config = require('./config.js');

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

function makeDirectory(path) {
  fs.mkdirSync(path, { recursive: true });
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

module.exports = {
  formatName,
  getComponentPath,
  makeDirectory,
};
