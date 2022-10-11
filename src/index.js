import React from 'react';
import ReactDOM from 'react-dom/client';
function App (){
  return "Soy App"
}
const elmento_del_dom = document.getElementById('root');
const root = ReactDOM.createroot(document.getElementById ('root'));
root.render(
  <App />
)

