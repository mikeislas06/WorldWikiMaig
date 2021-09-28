import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ name, flag }) => {
    return (
        <div className="country-container">
            <h2>{name}</h2>
            <img src={flag} alt={name} />
            <Link to={`/country/${name}`}>Information</Link>
        </div>
    );
};

export default Country;