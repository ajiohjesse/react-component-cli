# Bootstrap New React Components

The create-react-component cli allows you to easily
bootstrap new react components based on your specifications.

Run `crc <componentName>` from the bash terminal in the root
of your react project.

By default, every new component will be created in the
`src/components` path in a sub-folder of the same name,
along with a corresponding module.css file. i.e Running
`crc button` will create a button component in;

- src
  - components
    - button
      - button.jsx
      - button.module.css

```javascript
//button.jsx

import styles from './button.module.css';

const Button = () => {
  return (
    <div>
      <h1>button</h1>
    </div>
  );
};

export default Button;
```

> Note: The folder structure will be automatically created
> if it is not already available.

Every component is a react functional component. The default
file extension is `.jsx` but can be changed to `.tsx` if you
prefer working with typscript.

## Configuration

To change the default settings, create a `crc.config.json`
file in the root directory of your app with the following
options;

```javascript
//crc.config.json

{
  "src": true /** use the src folder */,
  "extension": "jsx" /** 'js' || 'jsx' || 'ts' || 'tsx' */,
  "styleOption": "css-modules" /** css-modules || styled-components || plain */
}
```

Edit the configuration based on your preference.

Setting the `"styleOption": "styled-components"` will result
in the following component structure;

```javascript
//button.jsx

import styled from 'styled-components';

export const Button = styled.div;
```

Setting the `"styleOption": "plain"` will result in the
following component structure;

```javascript
//button.jsx

const Button = () => {
  return (
    <div>
      <h1>button</h1>
    </div>
  );
};

export default Button;
```

## Nested Components

Most times, the component folder will comprise of nested
folders such as `components/general` and
`components/specific`. To target these nested folders when
creating a new component, provide the nested folders as
additional arguments to `crc <componentName>` in the order
in which they are nested.

**Example 1:** To create a new button component in
`components/general`, run `crc button general`

**Example 2:** You can also run
`crc PageLayout general layout` to create a PageLayout
component in `components/general/layout`. The layout folder
will be automatically created if it does not exist.

## Usability

This will not work with windows command prompt or
powershell. It has only been tested and confirmed to work
with Git Bash (this terminal comes along with git
installation).

Inspired by Josh Comeau's `new-component` avaialble via
[this respository]('https://github.com/joshwcomeau/new-component')

## Installation

To install this tool glabally, simply clone the repository
to your computer, open the folder in a terminal and run
`npm install -g`. You can now create new react components
from anywhere using `crc <componentName>` provided you are
using a bash terminal.
