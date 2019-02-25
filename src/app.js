
import React from 'react';
import ReactDOM from 'react-dom';

console.log('App is running!');

const template = <p>This is jsx from webpack </p>;

const rootApp = document.getElementById('app');

ReactDOM.render(template,rootApp);

module.hot.accept();