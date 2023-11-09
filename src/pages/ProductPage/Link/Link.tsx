import React from "react";
import cl from './Link.module.css';


const Link: React.FC = () => {

    return (
        <div className={cl.root}>
            <h3 className={cl.title}> Главная/ {localStorage.getItem('filter')}/{localStorage.getItem('subFilter')}</h3>
        </div>
    )
}

export default Link