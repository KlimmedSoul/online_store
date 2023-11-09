import React, { useState } from "react";
import cl from './ModalLogin.module.css';
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

import ModalItems from "./ModalItems/ModalItems";

interface styles {
    setActive: React.Dispatch<React.SetStateAction<string>>;
    active: string;
}

const ModalLogin: React.FC<styles> = ({setActive, active}) => {

    
    const [activeModal, setActiveModal] = useState<string>('none')
    const [activeRegistration, setActiveRegistration] = useState<string>('none')

    const shutter = () => {
        setActiveModal('block')
        setActive('none')
    }

    return (
        <div className={cl.root}>
            <Login active={activeModal} login={setActiveModal} reg={setActiveRegistration}/>
            <Registration active={activeRegistration} reg = {setActiveRegistration} login={setActiveModal}/>
            <div className={cl.modal_login} style={localStorage.getItem('auth') === 'true' ? {height: '42%', display: active} : {height: '33%', display: active}}>

                <div className={cl.header_modal}>
                    <div className={cl.user_icon}/>
                    
                    {localStorage.getItem('auth') === 'false' || localStorage.getItem('auth') === null ? (<button className={cl.login_button}
                    onClick={shutter}
                    >Войти</button>) :
                    <h3 className={cl.title_name}>Test</h3>}
                </div>
                <div className={cl.var_handler}>
                    <ModalItems setActive={setActive} active={active}/>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin