import React from 'react';
import {NavbarPropsType} from "../ComponentsType";

export const Navbar = (props: NavbarPropsType) => {
    return (
        <div className={props.className}>
            <li>Profile</li>
            <li>News</li>
            <li>Messages</li>
            <li>Music</li>
            <li>Settings</li>
        </div>
    );
};