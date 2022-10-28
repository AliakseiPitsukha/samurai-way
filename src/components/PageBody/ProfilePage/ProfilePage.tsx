import React from 'react';
import {PostsBlock} from "./PostsBlock/PostsBlock";
import {ProfileBlock} from "./ProfileBlock/ProfileBlock";
import {ProfilePageType} from "../../ComponentsTypes";

export const ProfilePage:React.FC<ProfilePageType> = (props ) => {
    return (
        <div>
            <ProfileBlock name={props.profileData.name}/>
            <PostsBlock postsData={props.postsBlockData.postsData}/>
        </div>
    );
};