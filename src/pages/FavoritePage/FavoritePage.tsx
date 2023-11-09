import React, { useState } from "react";
import cl from './FavoritePage.module.css';
import Slide from "../../components/Slide";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";
import Title from "./Title/Title";
import ModalItems from "../../components/UI/ModalLogin/ModalItems/ModalItems";
import CardProd from "../../components/UI/CardProd/CardProd";

interface favor {
    id: number, 
    price: number, 
    pic: string, 
    stars: number,
    name: string,
    favorite: boolean
}


const Favorite: React.FC = () => {

    const [active, setActive] = useState<string>('none')
    
    const items = sessionStorage.getItem('favorite')
    const oldFavorite = items !== null ? JSON.parse(items) : null
    
    return (
        <Slide heightValue='100vh'>
            <Header/>
            <Title/>
            <section className={cl.main}>
                <div className={cl.left_menu}>
                    <ModalItems setActive={setActive} active={active}/>
                </div>
                <section className={cl.item_section}>
                    {oldFavorite.map((favorite:favor) => (
                        <CardProd id={favorite.id} oldPrice="" price={favorite.price} stars={favorite.stars} pic={favorite.pic} name={favorite.name} favorite={favorite.favorite}/>
                    ))}
                </section>
            </section>
            <Footer/>
        </Slide>
    )
}

export default Favorite