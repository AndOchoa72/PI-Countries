import Country from '../Country/Country.jsx';
import style from './CountriesContainer.module.css';
import { useSelector } from 'react-redux';

const CountriesContainer = () => {

  const allCountries =
    useSelector( state => state.allCountries );

  return(
    <div className={style.coContainer}>
      {allCountries?.map(co => {
//        console.log(JSON.stringify(co));
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
