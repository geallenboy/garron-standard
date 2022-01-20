"use strict";
var javascriptLint = require('./javascriptLint');
var prettierLint = require('./prettierLint');
var reactLint = require('./reactLint');
var styleLint = require('./styleLint');
var typescriptLint = require('./typescriptLint');
var vueLint = require('./vueLint');
module.exports = {
    javascriptLint: javascriptLint,
    prettierLint: prettierLint,
    reactLint: reactLint,
    styleLint: styleLint,
    typescriptLint: typescriptLint,
    vueLint: vueLint,
};
