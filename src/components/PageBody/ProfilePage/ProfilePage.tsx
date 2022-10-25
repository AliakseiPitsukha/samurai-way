import React from 'react';
import {ProfilePagePropsType} from "../../ComponentsType";
import {ProfileBlock} from "./ProfileBlock/ProfileBlock";
import {PostsBlock} from "./PostsBlock/PostsBlock";

export const ProfilePage = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileBlock/>
            <PostsBlock/>
        </div>
    );
};