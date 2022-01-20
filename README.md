# garron/standard

> prettier，eslint，stylelint 的配置文件合集

## 使用

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@garron/standard/dist/javascriptLint')],

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@garron/standard/dist/styleLint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const garron = require('@garron/standard');

module.exports = {
  ...garron.prettierLint,
};
```
