import React from 'react';
import './App.css';
import {Content} from './components/Content/Content';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header className='header'/>
            <Navbar className='navbar'/>
            <Content className='content'/>
        </div>
    );
}

export default App;