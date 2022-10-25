import React from 'react';
import './App.css';
import {ProfilePage} from './components/PageBody/ProfilePage/ProfilePage';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {Dialogs} from "./components/PageBody/DialogPage/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SideBar/>
            <div className='app-wrapper-pageBody'>
                <Dialogs/>
                <ProfilePage/>
            </div>
        </div>
    );
}

export default App;