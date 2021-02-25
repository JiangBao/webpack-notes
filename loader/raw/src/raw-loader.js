const { getOptions } = require('loader-utils');

module.exports = function(source) {
  const options = getOptions(this);
  const mimetype = options.mimetype || '';

  return `export default ${JSON.stringify(`data:${mimetype};base64,${source.toString('base64')}`)}`;
}

module.exports.raw = true;