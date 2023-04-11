import style from './CountryDetail.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CountryDetail = () => {
  var coac = [];
  const co = useSelector( state => state.aCountry );
//  console.log(co.id);
  if(co && co.Activities)
    {coac = co.Activities}
  return(
    <>
    <div className={style.aCountryDetail} >
      <div>
        <h1>{co.name}</h1>
        <h3>"{co.nameformal}"</h3>
        <img src={co.flag}
            alt={`Flag of ${co.name}`}
            width={320} height={213} />
        <p>Continent: {co.continent}</p>
        <p>Capital: {co.capital}</p>
        <p>Subregion: {co.subregion}</p>
        <p>Area: {co.area} Km²</p>
        <p>Population: {co.population} hab</p>
      </div>
      
      <div>
        <h3>Activities:</h3>
        <p>{coac && (coac.length===0)?'None yet...':''}</p>
        <Link to='/form'>
          <button>Create new Activity...</button>
        </Link>
        {coac && (coac.length!==0)
          ? <div>
            {coac.map(anac => {
              return <div>
                <p>{anac.name}: {
                  anac.description}, {
                  anac.duration}hrs.</p>
                </div>
                }
              )}
              </div>  
          :''}
          
      </div>
    </div>
    </>
  )
};

export default CountryDetail;

// TODO
