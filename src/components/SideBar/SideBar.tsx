import React from 'react';
import st from './SideBar.module.css'
import {SideBarPropsType} from "../ComponentsType";

export const SideBar = (props: SideBarPropsType) => {
    return (
        <div className={st.sidebar}>
            <li>Profile</li>
            <li>News</li>
            <li>Messages</li>
            <li>Music</li>
            <li>Settings</li>
        </div>
    );
};