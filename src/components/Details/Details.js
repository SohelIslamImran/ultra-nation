import React from 'react';
import './Details.css';

const Details = (props) => {
    const { flag, name, capital, nativeName, area, population, region, subregion, demonym, alpha2Code, alpha3Code, callingCodes, numericCode } = props.details;

    return (
        <div className="details">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Native Name:</td>
                        <td>{nativeName}</td>
                    </tr>
                    <tr>
                        <td>Capital:</td>
                        <td>{capital || 'hello'}</td>
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
                    <tr>
                        <td>Sub Region:</td>
                        <td>{subregion}</td>
                    </tr>
                    <tr>
                        <td>Demonym:</td>
                        <td>{demonym}</td>
                    </tr>
                    <tr>
                        <td>Alpha-2 & Alpha-3 Code:</td>
                        <td>{alpha2Code} & {alpha3Code}</td>
                    </tr>
                    <tr>
                        <td>Country Code:</td>
                        <td>{callingCodes}</td>
                    </tr>
                    <tr>
                        <td>Numeric Code:</td>
                        <td>{numericCode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Details;