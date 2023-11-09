
import React from "react";
import cl from './CardsCatalog.module.css'
import CardProd from "../../../components/UI/CardProd/CardProd";
import { cards } from './cards'
 
const CardsCatalog: React.FC = () => {
    return (
        <div className={cl.root}>
            {cards.map(card => (
                <CardProd favorite = {card.favorite} id={card.id} price={card.newPrice} oldPrice="" name={card.name} pic={card.pic} stars={card.stars}/>
            ))}
        </div>
    );
}

export default CardsCatalog