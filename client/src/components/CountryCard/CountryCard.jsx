import style from './CountryCard.module.css';
import { Link } from 'react-router-dom';
import { getCountry } from '../../redux/actions';
import { useDispatch } from 'react-redux';
//import store from '../../redux/store';

const CountryCard = (co) => {
  const dispatch = useDispatch();
  return(
    <Link className={style.aCountryLink} to = {`/country/${co.id}`} >
      <div className={style.aCountryCard}
        onClick={() => {
          dispatch(getCountry(co.id))}}>
        {//<p>Id: {co.id}</p>
        }
        <div className={style.myCardDiv} >
          <h3 className={style.myCardH } >{co.name}</h3>
        </div>
        <img className={style.myCardImg}
          src={co.flag}
          alt={`Flag of ${co.name}`}/>
        <p>{co.continent}</p>
        {//<p>cap: {co.capital}</p>
        }
      </div>
    </Link>
  )
};

export default CountryCard;

// TODO
