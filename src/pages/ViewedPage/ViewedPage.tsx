import React, { useState } from "react";
import cl from './ViewedPage.module.css';
import Slide from "../../components/Slide";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";
import ModalItems from "../../components/UI/ModalLogin/ModalItems/ModalItems";
import CardProd from "../../components/UI/CardProd/CardProd";
import Title from "./Title/Title";

interface View {
    id: number, 
    price: number, 
    pic: string, 
    stars: number,
    name: string,
    favorite: boolean
}

const Viewed: React.FC = () => {
    
    const [active, setActive] = useState<string>('none')

    const items = sessionStorage.getItem('viewed')
    const viewed = items !== null ? JSON.parse(items) : null

    return (
        <Slide heightValue='100vh'>
            <Header/>
            <Title/>
            <section className={cl.main}>
                <div className={cl.left_menu}>
                    <ModalItems setActive={setActive} active={active}/>
                </div>
                <section className={cl.item_section}>
                    {viewed.map((view:View) => (
                        <CardProd id={view.id} oldPrice="" price={view.price} stars={view.stars} pic={view.pic} name={view.name} favorite={view.favorite}/>
                    ))}
                </section>  
            </section>  
            <Footer/>
        </Slide>
    )
}

export default Viewed