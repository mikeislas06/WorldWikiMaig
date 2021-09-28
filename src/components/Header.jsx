import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

//Styles
import "../styles/Header.styles.css"

const Header = ({ setSingleCounrty, handleSearchedValue, value, setValue }) => {

    return (
        <header>
            <Link to="/">World Wiki</Link>
            <FontAwesomeIcon icon={faGlobeAmericas} />
            <form action="" onSubmit={handleSearchedValue}>
                <input type="text" placeholder="Search Country..." onChange={(e) => {
                    setSingleCounrty(e.target.value);
                    setValue(e.target.value);
                }} />
                <Link to={`/country/${value}`}><input type="submit" value="Search" /></Link>
            </form>
        </header>
    );
};

export default Header;