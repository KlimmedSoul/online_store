import React from 'react';
import cl from './CatalogTitle.module.css'

// interface catalogTitle {
//     category: string;
//     type: string;
// }

// const CatalogTitle: React.FC<catalogTitle> = ({category, type}) => {
const CatalogTitle: React.FC = () => {

    const type = localStorage.getItem('subFilter')
    const category = localStorage.getItem('filter')
    
    return (
        <div className={cl.title_handler}>
            <h3 className={cl.title_link}>Главная/ {category} / <span className={cl.type}>{type}</span></h3>
            <h1 className={cl.title}>{type} для {category}</h1>
        </div>
    );
}

export default CatalogTitle;