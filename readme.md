# React Component CLI

Easily bootstrap new react components based on your
preferences.

## Usage

To create a button component, run the following command in
your terminal;

```bash
  crc button
```

- src
  - components
    - button.jsx

### For nested components

```bash
  crc PageLayout layouts
```

- src
  - components
    - layouts
      - PageLayout.jsx

## Installation

Clone the project

```bash
  git clone https://github.com/ajiohjesse/react-component-cli.git
```

Go to the project directory

```bash
  cd react-component-cli
```

Install as global

```bash
  npm install -g
```

Test your installation

```bash
  crc -v
```

## Configuration

Every new component is a react functional component. The
`src` folder is used by default and will be created if it
doesn't exist.

Default options can be changed by creating a
`crc.config.json` file in the root folder of your computer
(`C:\Users\username` for windows). This configuration will
be applied for every project.

To customize based on specific projects, create the
`crc.congig.json` file in the root of your React project
directory.

## Default Config

```json
{
  "src": true,
  "extension": "jsx",
  "styleOption": "plain"
}
```

## Reference

| Key           | Type      | Description                                                                                                                    |
| :------------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `boolean` | Use the `src` folder when creating new components.                                                                             |
| `extension`   | `string`  | The default file extension. Options are `js`, `jsx`, `ts`, or `tsx`.                                                           |
| `styleOption` | `string`  | Customize the component boiler plate based on prefered style option. Options are `plain`, `css-modules` or `styled-components` |

## Output

### plain

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

### css-modules

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

> **Note:** A corresponding `.module.css` file will be
> created and auto imported if style option is set to
> css-modules.

### styled-components

```javascript
//Button.jsx

import styled from 'styled-components';

const Button = () => {
  return (
    <ButtonWrapper>
      <h1>Button</h1>
    <ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  display: grid;
`
```

## Flags

`crc -v` - Check version

`crc -help` - See options

## Author

- [@ajiohjesse](https://www.github.com/ajiohjesse)

Inspired by Josh Comeau's `new-component` available via
<a href="https://github.com/joshwcomeau/new-component">this
repository.</a>
