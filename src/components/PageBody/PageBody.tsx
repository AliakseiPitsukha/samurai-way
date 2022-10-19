import React from 'react';
import st from './PageBody.module.css'
import {PageBodyPropsType} from "../ComponentsType";
import {ProfileBlock} from "./ProfileBlock/ProfileBlock";
import {PostsBlock} from "./PostsBlock/PostsBlock";

export const PageBody = (props: PageBodyPropsType) => {
    return (
        <div className={st.pageBody}>
            <ProfileBlock/>
            <PostsBlock/>
        </div>
    );
};