import React from 'react';
import ReactDOM from 'react-dom';
import ExempleProps from './components/porps';

var dados = {
  name:"marcos",
  idade:"21",
  sexo: "M"  
}

ReactDOM.render(
  <React.StrictMode>
    <ExempleProps info={dados} />
  </React.StrictMode>,
  document.getElementById('root')
);

