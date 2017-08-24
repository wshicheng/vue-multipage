import _ from 'lodash'
import printMe from './print.js'
import './style.css';
function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['hello','webpack'],'')
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe;
  element.appendChild(btn)
  return element;
}
//document.body.appendChild(component());
let element = component()
document.body.appendChild(element)
if (module.hot) {
     module.hot.accept('./print.js', function() {
       console.log('Accepting the updated printMe module!');
       document.body.removeChild(element)
       element = component()
       document.body.appendChild(element)
     })
}

