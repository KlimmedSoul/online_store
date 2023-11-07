import React from 'react';
import cl from './Registration.module.css'
import ExitButton from '../ExitButton/ExitButton';

interface styles {
    active: string;
    reg:  React.Dispatch<React.SetStateAction<string>>;
    login: React.Dispatch<React.SetStateAction<string>>;
}

const Registration: React.FC<styles> = ({active, reg, login}) => {

    const shutter = () => {
        reg('none')
        login('block')
    }

    return (
        <div className={cl.root} style={{display: active}}>
            <div className={cl.header_handler}>
                <div className={cl.title_handler}>
                    <h1 className={cl.title}>Регистрация</h1>
                </div>
                <div className={cl.button_handler}>
                    <ExitButton active={reg}/>
                </div>
            </div>
            <div className={cl.form}>
                <div className={cl.inputs_hanlder}>
                    <input className={cl.input} placeholder='ФИО'/>
                    <input className={cl.input} placeholder='Ваш полный адрес (только РБ)'/>
                </div>
                <div className={cl.inputs_hanlder}>
                    <input className={cl.input} placeholder='Контактный телефон'/>
                    <input className={cl.input} placeholder='Электронная почта'/>
                </div>
                <div className={cl.inputs_hanlder}>
                    <input className={cl.input} placeholder='Индекс'/>
                    <input className={cl.input} placeholder='Комментарий'/>
                </div>
                <div className={cl.buttons_handler}>
                    <div className={cl.btn_registration}>
                        <p className={cl.btn_registration_title}>Отправить</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none" className={cl.arrow}>
                            <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5"/>
                        </svg>
                    </div>
                    <div className={cl.btn_login} onClick={shutter}>
                        <p className={cl.btn_login_title}>Войти в кабинет</p>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Registration;