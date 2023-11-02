import React from 'react';
import cl from './Сooperation.module.css'
import Settings from '@mui/icons-material/Settings';
import ListAlt from '@mui/icons-material/ListAlt';
import Groups from '@mui/icons-material/Groups2';
import Paid from '@mui/icons-material/Paid';

function Cooperation() {

    const actions = [
        {
            title: "Становитесь партнёром",
            text: "Регистрируйтесь и переходите в свой кабинет"
        },
        {
            title: "Рекламируйте товары",
            text: "Рекламируйте наши товары на форумах, сайтах, в социальных сетях"
        },
        {
            title: "Приводите покупателей",
            text: "Приводите покупателей на наш сайт по уникальной ссылке"
        },
        {
            title: "Получайте бонусы",
            text: "Копите бонусы от каждого оплаченного заказа"
        },
    ]

    const pluses = [
        {
            icon: Settings,
            title: "Автоматизация процессов"
        },
        {
            icon: ListAlt,
            title: "Пополнение ассортимента"
        },
        {
            icon: Groups,
            title: "Поддержка и обучение"
        },
        {
            icon: Paid,
            title: "Бонусы за новых клиентов"
        },
    ]

    return (
        <div className={cl.root}>
            <div className={cl.title_handler}>
                <h1 className={cl.title}>Сотрудничество с нами</h1>
                <p className={cl.title_text}>Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения.</p>
            </div>

            <div className={cl.actions}>
                {actions.map(action => (
                    <div className={cl.action}>
                        <h3 className={cl.action_title}>{action.title}</h3>
                        <p className={cl.action_text}>{action.text}</p>
                    </div>
                ))}
            </div>

            <div className={cl.pluses_handler}>
                <h1 className={cl.pluses_title}>Это выгодно. Какие преимущества?</h1>
                <div className={cl.pluses}>
                    {pluses.map(plus => (
                        <div className={cl.plus}>
                            <plus.icon className={cl.plus_icon}/>
                            <p className={cl.plus_text}>{plus.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cooperation;