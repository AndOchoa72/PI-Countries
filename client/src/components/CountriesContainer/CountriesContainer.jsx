import Country from '../Country/Country.jsx';
import style from './CountriesContainer.module.css';

var { allCountriesLocalFile } =
  require('../../allCountries.json.js');

var allCountriesRaw = allCountriesLocalFile.slice(0,10);

allCountriesLocalFile = '';

// todo Clase 4, 1hr 10min

const CountriesContainer = () => {
  return(
    <div className={style.coContainer}>
      {allCountriesRaw.map(co => {
        console.log(JSON.stringify(co));
        return <Country
          key={co.cca3}
          id={co.cca3}
          name={co.name.common}
          flag={co.flag}
          continent={co.continents[0]}
          capital={co.capital}
        />
      })}
    </div>
  )
};
/*
          
          id={co.id}
          name={co.name}
          flag={co.flag}
          continent={co.continent}
          capital={co.capital}
*/
export default CountriesContainer;
