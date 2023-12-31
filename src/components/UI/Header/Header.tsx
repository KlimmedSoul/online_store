import { useState } from 'react';
import cl from './Header.module.css'
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Favorite from '@mui/icons-material/Favorite';
import Cart from '@mui/icons-material/ShoppingBag';
import ModalLogin from '../ModalLogin/ModalLogin';
import FilterModal from '../FilterModal/FilterModal';

const Header: React.FC = () => {

    const [filters, setFilters] = useState<string>('none');
    const [active, setActive] = useState<string>('none');

    const shutter = () => {
        active === 'none' ? setActive('block') : setActive('none')
    }
    
    const icons = [
        {id: 1, img: Person, callback: shutter},   
        {id: 2, img: Favorite, callback: () => { window.location.href = 'http://localhost:3000/favorite/'}},
        {id: 3, img: Cart, callback: () => { window.location.href = 'http://localhost:3000/bag/'}},
    ]


    return (
        <header className={cl.header}>
            <div className={cl.modal_handler}>
                <ModalLogin setActive={setActive} active={active}/>
            </div>
            <div className={cl.header_items}>
                <div className={cl.menu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className={cl.menu_icon} onClick={ filters === 'none' ? () => setFilters('block') : () => setFilters('none')}>
                    <path d="M32 29H4C3.73478 29 3.48043 28.8946 3.29289 28.7071C3.10536 28.5196 3 28.2652 3 28C3 27.7348 3.10536 27.4804 3.29289 27.2929C3.48043 27.1054 3.73478 27 4 27H32C32.2652 27 32.5196 27.1054 32.7071 27.2929C32.8946 27.4804 33 27.7348 33 28C33 28.2652 32.8946 28.5196 32.7071 28.7071C32.5196 28.8946 32.2652 29 32 29Z" fill="#121212"/>
                    <path d="M32 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H32C32.2652 17 32.5196 17.1054 32.7071 17.2929C32.8946 17.4804 33 17.7348 33 18C33 18.2652 32.8946 18.5196 32.7071 18.7071C32.5196 18.8946 32.2652 19 32 19Z" fill="#121212"/>
                    <path d="M32 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H32C32.2652 7 32.5196 7.10536 32.7071 7.29289C32.8946 7.48043 33 7.73478 33 8C33 8.26522 32.8946 8.51957 32.7071 8.70711C32.5196 8.89464 32.2652 9 32 9Z" fill="#121212"/>
                </svg>
                    <FilterModal display = {filters}/>

                </div>
                <div className={cl.icons_and_search}>
                    <div className={cl.search}>
                        <Search className={cl.icon}/>
                        <input className={cl.searc_input} placeholder='Поиск'/>
                    </div>

                    <div className={cl.icons}>
                        {icons.map(btn => (
                            <btn.img
                            key={btn.id} 
                            className={cl.icon}
                            onClick = {
                                btn.callback
                            }
                            ></btn.img>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;