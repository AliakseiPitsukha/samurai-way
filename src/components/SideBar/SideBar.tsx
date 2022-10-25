import React from 'react';
import st from './SideBar.module.css'
import {SideBarPropsType} from "../ComponentsType";

export const SideBar = (props: SideBarPropsType) => {
    return (
        <nav className={st.sidebar}>
            <div className={st.sidebarLink}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={st.sidebarLink}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={st.sidebarLink}>
                <a href='/news'>News</a>
            </div>
            <div className={st.sidebarLink}>
                <a href='/music'>Music</a>
            </div>
            <div className={st.sidebarLink}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
};