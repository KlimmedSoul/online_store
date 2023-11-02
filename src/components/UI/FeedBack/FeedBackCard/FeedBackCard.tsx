import React from 'react';
import cl from './FeedBackCard.module.css'
import firstPic from '../../../../img/FeedBack/first_feedback_icon.svg'
import secondPic from '../../../../img/FeedBack/second_feedback_icon.svg'
import Star from '../../../../img/BuyNow/star.svg'

const FeedBackCard: React.FC = () => {

    const cards = [
        {
            id: 1,
            img: firstPic,
            stars: 4,
            text: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            name: "Анна Котлова",
            date: "23.05.2021"
        },
        {
            id: 2,
            img: secondPic, 
            stars: 5,
            text: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
            name: "Сергей Шуклин",
            date: "24.02.2022"
        }
    ]

    return (
        <div className={cl.cards_handler}>
            {cards.map(card => (
                <div className={cl.card}>
                    <div className={cl.img_handler}>
                        <img src={card.img} alt='icon'/>
                    </div>
                    <div className={cl.feedback_info}>

                        <div className={cl.stars_and_text}>
                            <div className={cl.stars_handler}>
                            {new Array(card.stars).fill(null).map((item, index) => (
                                    <img src={Star} alt="1" className={cl.star} />
                                ))}
                            </div>
                            <div className={cl.text_handler}>
                                <p className={cl.text}>{card.text}</p>
                            </div>
                        </div>

                        <div className={cl.name_and_date}>
                            <div className={cl.name_handler}>
                                <p className={cl.name}>{card.name}</p>
                            </div>
                            
                            <div className={cl.date_handler}>
                                <p className={cl.date}>{card.date}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
            <div className={cl.scroll_button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none" className={cl.arrow}>
                            <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                        </svg>
            </div>
        </div>
    );
}

export default FeedBackCard;