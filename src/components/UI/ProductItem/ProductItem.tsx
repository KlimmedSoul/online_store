import React, { useState } from 'react';
import cl from './ProductItem.module.css'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Star from '../../../img/BuyNow/star.svg'


const ProductItem: React.FC = () => {

    const colors = [
        {id: 1, color:'white', name:"белый"}, 
        {id: 2, color:'#121212',  name:"черный"}, 
        {id: 3, color:'#1FA68E',  name:"зеленый"}, 
        {id: 4, color:'#DC39CC',  name:"розовый"}, 
        {id: 5, color:'#FFF385',  name:"желтый"}
    ]
    
    const getCard = sessionStorage.getItem('card') 
    const card = getCard !== null ? JSON.parse(getCard) : null

    console.log(getCard);
    
    const sizes = [
        { id: 1, num: 42, letter: 'S' },
        { id: 2, num: 44, letter: 'M' },
        { id: 3, num: 46, letter: 'L' },
        { id: 4, num: 48, letter: 'XL' }
    ]

    const [favorite, setFavorite] = useState<boolean>(false)
    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [colorName, setColorName] = useState<string | null>(null)
    const [cart, addCart] = useState<boolean>(false)


    const colorHandler = (color:string | null, colorId:string | null) => {
        setSelectedColor(colorId)
        setColorName(color)
    }

    

    const cartButtonHandler = () => {
        
        if(selectedSize !== null && selectedColor !== null) {
            let flag = false
        
            const cart = sessionStorage.getItem('cart')
            const products = cart !== null ? JSON.parse(cart) : null

            let newCart;
            for(let i = 0; i < products.length; i++) {
                if(products[i].name === card.name && products[i].color === selectedColor && products[i].size === selectedSize) {
                    products[i].count += 1
                    flag = true 
                    break;
                }
            }
            if (flag === false) {
                const cartItem = {
                    name: card.name,
                    size: selectedSize,
                    color: selectedColor,
                    pic: card.pic,
                    price: card.price,
                    count: 1
                }
        
                newCart = [...products, cartItem]
                sessionStorage.setItem('cart', JSON.stringify(newCart))

            } else {
                newCart = [...products]
            }
            sessionStorage.setItem('cart', JSON.stringify(newCart))
            addCart(true)
            alert("Товар добавлен в корзину")
        } else {
            alert("Выберите цвет и размер, чтобы добавить товар в корзину")
        }
    }

 

    return (
        <div className={cl.root}>
            <div className={cl.title_handler}>
                <h1 className={cl.title}>{card.name}
                    <span className={cl.art}>Арт 06578990-086</span>
                </h1>
            </div>
            <section className={cl.main_section}>
                <div className={cl.img_handler}>
                    <img src={card.pic} className={cl.pic}/>
                </div>
                <div className={cl.info_handler}>
                    <h2 className={cl.price}>{card.price} Р</h2>
                    <div className={cl.color_handler}>
                        <h3 className={cl.block_title}>Цвета</h3>
                        <div className={cl.colors}>
                            {colors.map(color => (
                                <div className={cl.circle} style={
                                    selectedColor === color.name 
                                    ? 
                                    {backgroundColor: color.color, border: "3px solid rgb(255, 188, 188)"} 
                                    :
                                    {backgroundColor: color.color, border: "0.5px solid gray"}
                                }
                                onClick={
                                    selectedColor === color.name 
                                    ?
                                    () => colorHandler(null, null) 
                                    :
                                    () => colorHandler(color.color, color.name)
                                }
                                />
                            ))}
                        </div>
                    </div>
                    <div className={cl.size_handler}>
                        <h3 className={cl.block_title}>Размер</h3>
                        <div className={cl.sizes}>
                            {sizes.map(size => (
                                <div className={cl.size_box} 
                                style={ size.num === selectedSize ? {backgroundColor: "#514A7E"} : {backgroundColor: "#FFFDF5"}}
                                onClick={ size.num === selectedSize ? () => setSelectedSize(null) : () => setSelectedSize(size.num)}>
                                    <p className={cl.letter}
                                    style={ size.num === selectedSize ? {color: "#FFFDF5"} : {color: "#514A7E"}}>{size.letter}</p>
                                    <p className={cl.number}
                                    style={ size.num === selectedSize ? {color: "#FFFDF5"} : {color: "#7D7D7D"}}>{size.num}</p>
                                </div>
                            ))}
                        </div>

                        <button className={cl.size_table}>Таблица размеров</button>
                    </div>
                    <div className={cl.buttons_handler}>
                        <button className={cl.cart_button} 
                        onClick={cartButtonHandler}
                        style={cart === true ? {backgroundColor: "#FFFDF5"} : {backgroundColor: "#514A7E"}}
                        disabled={cart}>
                            <label className={cl.btn_title}
                            style={cart === true ? {color: "#514A7E"} : {color:"#FFFDF5"}}>В корзину</label> 
                            <ShoppingBag className={cl.bag} style={cart === true ? {color: "#514A7E"} : {color:"#FFFDF5"}}/> 
                        </button>
                        <div 
                        onClick={
                        favorite 
                        ? 
                        () => setFavorite(false) 
                        : 
                        () => setFavorite(true)}>
                            {favorite 
                            ? 
                            <Favorite className={cl.favorite_icon}/> 
                            : 
                            <FavoriteBorder className={cl.favorite_icon}/>}
                        </div>
                    </div>
                    <div className={cl.feedback_handler}>
                        <div>
                        {new Array(card.stars).fill(null).map((item, index) => (
                            <img src={Star} alt="1" className={cl.star} />
                        ))}
                        </div>
                        <div className={cl.feedbacks}>
                            <button className={cl.size_table}>Смотреть все отзывы</button>
                            <button className={cl.size_table}>Добавить отзыв</button>
                        </div>
                    </div>
                    <div className={cl.discription_handler}>
                        <h2 className={cl.block_title}>Описание</h2>
                        <p className={cl.discription}>
                            Здесь будет какое-то неболшое описание о вещи Здесь будет какое-то неболшое описание о вещи<br/>
                            Здесь будет какое-то неболшое описание о вещи Здесь будет какое-то неболшое описание о вещи
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductItem