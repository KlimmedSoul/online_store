import React, { useState } from 'react';
import cl from './FilterModal.module.css'
import logo from '../../../img/Logo/logo.svg'
import { filters, subFilters } from './Filters';

interface props {
    display: string
}

const FilterModal: React.FC<props> = ({display}) => {

    const [activeFilter, setActiveFilter] = useState<number | null>(null)


    const shutter = (some:number|null, filter:string) => {
        setActiveFilter(some)
        localStorage.setItem('filter', filter)
    }

    const subFilterHandler = (subFilter: string) => {
        localStorage.setItem('subFilter', subFilter)
        window.location.href = 'http://localhost:3000/catalog'
    }

    return (
        <div className={cl.root} style={{display: display}}>
            <img src={logo} alt='123' className={cl.logo}></img>

            <div className={cl.filters_handler}>

                <div className={cl.filters}>
                    {filters.map(filter => (
                        
                        <h1 className={cl.filter} key={filter.id} onClick={
                            activeFilter === filter.id ? () => shutter(null, 'none') : () => shutter(filter.id, filter.text)}
                            style={activeFilter === filter.id ? {fontSize: '22px', fontWeight: 400} : {fontSize : '18px', fontWeight: 300} }>
                            {filter.text}
                        </h1>

                    ))}
                </div>

                <div className={cl.subFilters} style={activeFilter === null ? {display: 'none'} : {display: 'block'}}>
                    {subFilters.map(subFilter => (
                        <h1 className={cl.subFilter} key={subFilter.id}
                        onClick={() => subFilterHandler(subFilter.text)}>{subFilter.text}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterModal;