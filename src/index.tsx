import React from 'react';

import {Provider} from "react-redux";
import {store} from "./store";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';

import 'antd/dist/antd.css';
import './normalize.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
