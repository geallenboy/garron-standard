# garron/standard

> prettier，eslint，stylelint 的配置文件合集

## 使用

 `.eslintrc.js`

```js
const vue3Lint = require('@garron/standard/dist/vue3Lint');
module.exports = {
  ...vue3Lint,
};
```

 `.stylelintrc.js`

```js
const styleLint = require('@garron/standard/dist/styleLint');
module.exports = {
  ...styleLint,
};
```

 `.prettierrc.js`

```js
const prettierLint = require('@garron/standard/dist/prettierLint');

module.exports = {
  ...prettierLint,
};
```
