import React, { useState } from 'react';
import cl from './FiltersCatalog.module.css'


const FiltersCatalog: React.FC = () => {

    const [activeFilter, setActiveFilter] = useState<number | null>(null)

    const filters = [
        {id:1 , title: "Популярности"},
        {id:2 , title: "Рейтингу"},
        {id:3 , title: "Цене"},
        {id:4 , title: "Скидке"},
        {id:5 , title: "Обновлению"},
    ]



    return (
        <div className={cl.filters_handler}>
            <h3 className={cl.title}>Сортировать по:</h3>
            {filters.map(filter => (
                <h3 className={cl.filter} key={filter.id}
                onClick={activeFilter === filter.id ? () => setActiveFilter(null) : () => setActiveFilter(filter.id)}
                style={activeFilter === filter.id ? {fontSize: '24px'} : {fontSize: '20px'}}    >{filter.title}</h3>
            ))}
        </div>
    );
}

export default FiltersCatalog;