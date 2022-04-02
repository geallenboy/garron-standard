# garron/standard

> prettier，eslint，stylelint 的配置文件合集

## 使用

 `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@garron/standard/dist/javascriptLint')],

  rules: {
    // your rules
  },
};
```

 `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@garron/standard/dist/styleLint')],
  rules: {
    // your rules
  },
};
```

 `.prettierrc.js`

```js
const garron = require('@garron/standard/dist');

module.exports = {
  ...garron.prettierLint,
};
```
