import React from 'react';
import cl from './FeedBack.module.css'
import FeedBackCard from './FeedBackCard/FeedBackCard';
import FeedBackAddButton from './FeedBackAddButton/FeedBackAddButton';
import firstPic from '../../../img/FeedBack/first_feedback_icon.svg'
import secondPic from '../../../img/FeedBack/second_feedback_icon.svg'

interface title {
    title: string;
}

const FeedBack: React.FC<title> = ({title}) => {

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
        },
        {
            id: 2,
            img: secondPic, 
            stars: 5,
            text: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
            name: "Сергей Шуклин",
            date: "24.02.2022"
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
        <div className={cl.root}>
            <div className={cl.title_handler}>
                <h1 className={cl.title}>{title}</h1>                
            </div>

            <div className={cl.center}>
                {cards.map(card => (
                    <FeedBackCard 
                    id={card.id}
                    img={card.img}
                    stars={card.stars}
                    text={card.text}
                    name={card.name}
                    date={card.date} />
                ))}
            </div>

            <FeedBackAddButton/>
        </div>
    );
}

export default FeedBack;