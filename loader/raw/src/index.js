import img from './webpack.png';

console.log(img);

const dom = `<img src='${img}' />`;

window.onload = function() {
  document.getElementById('img').innerHTML = dom;
};