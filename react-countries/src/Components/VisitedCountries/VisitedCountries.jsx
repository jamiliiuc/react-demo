import { useState } from 'react';
import './VisitedCountries.css'
const VisitedCountries = ({handleVisitedCountries}) => {

    const [visitedCountries, setVisitedCountries] = useState(["https://flagcdn.com/w320/ch.png","https://flagcdn.com/w320/gd.png"])
    
    return (
        <div className="visited-countries">
        {
            visitedCountries.map((flag, idx) => <img key={idx} src = {flag}/>)
        }
        </div>
    );
};

export default VisitedCountries;