import React from 'react';
import './App.css';
import {ProfilePage} from './components/PageBody/ProfilePage/ProfilePage';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {BrowserRouter, Route} from "react-router-dom";
import {OopsPage} from "./components/PageBody/OoopsPage/OopsPage";
import {DialogsPage} from "./components/PageBody/DialogPage/DialogsPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <SideBar/>
                <div className='app-wrapper-pageBody'>
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/dialogs' component={DialogsPage}/>
                    <Route path='/news' component={OopsPage}/>
                    <Route path='/music' component={OopsPage}/>
                    <Route path='/settings' component={OopsPage}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;