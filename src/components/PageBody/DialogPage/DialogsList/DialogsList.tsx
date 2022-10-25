import React from 'react';
import st from './DialogsList.module.css'
import {NavLink} from "react-router-dom";

export const DialogsList = () => {
    let dialogUsers = [
        {id: 1, name: 'Horus Lupercal'},
        {id: 2, name: 'Leman Russ'},
        {id: 3, name: 'Ferrus Manus'},
        {id: 4, name: 'Fulgrim the Phoenician'},
        {id: 5, name: 'Vulkan'},
        {id: 6, name: 'Rogal Dorn'},
        {id: 7, name: 'Roboute Guilliman'},
        {id: 8, name: 'Sanguinius'},
        {id: 9, name: 'Lion El\'Jonson'},
        {id: 10, name: 'Perturabo'},
        {id: 11, name: 'Mortarion'},
        {id: 12, name: 'Lorgar Aurelian'},
        {id: 13, name: 'Jaghatai Khan'},
        {id: 14, name: 'Konrad Curze'},
        {id: 15, name: 'Angron'},
        {id: 16, name: 'Corvus Corax'},
        {id: 17, name: 'Alpharius Omegon'},
        {id: 18, name: 'Magnus the Red'},
    ]

    let path = (userID: number) => '/dialogs/' + userID

    return (
        <div className={st.dialogItems}>
            <div className={st.item}>
                {dialogUsers.map((user) => {
                        return (
                            <NavLink to={() => path(user.id)}
                                     activeClassName={st.active}
                            >
                                {user.name}
                            </NavLink>
                        )
                    }
                )}
            </div>
        </div>
    );
};