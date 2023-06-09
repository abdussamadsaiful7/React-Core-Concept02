
import React from 'react';
import './Country.css';

const Country = (props) => {
    const { area, region, name, population, flags, capital} = props.country;
    return (
        <div className='country pt-4 shadow p-3 mb-5 bg-white rounded'>
        
            <h3>{name.common}</h3>
            <img className='border' src={flags.png} alt=''/>
            <h5>Capital: {capital}</h5>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>
                <small>Region: {region}</small>
            </p>
        </div>
    );
};

export default Country;