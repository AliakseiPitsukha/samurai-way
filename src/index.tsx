import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";

ReactDOM.render(
    <BrowserRouter>
        <App
            profilePageData={state.profilePageData}
            dialogPageData={state.dialogPageData}/>
    </BrowserRouter>,
    document.getElementById('root')
);