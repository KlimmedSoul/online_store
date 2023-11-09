import React from 'react';
import cl from './FeedBackCard.module.css'

import Star from '../../../../img/BuyNow/star.svg'

interface feedback {
    id: number;
    img: any;
    stars: number;
    text: string;
    name: string;
    date: string
}

const FeedBackCard: React.FC<feedback> = ({id, img, stars, text, name, date}) => {

    return (
        <div className={cl.cards_handler} key={id}>
                <div className={cl.card}>
                    <div className={cl.img_handler}>
                        <img src={img} alt='icon'/>
                    </div>
                    <div className={cl.feedback_info}>

                        <div className={cl.stars_and_text}>
                            <div className={cl.stars_handler}>
                            {new Array(stars).fill(null).map((item, index) => (
                                    <img src={Star} alt="1" className={cl.star} />
                                ))}
                            </div>
                            <div className={cl.text_handler}>
                                <p className={cl.text}>{text}</p>
                            </div>
                        </div>

                        <div className={cl.name_and_date}>
                            <div className={cl.name_handler}>
                                <p className={cl.name}>{name}</p>
                            </div>
                            
                            <div className={cl.date_handler}>
                                <p className={cl.date}>{date}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
}

export default FeedBackCard;