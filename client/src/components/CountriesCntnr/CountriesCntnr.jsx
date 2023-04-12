import CountryCard from '../CountryCard/CountryCard.jsx';
import style from './CountriesContainer.module.css';

const CountriesContainer = ({pagedCountries}) => {

  return(
    <div className={style.coContainer}>
      {pagedCountries.map(co => {
//        console.log(JSON.stringify(co));
        return <CountryCard
          key={co.id}
          id={co.id}
          name={co.name}
          flag={co.flag}
          continent={co.continent}
//          capital={co.capital}
        />
      })}
    </div>
  )
};

export default CountriesContainer;
