const { getOptions } = require('loader-utils');

module.exports = function(source) {
  const options = getOptions(this);
  source = source.replace(/\[name\]/g, options.keyword);

  return `export default ${JSON.stringify(source)}`;
}