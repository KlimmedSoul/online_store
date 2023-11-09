import React from "react";
import cl from './ModalItems.module.css';
import Cart from '@mui/icons-material/ShoppingBag';
import Favorite from '@mui/icons-material/Favorite';
import Viewed from '@mui/icons-material/Visibility';
import Bonus from '@mui/icons-material/MonetizationOn';
import Person from '@mui/icons-material/Person';
import History from '@mui/icons-material/InsertDriveFile';
import Logout from '@mui/icons-material/Logout';

interface styles {
    setActive: React.Dispatch<React.SetStateAction<string>>;
    active: string;
}

const ModalItems: React.FC<styles> = ({setActive, active}) => {

    const icons = [
        {id: 1, component: Cart, text: "Корзина", callback: 'http://localhost:3000/bag'},
        {id: 2, component: Favorite, text: "Избранное", callback: 'http://localhost:3000/favorite' },
        {id: 3, component: Viewed, text: "Просмотренные", callback: 'http://localhost:3000/viewed'},
        {id: 4, component: Bonus, text:"Бонусы"},
        {id: 5, component: Person, text:"Личные данные"},
        {id: 6, component: History, text: "История покупок"},
        {id: 7, component: Logout, text: "Выйти"},
    ]


    const logOut = () => {
        setActive('none')
        localStorage.setItem('auth', 'false')
    }
 
    return (
        <div>
            {icons.map(icon => (
                icon.id === 1 ?
                    <div>
                        <div className={cl.icon_holder} onClick={() => window.location.href = icon.callback!}>
                            <icon.component className={cl.btn} />
                            <p className={cl.icon_text}>{icon.text}</p>
                        </div> 
                        <hr className={cl.hr}/>
                    </div> 
                    : icon.id > 1 && icon.id <= 3 ? 
                        <div className={cl.icon_holder} onClick={() => window.location.href = icon.callback!}> 
                            <icon.component className={cl.btn}/>
                            <p className={cl.icon_text}>{icon.text}</p>
                        </div>
                    : icon.id === 4 && localStorage.getItem('auth') === 'true' ? 
                    <div>
                        <hr className={cl.hr}/>
                        <div className={cl.icon_holder} onClick={() => window.location.href = icon.callback!}>
                            <icon.component className={cl.btn}/>
                            <p className={cl.icon_text}>{icon.text}</p>
                        </div> 
                    </div>
                    : icon.id > 5 && icon.id < 7 && localStorage.getItem('auth') === 'true' ?
                    <div className={cl.icon_holder} onClick={() => window.location.href = icon.callback!}>
                        <icon.component className={cl.btn}/>
                        <p className={cl.icon_text}>{icon.text}</p>
                    </div>
                    : icon.id === 7 && localStorage.getItem('auth') === 'true'?
                    <div>
                        <hr className={cl.hr}/>
                        <div className={cl.icon_holder} onClick={logOut}>
                            <icon.component className={cl.btn}/>
                            <p className={cl.icon_text}>{icon.text}</p>
                        </div> 
                    </div>
                    : null
            ))} 
        </div>
    );
}

export default ModalItems