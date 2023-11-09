import React from "react";
import cl from './Title.module.css';


const Title: React.FC = () => {

    return (
        <div className={cl.title_handler}>
            <h1 className={cl.title}>Просмотренное</h1>
        </div>
    )
}

export default Title