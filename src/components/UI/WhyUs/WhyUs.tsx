import React from 'react';
import cl from './WhyUs.module.css'

function WhyUs() {

    const allTexts = [ 
        {
            id: 1, 
            textFirst: `Скидки постоянным`,
            textSecond: `клиентам от 5%`
        }, 
        {
            id: 2,
            textFirst: `Предлагаем самые`,
            textSecond: `выгодные цены`
        },
        {
            id: 3,
            textFirst: `Наши покупатели всегда`,
            textSecond: `остаются довольны`
        }, 
        {
            id: 4,
            textFirst: `Ширикий ассортимент`,
            textSecond: `товаров для всей семьи`
        }, 
        {
            id: 5,
            textFirst: `Возможность доставки в`,
            textSecond: `любой город Беларуси`
        },
        {
            id: 6, 
            textFirst: `Пункты выдачи заказов`,
            textSecond: `рядом с домом`
        }
    ]


    return (
        <div className={cl.root}>
            <h1 className={cl.title}>Почему выбирают нас?</h1>
            <div className={cl.upper_layer}>
                {allTexts.map(item => ( 
                    item.id <= 4 ?
                    <div className={cl.upper_layer_handler}>
                        <p className={cl.layer_text}>{item.textFirst}</p>
                        <p className={cl.layer_text}>{item.textSecond}</p>
                    </div>
                    : null
                ))}
            </div>
            <div className={cl.lower_layer}>
                {allTexts.map(item => (
                    item.id >= 5 ?
                    <div className={cl.lower_layer_handler}> 
                        <p className={cl.layer_text}>{item.textFirst}</p>
                        <p className={cl.layer_text}>{item.textSecond}</p>
                    </div> 
                    : null
                ))}
            </div>
        </div>
    );
}

export default WhyUs;