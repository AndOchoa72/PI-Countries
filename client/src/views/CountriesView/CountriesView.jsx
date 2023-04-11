import './CountriesView.module.css';
import CountriesContainer from
'../../components/CountriesContainer/CountriesContainer.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';

const CountriesView = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <h1>This is the Countries Home view</h1>
      <CountriesContainer />
    </>
  )
}

export default CountriesView;
