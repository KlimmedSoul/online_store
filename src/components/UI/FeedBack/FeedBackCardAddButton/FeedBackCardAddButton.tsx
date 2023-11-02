import React from 'react';
import cl from './FeedBackCardAddButton.module.css'

const FeedBackCardAddButton: React.FC = () => {

    return (
        <div className={cl.button_handler}>
            <p className={cl.title}>Добавить отзыв</p>
        </div>
    );
}

export default FeedBackCardAddButton;