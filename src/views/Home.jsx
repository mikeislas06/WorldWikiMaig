import React, { useEffect, useState } from 'react';

//Components
import Country from '../components/Home/Country';
import Loader from '../components/Loader';

//Styles
import "../styles/Home/Home.styles.css"

const Home = () => {

    const [countries, setCountries] = useState([]);
    const [loader, setLoader] = useState(false);

    const fectApiData = async () => {
        setLoader(true);
        try {
            const response = await fetch(`https://restcountries.com/v3/all`);
            const result = await response.json();

            setCountries(result.splice(0, 20));
            setLoader(false);
        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    }

    
    useEffect(() => {
        fectApiData();
    }, [])

    return (
        <>
        {
            loader ? (<Loader />) : (
                <>
                    <div className="grid">
                        {
                            countries.map((country) => {
                                return(
                                        <Country key={country.cca2} name={country.name.common} flag={country.flags[1]} />
                                    )
                            })
                        }
                    </div>
                </>
            )
        }
        </>
    );
};

export default Home;