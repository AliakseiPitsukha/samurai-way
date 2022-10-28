import React from 'react';
import './App.css';
import {ProfilePage} from './components/PageBody/ProfilePage/ProfilePage';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {OopsPage} from "./components/PageBody/OoopsPage/OopsPage";
import {DialogsPage} from "./components/PageBody/DialogPage/DialogsPage";
import {Route} from "react-router-dom";
import {RootStateType} from "./components/ComponentsTypes";

const App:React.FC<RootStateType> = (props) => {
    const pageBodyContentLinks = [
        {path: '/profile', render: <ProfilePage
                profileData={props.profilePageData.profileData}
                postsBlockData={props.profilePageData.postsBlockData}/>},
        {path: '/dialogs', render: <DialogsPage />},
        {path: '/news', render: <OopsPage/>},
        {path: '/music', render: <OopsPage/>},
        {path: '/settings', render: <OopsPage/>},
    ]
    return (
            <div className='app-wrapper'>
                <Header/>
                <SideBar/>
                <div className='app-wrapper-pageBody'>
                    {pageBodyContentLinks
                        .map((el) =>
                        <Route path={el.path} render={()=>el.render}/>)}
                </div>
            </div>
    );
}

export default App;