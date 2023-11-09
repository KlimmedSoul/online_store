import React from 'react';
import cl from './FeedBackAddButton.module.css'
const FeedBackAddButton: React.FC = () => {


    return (
        <button className={cl.button}>
            <label className={cl.label_button}>Добавить отзыв</label>
        </button>
    );
}

export default FeedBackAddButton;