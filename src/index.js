import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appData={window.appData} />, document.getElementById('root'));
//registerServiceWorker();

