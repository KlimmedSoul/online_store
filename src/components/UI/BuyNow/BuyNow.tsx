import React from 'react';
import cl from './BuyNow.module.css'
import CardProd from '../CardProd/CardProd';
import firstProd from '../../../img/BuyNow/first_prod.jpg'
import secondProd from '../../../img/BuyNow/second_prod.jpg'
import thirdProd from '../../../img/BuyNow/third_prod.jpg'
import fourthProd from '../../../img/BuyNow/fourth_prod.jpg'

const BuyNow: React.FC = () => {

    const cards = [
        {
            id: 1,
            newPrice: 2000.00,
            oldPrice: "2500.00 Р",
            name: "Юбка сергея шуклина",
            pic: firstProd,
            stars: 4,
            favorite: false
        },
        {
            id: 2,
            newPrice: 1500.00,
            oldPrice: "2000.00 Р",
            name: "Юбка сергея шуклина",
            pic: secondProd,
            stars: 3,
            favorite: true
        },
        {
            id: 3,
            newPrice: 3000.00,
            oldPrice: "5000.00 Р",
            name: "Юбка сергея шуклина",
            pic: thirdProd,
            stars: 4,
            favorite: true
        },
        {
            id: 4,
            newPrice: 4000.00,
            oldPrice: "4500.00 Р",
            name: "Юбка сергея шуклина",
            pic: fourthProd,
            stars: 2,
            favorite: true
        },
        {
            id: 5,
            newPrice: 4000.00,
            oldPrice: "4500.00 Р",
            name: "Юбка сергея шуклина",
            pic: fourthProd,
            stars: 2,
            favorite: false
        },
        {
            id: 6,
            newPrice: 4000.00,
            oldPrice: "4500.00 Р",
            name: "Юбка сергея шуклина",
            pic: fourthProd,
            stars: 2,   
            favorite: false
        }
    ]

    return (
        <div className={cl.root}>
            <h1 className={cl.title}>Успей купить!<br/>
                <span className={cl.discount_title}>Акция</span></h1>
                <div className={cl.cards_handler}>
                    {cards.map(card => (
                        <CardProd favorite={card.favorite} id={card.id} price={card.newPrice} oldPrice={card.oldPrice} name={card.name} pic={card.pic} stars={card.stars}/>
                    ))}
                </div>
        </div>
    );
}

export default BuyNow;