import React, { useState } from 'react';
import cl from './CardProd.module.css'
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Star from '../../../img/BuyNow/star.svg'

interface card {
    id: number;
    price: number,
    oldPrice: string,
    name: string,
    pic: any, 
    stars: number,
    favorite: boolean
}

const Favorite = (
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M10.8266 18.0166C10.7028 18.0162 10.5826 17.9752 10.4848 17.8999C7.36922 15.4999 5.22303 13.4333 3.72126 11.3944C1.80483 8.78883 1.36774 6.38328 2.42122 4.24439C3.17211 2.71661 5.3295 1.46661 7.85113 2.19439C9.0534 2.53869 10.1024 3.27705 10.8266 4.28883C11.5509 3.27705 12.5999 2.53869 13.8022 2.19439C16.3182 1.47772 18.4812 2.71661 19.2321 4.24439C20.2855 6.38328 19.8485 8.78883 17.932 11.3944C16.4303 13.4333 14.2841 15.4999 11.1685 17.8999C11.0707 17.9752 10.9505 18.0162 10.8266 18.0166ZM6.4166 3.09994C5.8166 3.07679 5.22156 3.21608 4.69536 3.50286C4.16917 3.78964 3.73169 4.21308 3.42987 4.72772C2.56131 6.49439 2.95357 8.46105 4.62905 10.7333C6.40963 13.0103 8.49465 15.0363 10.8266 16.7555C13.1583 15.038 15.2433 13.0139 17.0242 10.7388C18.7053 8.46105 19.092 6.49439 18.2234 4.73328C17.6631 3.62217 15.982 2.73883 14.1104 3.26105C13.5102 3.43689 12.9539 3.73534 12.4771 4.13721C12.0004 4.53907 11.6138 5.03545 11.3422 5.59439C11.3 5.69628 11.2281 5.78343 11.1358 5.84477C11.0436 5.9061 10.935 5.93885 10.8238 5.93885C10.7127 5.93885 10.6041 5.9061 10.5118 5.84477C10.4195 5.78343 10.3477 5.69628 10.3055 5.59439C10.036 5.03405 9.65001 4.53652 9.17296 4.1344C8.6959 3.73228 8.13851 3.43467 7.53732 3.26105C7.17308 3.15617 6.7959 3.10195 6.4166 3.09994Z" fill="#121212"/>
</svg>
)


