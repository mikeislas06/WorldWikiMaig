import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Header from './components/Header';
import SingleCountry from './views/SingleCountry';
import SingleCountryWeather from './components/SingleCountry/SingleCountryWeather';
import NotFound from './views/NotFound';

import "./styles/responsive.css"
import './App.css';

function App() {

    const [singleCountry, setSingleCounrty] = useState();
    const [value, setValue] = useState("");

    const handleSearchedValue = async (e) => {
        
        const url = `https://restcountries.com/v3/name/${singleCountry}`;
        e.preventDefault();

        try {
            const response = await fetch(url);
            const result = await response.json();
            setValue("");
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Header setSingleCounrty={setSingleCounrty} handleSearchedValue={handleSearchedValue} value={value} setValue={setValue} />
                <Home />
            </Route>
            <Route exact path="/country/:name">
                <Header setSingleCounrty={setSingleCounrty} handleSearchedValue={handleSearchedValue} value={value} setValue={setValue} />
                <SingleCountry />
            </Route>
            <Route exact path="/country/:capital/weather">
                <Header setSingleCounrty={setSingleCounrty} handleSearchedValue={handleSearchedValue} value={value} setValue={setValue} />
                <SingleCountryWeather />
            </Route>
            <Route path="*">
                <Header setSingleCounrty={setSingleCounrty} handleSearchedValue={handleSearchedValue} value={value} setValue={setValue} />
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
