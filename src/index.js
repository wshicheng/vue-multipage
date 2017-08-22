import _ from 'lodash'
import printMe from './print.js'
function component() {
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  btn.innerHTML = 'Click me and check the console!'
  btn.classList.add('hello');
  btn.onclick = printMe;
  return btn;
}

document.body.appendChild(component());