const CardProd: React.FC<card> = ({id, price, oldPrice, name, pic, stars, favorite}) => {

    const items = sessionStorage.getItem('favorite')
    const oldFavorite = items !== null ? JSON.parse(items) : null
    
    const favoriteIndexes = []
    for (let i = 0; i < oldFavorite.length; i++){
        favoriteIndexes.push(oldFavorite[i].id)
    }

    const [favorites, setFavorites] = useState(oldFavorite)
    const [favoriteIndex, setFavoriteIndex] = useState(favoriteIndexes)
    
    const favoriteHandler = () => {
        const card = {
            id: id, 
            price: price, 
            pic: pic, 
            stars: stars,
            name: name,
            favorite: favorite
        }
        
        const oldFavorite = items !== null ? JSON.parse(items) : null

        let index = oldFavorite.findIndex((favor:any) => 
        favor.id === id &&
        favor.name === name &&
        favor.pic === pic &&
        favor.price === price &&
        favor.stars === stars
        );
        
        console.log(index);
        
        if (index !== -1 ) {
            oldFavorite.splice(index, 1)
            favoriteIndex.splice(index, 1)
            setFavorites([...oldFavorite])
            setFavoriteIndex([...favoriteIndex])
            sessionStorage.setItem('favorite', JSON.stringify([...oldFavorite]))
            alert("Удалено с избранных")
        } else {
            setFavorites([...oldFavorite, card])
            sessionStorage.setItem('favorite', JSON.stringify([...oldFavorite, card]))
            setFavoriteIndex([...favoriteIndex, id])
            alert("Добавлено в избранное")
        }
        // window.location.reload()

    }

    const btnHandler =  () => {
        const card = {
            id: id, 
            price: price, 
            pic: pic, 
            stars: stars,
            name: name,
            favorite: favorite
        }

        sessionStorage.setItem('card', JSON.stringify(card))
        window.location.href = 'http://localhost:3000/product'
    }

    const cartHandler = (pic: string, name: string, price: number, ) => {
        let flag = false
        const cart = sessionStorage.getItem('cart')
        const products = cart !== null ? JSON.parse(cart) : null
        let newCart;
        
        for(let i = 0; i < products.length; i++) {
            if(products[i].name === name && products[i].pic === pic && products[i].price === price) {
                products[i].count += 1
                flag = true 
                break;
            }
        }
        if (flag === false) {
            const cartItem = {
                name: name,
                size: '36',
                color: 'black',
                pic: pic,
                price: price,
                count: 1,
                favorite: favorite
            }
    
            newCart = [...products, cartItem]
            sessionStorage.setItem('cart', JSON.stringify(newCart))

        } else {
            newCart = [...products]
        }
        sessionStorage.setItem('cart', JSON.stringify(newCart))
        alert("Товар добавлен в корзину")
    }

    return (
        <div className={cl.prod_card}>
            <div className={cl.icon_handler}>
                <img src={pic} alt="icon" className={cl.prod_icon} />
            </div>
            <div className={cl.prices}>
                <p className={cl.new_price}>{price} Р</p>
                <p className={cl.old_price}>{oldPrice}</p>
            </div>
            <div className={cl.prod_name_handler}>
                <p className={cl.prod_name}>{name}</p>
                <div className={cl.prod_name_icons}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                style={favoriteIndex.includes(id) ? {stroke: "red"} : {stroke: "black"}} 
                onClick={() => favoriteHandler()}>
                    <path d="M10.8266 18.0166C10.7028 18.0162 10.5826 17.9752 10.4848 17.8999C7.36922 15.4999 5.22303 13.4333 3.72126 11.3944C1.80483 8.78883 1.36774 6.38328 2.42122 4.24439C3.17211 2.71661 5.3295 1.46661 7.85113 2.19439C9.0534 2.53869 10.1024 3.27705 10.8266 4.28883C11.5509 3.27705 12.5999 2.53869 13.8022 2.19439C16.3182 1.47772 18.4812 2.71661 19.2321 4.24439C20.2855 6.38328 19.8485 8.78883 17.932 11.3944C16.4303 13.4333 14.2841 15.4999 11.1685 17.8999C11.0707 17.9752 10.9505 18.0162 10.8266 18.0166ZM6.4166 3.09994C5.8166 3.07679 5.22156 3.21608 4.69536 3.50286C4.16917 3.78964 3.73169 4.21308 3.42987 4.72772C2.56131 6.49439 2.95357 8.46105 4.62905 10.7333C6.40963 13.0103 8.49465 15.0363 10.8266 16.7555C13.1583 15.038 15.2433 13.0139 17.0242 10.7388C18.7053 8.46105 19.092 6.49439 18.2234 4.73328C17.6631 3.62217 15.982 2.73883 14.1104 3.26105C13.5102 3.43689 12.9539 3.73534 12.4771 4.13721C12.0004 4.53907 11.6138 5.03545 11.3422 5.59439C11.3 5.69628 11.2281 5.78343 11.1358 5.84477C11.0436 5.9061 10.935 5.93885 10.8238 5.93885C10.7127 5.93885 10.6041 5.9061 10.5118 5.84477C10.4195 5.78343 10.3477 5.69628 10.3055 5.59439C10.036 5.03405 9.65001 4.53652 9.17296 4.1344C8.6959 3.73228 8.13851 3.43467 7.53732 3.26105C7.17308 3.15617 6.7959 3.10195 6.4166 3.09994Z" fill="#121212"/>
                </svg>

                    <ShoppingBag className={cl.icon_img} 
                    onClick={() => cartHandler(pic, name, price)}/>
                </div>
            </div>
            <div className={cl.footer_card}>
                <button className={cl.button_handler}
                onClick={btnHandler}>
                    <label className={cl.button_title}>Подробнее</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none" className={cl.arrow}>
                        <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212" />
                    </svg>
                </button>
                <div className={cl.stars}>
                    {new Array(stars).fill(null).map((item, index) => (
                        <img src={Star} alt="1" className={cl.star} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardProd;