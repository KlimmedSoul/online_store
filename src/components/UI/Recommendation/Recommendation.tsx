import React from 'react';
import cl from './Recommendation.module.css'
import CardProd from '../BuyNow/CardProd/CardProd';

const Recommendation: React.FC = () => {

    return (
        <div className={cl.root}>
            <h1 className={cl.title}>Может, что-то еще</h1>
            <CardProd/>
        </div>
    );
}

export default Recommendation