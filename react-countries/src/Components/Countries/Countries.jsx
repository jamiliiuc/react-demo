import { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';
const Countries = () => {
    const [countries, setCountires] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(r => r.json())
            .then(data => setCountires(data));
    }, []);

    return (
        <>
            <h1>{countries.length}</h1>
            <div className="countries-container">
            {
                countries.map((country) =>( <Country key={country.cca2} country = {country}></Country>
            )
            
            )
            }
            </div>
        </>
    );
};

export default Countries;