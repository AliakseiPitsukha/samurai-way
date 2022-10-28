import React from 'react';
import st from './ChatBlock.module.css'

export const ChatBlock = () => {
    let messageData = [
        {id: 1, message: 'message 1'},
        {id: 2, message: 'message 2'},
        {id: 3, message: 'message 3'},
        {id: 4, message: 'message 4'},
        {id: 5, message: 'message 5'},
        {id: 6, message: 'message 6'},
    ]

    return (
        <div className={st.chatBlock}>
            <ul>
                {messageData.map( (el) =>
                    <li key={el.id}>
                        {el.message}
                    </li>
                )}
            </ul>
        </div>
    );
};