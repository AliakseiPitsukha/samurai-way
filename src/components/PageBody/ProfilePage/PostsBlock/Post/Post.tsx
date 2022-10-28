import React from 'react';
import st from './Post.module.css'
import {PostType} from "../../../../ComponentsTypes";

export const Post:React.FC<PostType> = (props) => {
    return (
        <div className={st.post}>
            <img src={'https://cdn-icons-png.flaticon.com/512/147/147133.png'}/>
            <span className={st.textArea}>{props.message}</span>
            <div>{props.likesCount}</div>
        </div>
    );
};