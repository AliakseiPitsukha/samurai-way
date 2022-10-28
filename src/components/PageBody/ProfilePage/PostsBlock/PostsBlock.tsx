import React from 'react';
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../ComponentsTypes";

export const PostsBlock:React.FC<PostsDataType> = (props) => {
    return (
        <div>
            <>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </>
            {props.postsData.map( (post) =>
                <Post message={post.message} likesCount={post.likesCount}/>)}
        </div>
    );
};