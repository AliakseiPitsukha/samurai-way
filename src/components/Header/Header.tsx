import React from "react";
import st from './Header.module.css'
import {HeaderPropsType} from "../ComponentsType";

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={st.header}>
            header
        </div>
    )
};