import React from 'react';
import {Post} from "./Post/Post";

export const PostsBlock = () => {
    return (
        <div>
            <>
                <textarea></textarea>
                <button>Add Post</button>
            </>
            <Post message={'bla bla bla'} likesCount={14}/>
            <Post message={'aklsdjhflkajshd'} likesCount={165}/>
        </div>
    );
};