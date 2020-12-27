import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxRoot from "./redux/rootRedux";
import * as serviceWorker from './registerServiceWorker';




const rootEl = document.getElementById("root");
ReactDOM.render(<ReduxRoot />, rootEl);

serviceWorker.unregister();
