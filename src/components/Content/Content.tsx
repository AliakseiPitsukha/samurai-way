import React from 'react';
import {ContentPropsType} from "../ComponentsType";

export const Content = (props: ContentPropsType) => {
    return (
        <div className={props.className}>
            <div>backstage + background</div>
            <div>
                <div>avatar</div>
                <div>description</div>
            </div>
            <div>
                posts block
            </div>
        </div>
    );
};