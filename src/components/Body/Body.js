import React from 'react';
import { useEffect, useState } from 'react';
import defaultData from '../../DefaultData';
import Country from '../Country/Country';
import Details from '../Details/Details';
import './Body.css';

const Body = () => {
    const [countries, setCountries] = useState([]);
    const [details, setDetails] = useState(defaultData);
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const addCountry = (country) => setDetails(country);

    return (
        <div className="country-container">
            <div className="country-details">
                <Details details={details}></Details>
            </div>
            <div className="all-countries">
                {
                    countries.map(country => <Country country={country} addCountry={addCountry} key={country.numericCode}></Country>)
                }
            </div>
        </div>
    );
};

export default Body;