"use strict";
var javascriptLint = require('./javascript');
var prettierLint = require('./prettier');
var reactLint = require('./react');
var styleLint = require('./stylelint');
var typescriptLint = require('./typescript');
var vueLint = require('./vue');
module.exports = {
    javascriptLint: javascriptLint,
    prettierLint: prettierLint,
    reactLint: reactLint,
    styleLint: styleLint,
    typescriptLint: typescriptLint,
    vueLint: vueLint,
};
