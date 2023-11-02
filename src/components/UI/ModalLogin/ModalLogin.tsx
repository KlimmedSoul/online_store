import React, { useEffect } from "react";
import cl from './ModalLogin.module.css';
import Cart from '@mui/icons-material/ShoppingBag';
import Favorite from '@mui/icons-material/Favorite';
import Viewed from '@mui/icons-material/Visibility';

interface styles {
    active: string;
}

const ModalLogin: React.FC<styles> = ({active}) => {


    const icons = [
        {id: 1, component: Cart, text: "Корзина", class:cl.cart},
        {id: 2, component: Favorite, text: "Избранное", class:cl.favorite},
        {id: 3, component: Viewed, text: "Просмотренные", class:cl.viewed}
    ]


    return (
        <div className={cl.modal_login} style={{display: active}}>
            <div className={cl.header_modal}>
                <div className={cl.user_icon}/>
                <button className={cl.login_button}>Войти</button>
            </div>
            <div>
                {icons.map(icon => (
                    icon.id === 1 ?
                        <div>
                            <div className={cl.icon_holder}>
                                <icon.component className={icon.class}/>
                                <p className={cl.icon_text}>{icon.text}</p>
                            </div> 
                            <hr className={cl.hr}/>
                        </div> 
                        :
                        <div className={cl.icon_holder}> 
                            <icon.component className={icon.class}/>
                            <p className={cl.icon_text}>{icon.text}</p>
                        </div> 
                ))}
            </div>
        </div>
    );
}

export default ModalLogin