const { stringifyRequest } = require('loader-utils');

function loader(source) {};

loader.pitch = function(remainingRequest) {
  return `
    let style = document.createElement('style');
    const content = require(${stringifyRequest(this, '!!' + remainingRequest)});
    style.innerHTML = content.default;
    document.head.appendChild(style);
  `;
}

module.exports = loader;