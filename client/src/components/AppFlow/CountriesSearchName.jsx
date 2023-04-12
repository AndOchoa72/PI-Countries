import { useDispatch, useSelector } from 'react-redux';
import { setSearchedCountries } from '../../redux/actions';

const CountriesSearchNameChg = () => {
  
  const dispatch = useDispatch();

  const _filtCountries = useSelector
    (( state ) => state.filtCountries );
  
  const _filtSearchName = useSelector
    (( state ) => state.filtSearchName );

  if ( _filtSearchName === '' ) {
    const filtSr = _filtCountries
  } else {
    const filtSr = _filtCountries.filter(
      ( cou ) => (
        (cou.name.includes(_filtSearchName)) ||
        (cou.nameformal.includes(_filtSearchName))
      )
    )
  }

  dispatch( setSearchedCountries ( filtSr ));
}

export default CountriesSearchNameChg;
