import React, { useState } from 'react';
import cl from './SubFiltersCatalog.module.css'
import { sizes } from './sizes';
import { colors } from './colors'
const SubFiltersCatalog: React.FC = () => {

    const [size, setSize] = useState<string>('none')
    const [color, setColor] = useState<string>('none')

    return (
        <div className={cl.root}>
            <div className={cl.filter_handler}>
                <h3 className={cl.title}>Цена, б.р</h3>
                <div className={cl.range_input_handler}>
                    <div className={cl.title_input_handler}>
                        <label className={cl.input_label}>От</label>
                        <label className={cl.input_label}>До</label>
                    </div>
                    <input type='range' className={cl.price_input}/>
                </div>
            </div>

            <div className={cl.filter_handler}>
                <div className={cl.title_handler}>
                    <h3 className={cl.title}>Размер</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={cl.arrow}
                    onClick={size === 'none' ? () => setSize('block') : () => setSize('none')}
                    style={size === 'block' ? {rotate: '180deg'} : {rotate: '0deg'}}>
                        <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="#514A7E"/>
                    </svg>
                </div>
                <div style={{display: size}}>
                    {sizes.map(size => (
                        <div className={cl.size_handler}>
                            <input type='checkbox' className={cl.checkbox}/>
                            <label htmlFor="" className={cl.checkbox_label}>{size}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cl.filter_handler}>
                <div className={cl.title_handler}>
                    <h3 className={cl.title}>Цвета</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={cl.arrow}
                    onClick={color === 'none' ? () => setColor('flex') : () => setColor('none')}
                    style={color === 'flex' ? {rotate: "180deg"} : {rotate: "0deg"}}>
                        <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="#514A7E"/>
                    </svg>
                </div>
                <div style={{display: color}} className={cl.color_handler}>
                    {colors.map(color => (
                        <div className={cl.circle} style={{backgroundColor: color}}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SubFiltersCatalog;