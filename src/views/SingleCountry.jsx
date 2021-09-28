import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//Components
import SingleCountryCard from '../components/SingleCountry/SingleCountryCard';
import NotFound from "../views/NotFound"
import Loader from '../components/Loader';

//Styles
import "../styles/SingleCountry.styles.css"

const SingleCountry = () => {

    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [loader, setLoader] = useState(false);

    const fetchApiDataSingle = async () => {
        setLoader(true);
        try {
            const response = await fetch(`https://restcountries.com/v3/name/${name}`);
            const result = await response.json();
            
            if(result.message){
                setNotFound(true);
                setLoader(false);
            }
            else{
                setCountry(result);
                setLoader(false);
                setNotFound(false);
            }
        } catch (error) {
            setLoader(false)
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchApiDataSingle();
    }, []);

    return (
        <>
            {
                loader ? (<Loader />) : (
                        notFound ? (<NotFound />) : (
                            country && (
                                <SingleCountryCard country={country} />
                            )
                    )
                )
            }
        </>
        
    );
};

export default SingleCountry;