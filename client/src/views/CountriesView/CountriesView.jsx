import './CountriesView.module.css';
import CountriesContainer from
'../../components/CountriesCntnr/CountriesCntnr.jsx';
import MegaBar from '../../components/MegaBar/MegaBar.jsx';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import Paging from '../../components/Paging/Paging.jsx';

const CountriesView = () => {

  const srchdCountries = useSelector ((state) => state.srchdCountries);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage // 10
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 0
  const currentCountries = srchdCountries.slice(
    indexOfFirstCountry, indexOfLastCountry)

  const paging = (pageNr) =>{
    setCurrentPage(pageNr)
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <h1>This is the Countries Home view</h1>
      <MegaBar />
      <Paging 
        countriesPerPage={countriesPerPage}
        allCountries={srchdCountries.length}
        paging={paging}
      /> 
      <CountriesContainer
        pagedCountries={currentCountries}
      />
    </>
  )
}

export default CountriesView;
