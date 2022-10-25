import React from 'react';
import st from './DialogPage.module.css'
import {DialogsList} from "./DialogsList/DialogsList";
import {ChatBlock} from "./ChatBlock/ChatBlock";

export const DialogsPage = () => {
    return (
        <div className={st.dialogPageContent}>
            <DialogsList/>
            <ChatBlock/>
        </div>
    );
};