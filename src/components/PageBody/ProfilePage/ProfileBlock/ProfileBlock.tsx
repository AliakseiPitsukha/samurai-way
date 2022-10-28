import React from 'react';
import {ProfileDataType} from "../../../ComponentsTypes";

export const ProfileBlock:React.FC<ProfileDataType> = (props) => {
    return (
        <div>
            <div>- background cover -</div>
            <div>
                <span>- avatar - </span>
                <span>{props.name}</span>
                <span>- description - </span>
            </div>
        </div>
    );
};