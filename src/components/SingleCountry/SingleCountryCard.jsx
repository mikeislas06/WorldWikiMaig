import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountryCard = ({country}) => {

    console.log(country[0]);

    const { name, flags, capital, subregion, borders } = country[0];

    return (
            <div className="single-country">
                <h2>{name.common}</h2>
                <img src={flags[1]} alt={name} />

                <ul>
                    <li><span>Capital:</span> {capital[0]}</li>
                    <li><span>Region:</span> {subregion}</li>
                    <li>
                        <span>Borders:</span>
                        <ul className="borders">
                            {
                                borders &&
                                    borders.map((border, i) => {
                                        return(
                                            <li key={i}>{border}</li>
                                        )
                                    })
                            }
                        </ul>
                    </li>
                </ul>

                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Link to={"/"}>Go Back</Link>
                    <Link to={`${capital}/weather`}>Check Weather</Link>
                </div>

            </div>
    );
};

export default SingleCountryCard;