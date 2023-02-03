#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const config = require('./src/config.js');
const getComponentTemplate = require('./src/templates.js');
const {
  getComponentPath,
  renderVersion,
  renderHelp,
} = require('./src/utils.js');

//The rest of the arguments will be used to
//create nested folders for the component
const [_, __, componentName, ...rest] = process.argv;

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
renderHelp(process.argv)

const componentTemplate =
  getComponentTemplate(componentName);

const componentPath = getComponentPath(componentName, rest);

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
if (config.styleOption === 'css-modules') {
  const stylesheetFullPath = path.resolve(
    componentPath,
    componentName + '.module.css'
  );

  fs.writeFileSync(stylesheetFullPath, '');
}

console.info(
  `${componentName} component created at ${componentPath}`
);
