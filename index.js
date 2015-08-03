var yaml = require('js-yaml');

module.exports = function(source) {
  var obj = yaml.load(source);
  return JSON.stringify(obj);
};
