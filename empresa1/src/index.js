import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Row1 from './rows/row1.js';
import Row2 from './rows/row2.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Row1 />, document.getElementById('row1'));
ReactDOM.render(<Row2 />, document.getElementById('row2'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
