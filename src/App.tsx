import React from 'react';
import './App.css';
import {ProfilePage} from './components/PageBody/ProfilePage/ProfilePage';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Dialogs} from "./components/PageBody/DialogPage/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {OopsPage} from "./components/PageBody/OoopsPage/OopsPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <SideBar/>
                <div className='app-wrapper-pageBody'>
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={OopsPage}/>
                    <Route path='/music' component={OopsPage}/>
                    <Route path='/settings' component={OopsPage}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;