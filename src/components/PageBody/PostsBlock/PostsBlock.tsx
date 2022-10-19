import React from 'react';
import {Post} from "./Post/Post";

export const PostsBlock = () => {
    return (
        <div>
            <>
                <textarea></textarea>
                <button>Add Post</button>
            </>
            <Post/>
        </div>
    );
};