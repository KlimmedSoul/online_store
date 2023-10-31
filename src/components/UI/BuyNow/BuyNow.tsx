import React from 'react';
import cl from './BuyNow.module.css'
import firstProd from '../../../img/BuyNow/first_prod.jpg'
import secondProd from '../../../img/BuyNow/second_prod.jpg'
import thirdProd from '../../../img/BuyNow/third_prod.jpg'
import fourthProd from '../../../img/BuyNow/fourth_prod.jpg'
import Favorite from '@mui/icons-material/Favorite';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Star from '../../../img/BuyNow/star.svg'

const BuyNow: React.FC = () => {

    const cards = [
        {
            id: 1,
            newPrice: "2000.00 Р",
            oldPrice: "2500.00 Р",
            name: "Юбка сергея шуклина",
            pic: firstProd,
            stars: 4
        },
        {
            id: 2,
            newPrice: "1500.00 Р",
            oldPrice: "2000.00 Р",
            name: "Юбка сергея шуклина",
            pic: secondProd,
            stars: 3
        },
        {
            id: 3,
            newPrice: "3000.00 Р",
            oldPrice: "5000.00 Р",
            name: "Юбка сергея шуклина",
            pic: thirdProd,
            stars: 4
        },
        {
            id: 4,
            newPrice: "4000.00 Р",
            oldPrice: "4500.00 Р",
            name: "Юбка сергея шуклина",
            pic: fourthProd,
            stars: 2
        },
    ]




    return (
        <div className={cl.root}>
            <h1 className={cl.title}>Успей купить!<br/>
                <span className={cl.discount_title}>Акция</span></h1>
            <div className={cl.prod_handler}>
                {cards.map(prod => (
                    <div className={cl.prod_card}>
                        <div className={cl.icon_handler}>
                            <img src={prod.pic} alt="icon" className={cl.prod_icon} />
                        </div>
                        <div className={cl.prices}>
                            <p className={cl.new_price}>{prod.newPrice}</p>
                            <p className={cl.old_price}>{prod.oldPrice}</p>
                        </div>

                        <div className={cl.prod_name_handler}>
                            <p className={cl.prod_name}>{prod.name}</p>
                            <div className={cl.prod_name_icons}>
                                <Favorite className={cl.icon_img} />
                                <ShoppingBag className={cl.icon_img} />
                            </div>
                        </div>

                        <div className={cl.footer_card}>
                            <div className={cl.button_handler}>
                                <p className={cl.button_title}>Подробнее 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none" className={cl.arrow}>
                                        <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212" />
                                    </svg>
                                </p>
                            </div>
                            <div className={cl.stars}>
                                {new Array(prod.stars).fill(null).map((item, index) => (
                                    <img src={Star} alt="1" className={cl.star} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BuyNow;