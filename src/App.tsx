import React from 'react';
import './App.css';
import {PageBody} from './components/PageBody/PageBody';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SideBar/>
            <PageBody/>
        </div>
    );
}

export default App;