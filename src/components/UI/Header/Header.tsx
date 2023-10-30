import React from 'react';
import cl from './Header.module.css'
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Favorite from '@mui/icons-material/Favorite';
import Cart from '@mui/icons-material/ShoppingBag';
import Menu from '@mui/icons-material/Menu';

function Header() {

    const icons = [
        {id: 1, img: Person},
        {id: 2, img: Favorite},
        {id: 3, img: Cart},
    ]


    return (
        <div className={cl.header}>
            <div className={cl.menu}>
                <Menu className={cl.menu_icon}/>
            </div>
            <div className={cl.icons_and_search}>
                <div className={cl.search}>
                    <Search className={cl.icon}/>
                    <input className={cl.searc_input} placeholder='Поиск'/>
                </div>

                <div className={cl.icons}>
                    {icons.map(btn => (
                        <btn.img className={cl.icon}></btn.img>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;