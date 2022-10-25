import React from 'react';
import st from './SideBar.module.css'
import {SideBarPropsType} from "../ComponentsType";
import {NavLink} from "react-router-dom";

export const SideBar = (props: SideBarPropsType) => {
    return (
        <nav className={st.sidebar}>
            <div className={st.sidebarLink}>
                <NavLink to='/profile' activeClassName={st.active}>Profile</NavLink>
            </div>
            <div className={st.sidebarLink}>
                <NavLink to='/dialogs' activeClassName={st.active}>Messages</NavLink>
            </div>
            <div className={st.sidebarLink}>
                <NavLink to='/news' activeClassName={st.active}>News</NavLink>
            </div>
            <div className={st.sidebarLink}>
                <NavLink to='/music' activeClassName={st.active}>Music</NavLink>
            </div>
            <div className={st.sidebarLink}>
                <NavLink to='/settings' activeClassName={st.active}>Settings</NavLink>
            </div>
        </nav>
    );
};