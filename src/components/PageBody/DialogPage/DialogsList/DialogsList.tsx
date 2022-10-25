import React from 'react';
import st from './DialogsList.module.css'

export const DialogsList = () => {
    return (
        <div className={st.dialogItems}>
            <div className={st.item + ' ' + st.active}>Horus Lupercal</div>
            <div className={st.item}>Leman Russ</div>
            <div className={st.item}>Ferrus Manus</div>
            <div className={st.item}>Fulgrim</div>
            <div className={st.item}>Vulkan</div>
            <div className={st.item}>Rogal Dorn</div>
            <div className={st.item}>Roboute Guilliman</div>
            <div className={st.item}>Magnus the Red</div>
            <div className={st.item}>Sanguinius</div>
            <div className={st.item}>Lion El'Jonson</div>
            <div className={st.item}>Perturabo</div>
            <div className={st.item}>Mortarion</div>
            <div className={st.item}>Lorgar</div>
            <div className={st.item}>Jaghatai Khan</div>
            <div className={st.item}>Konrad Curze</div>
            <div className={st.item}>Angron</div>
            <div className={st.item}>Corvus Corax</div>
            <div className={st.item}>Alpharius Omegon</div>
        </div>
    );
};