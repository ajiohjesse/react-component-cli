#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const config = require('./src/config.js');
const getComponentTemplate = require('./src/templates.js');
const {
  getComponentPath,
  renderVersion,
  renderHelp,
} = require('./src/helpers.js');

//The rest of the arguments [...args] will be used to
//create nested folders for the component
let [_, __, componentName, ...args] = process.argv;

let prefersPlainComponent = false;

if (args.includes('--plain')) {
  prefersPlainComponent = true;
  args = args.filter(value => value !== '--plain');
}

// Check if component name is provided
if (!componentName) {
  console.error(
    'Please provide a component name like this: crc <name> or crc --help'
  );
  process.exit(0);
}

//if user requests version
renderVersion(process.argv);

//if user requests config help
renderHelp(process.argv);

const componentTemplate = getComponentTemplate(
  componentName,
  prefersPlainComponent
);

const componentPath = getComponentPath(
  componentName,
  args,
  prefersPlainComponent
);

//full path with filename and extension
const componentFullPath = path.resolve(
  componentPath,
  componentName + '.' + config.extension
);

//check if component already exists
if (fs.existsSync(componentFullPath)) {
  console.error('Component already exists.');
  process.exit(0);
}

//create component directory structure
fs.mkdirSync(componentPath, { recursive: true });

//create component
fs.writeFileSync(componentFullPath, componentTemplate);

//create stylesheet if css-modules is preferred
//but only if --plain is omited from cli args
if (
  config.styleOption === 'css-modules' &&
  !prefersPlainComponent
) {
  const stylesheetFullPath = path.resolve(
    componentPath,
    componentName + '.module.css'
  );

  fs.writeFileSync(stylesheetFullPath, '');
}

console.info(
  `${componentName} component created at ${componentPath}`
);
