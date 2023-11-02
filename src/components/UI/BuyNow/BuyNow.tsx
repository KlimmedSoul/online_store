import React from 'react';
import cl from './BuyNow.module.css'
import CardProd from './CardProd/CardProd';


const BuyNow: React.FC = () => {


    return (
        <div className={cl.root}>
            <h1 className={cl.title}>Успей купить!<br/>
                <span className={cl.discount_title}>Акция</span></h1>
                <CardProd/>
        </div>
    );
}

export default BuyNow;