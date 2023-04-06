import style from './Country.module.css';

const Country = (co) => {
  return(
    <div className={style.aCountry}>
      <p>Id: {co.id}</p>
      <p>name: {co.name}</p>
      <p>flag: {co.flag}</p>
      <p>cont: {co.continent}</p>
      <p>cap: {co.capital}</p>
    </div>
  )
};

export default Country;
