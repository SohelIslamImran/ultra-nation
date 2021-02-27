import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, area, population, region, flag } = props.country;
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h3>{name}</h3>     
            <table>
                <tbody>
                    <tr>
                        <td>Capital:</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td>Area:</td>
                        <td>{area}</td>
                    </tr>
                    <tr>
                        <td>Population:</td>
                        <td>{population}</td>
                    </tr>
                    <tr>
                        <td>Region:</td>
                        <td>{region}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => props.addCountry(props.country)}>Get details</button>
        </div>
    );
};

export default Country;