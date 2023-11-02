import React from 'react';
import cl from './FeedBack.module.css'
import FeedBackCard from './FeedBackCard/FeedBackCard';
import FeedBackCardAddButton from './FeedBackCardAddButton/FeedBackCardAddButton';

const FeedBack: React.FC = () => {

    return (
        <div className={cl.root}>
            <div className={cl.title_handler}>
                <h1 className={cl.title}>Отзывы наших покупателей</h1>                
            </div>

            <div className={cl.center}>
                <FeedBackCard/>
            </div>

            <FeedBackCardAddButton/>
        </div>
    );
}

export default FeedBack;