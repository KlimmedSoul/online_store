import React from 'react';
import cl from './Invite.module.css'

const Invite: React.FC = () => {

    return (
        <div className={cl.root}>
            <div className={cl.invite_window}>
                <div className={cl.title_handler}>
                    <h1 className={cl.title}>Приглашаем  к сотрудничеству производителей и поставщиков<br/> одежды, обуви и аксессуаров</h1>
                </div>
                <div className={cl.form_handler}>
                    <input className={cl.invite_input} placeholder='Ваше имя'/>
                    <input className={cl.invite_input} placeholder='Номер телефона'/>
                    <input className={cl.invite_input} placeholder='Электронная почта'/>
                    <div className={cl.checkbox_handler}>
                        <input type="checkbox" className={cl.invite_input_checkbox}/>
                        <p className={cl.checkbox_text}>Даю согласие на обработку персональных данных</p>
                    </div>
                </div>
                <div className={cl.button_handler}> 
                    <div className={cl.send_button}>
                        <p className={cl.button_title}>Отправить</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="5" viewBox="0 0 26 5" fill="none" className={cl.arrow}>
                            <path d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z" fill="#FFFDF5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invite;