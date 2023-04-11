import style from './CountryCard.module.css';
import { Link } from 'react-router-dom';
import { getCountry } from '../../redux/actions';
import { useDispatch } from 'react-redux';
//import store from '../../redux/store';

const CountryCard = (co) => {
  const dispatch = useDispatch();
  return(
    <Link to = {`/country/${co.id}`} >
      <div className={style.aCountryCard}
        onClick={() => {
          dispatch(getCountry(co.id))}}>
        {//<p>Id: {co.id}</p>
        }
        <h1>{co.name}</h1>
        <img 
          src={co.flag}
          alt={`Flag of ${co.name}`}
          width={160} height={100}
         />
        <p>cont: {co.continent}</p>
        {//<p>cap: {co.capital}</p>
        }
      </div>
    </Link>
  )
};

export default CountryCard;

// TODO
