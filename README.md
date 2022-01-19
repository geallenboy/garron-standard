# `standard`

> prettier，eslint，stylelint 的配置文件合集

## Usage

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@garron/standard/dist/eslint')],

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@garron/standard/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const fabric = require('@garron/standard');

module.exports = {
  ...fabric.prettier,
};
```
