import './Country.css'
const Country = ({country}) => {
    console.log(country)
    return (
        <div className="country">
            <figure>
                <img src={country.flags.png} alt="" />
            </figure>
            <h2>{country.name.common}</h2>
            <button>Visit</button>
        </div>
    );
};

export default Country;