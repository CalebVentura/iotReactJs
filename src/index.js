// ESte archivo arranca la plataforma


import React from 'react'; // Llamando a React
import ReactDOM from 'react-dom'; // ESpecificar que queremos react para web

import './index.css'; //ARCHIVO CSS IMPORTADO DESDE JAVASCRIPT Webpack (Una forma de relacionar css js y html)

import App from './App'; // Importa una aplicacion desde app.js

import * as serviceWorker from './serviceWorker'; //Simular datos de forma local. Guarda de manera temporal los datos en la memoria local del computador
//PWA aplicaciones web progresivas para llevar una app web a uno movil

ReactDOM.render(<App />, document.getElementById('root')); // Renderizar la aplicación

serviceWorker.unregister();//Ejecución de serviceWorker
