import React from 'react';
import cl from './Welcome.module.css'
import LeftWelcomeClothes from '../../../img/LandingPage/Left_welcome_clothes.jpg'
import RightWelcomeClothes from '../../../img/LandingPage/Right_welcome_clothes.jpg'

function Welcome() {

    return (
        <section className={cl.welcome}>
            <div className={cl.left_part}>
                <img src={LeftWelcomeClothes} alt="clothes" className={cl.left_img}/>
                <h1 className={cl.welcome_title}>
                    Добро пожаловать <br/> в <span className={cl.cocteil}>Cocteil</span>    
                </h1>
                <div className={cl.text_container}>
                    <p className={cl.welcome_text}>
                        Экономим Ваше время! <br/> 
                        Доставляем в кратчайшие сроки! <br/> 
                        Предлагаем лучшие цены! 
                    </p>
                </div>
            </div>

            <div className={cl.right_part}>
                <img src={RightWelcomeClothes} alt="clothes" className={cl.right_img}/>
            </div>
            
        </section>
    );
}

export default Welcome;