import React from 'react';
import {Post} from "./Post/Post";

export const PostsBlock = () => {
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
            <Post message={'bla bla bla'} likesCount={14}/>
            <Post message={'aklsdjhflkajshd'} likesCount={165}/>
        </div>
    );
};