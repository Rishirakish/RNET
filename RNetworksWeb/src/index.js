import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxRoot from "./redux/rootRedux";
import * as serviceWorker from './registerServiceWorker';
//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
//import './utils/bootstrap.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootEl = document.getElementById("root");
ReactDOM.render(<ReduxRoot />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
