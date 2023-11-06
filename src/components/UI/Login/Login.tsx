import React from 'react';
import cl from './Login.module.css'
import ExitButton from '../ExitButton/ExitButton';

interface styles {
    active: string;
}

const Login: React.FC<styles> = ({active}) => {

    return (
        <div className={cl.root} style={{display: active}}>
            <div className={cl.header_handler}>
                <div className={cl.title_handler}>
                    <h1 className={cl.title}>Вход в личный кабинет</h1>
                </div>
                <div className={cl.button_handler}>
                    <ExitButton />
                </div>
            </div>
            <div className={cl.form}>
                <div className={cl.inputs_hanlder}>
                    <input className={cl.input} placeholder='Электронная почта'/>
                    <input className={cl.input} placeholder='Пароль'/>
                </div>
                <p className={cl.forget}>Не помню пароль</p>
                <div className={cl.buttons_handler}>
                    <div className={cl.btn_login}>
                        <p className={cl.btn_login_title}>Войти в кабинет</p>
                    </div>
                    <div className={cl.btn_registration}>
                        <p className={cl.btn_registration_title}>Регистрация</p>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Login;