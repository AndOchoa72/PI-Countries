import Country from '../Country/Country.jsx';
import style from './CountriesContainer.module.css';
import { useSelector } from 'react-redux';

/*
var { allCountriesLocalFile } =
  require('../../allCountries.json.js');

var allCountriesRaw = allCountriesLocalFile.slice(0,10);

allCountriesLocalFile = '';
*/
// TODO: Clase 5, 22 min

const CountriesContainer = () => {

  const allCountries = useSelector(
        state => state.allCountries
        );

  return(
    <div className={style.coContainer}>
      {allCountries?.map(co => {
        console.log(JSON.stringify(co));
        return <Country
          key={co.id}
          id={co.id}
          name={co.name}
          flag={co.flag}
          continent={co.continent}
          capital={co.capital}
        />
      })}
    </div>
  )
};

export default CountriesContainer;
