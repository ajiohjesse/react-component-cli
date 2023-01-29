const config = require('./config.js');
const { formatName } = require('./utils.js');

const plainComponent = componentName => `const ${formatName(
  componentName
)} = () => {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  )
}

export default ${formatName(componentName)};
`;

const cssModuleComponent =
  componentName => `import styles from './${componentName}.module.css';  

const ${formatName(componentName)} = () => {
  return (
    <div classname={styles.${componentName}}>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${formatName(componentName)};
`;

const styledComponent =
  componentName => `import styled from 'styled-components';
  
export const ${formatName(componentName)} = styled.div\`\`

`;

function getComponentTemplate(componentName) {
  switch (config.styleOption) {
    case 'plain':
      return plainComponent(componentName);

    case 'css-modules':
      return cssModuleComponent(componentName);

    case 'styled-components':
      return styledComponent(componentName);

    default:
      return plainComponent(componentName);
  }
}

module.exports = getComponentTemplate;
