import { useDispatch, useSelector } from 'react-redux';
import { FILT_CONT_ALL, setFiltCountries } from '../../redux/actions';

const FilterByContinent = (
     //_filtContinent
      ) => {

  var filtCo = [];
  
//  const dispatch = useDispatch();

  const _allCountries = useSelector
    (( state ) => state.allCountries );
  
  const _filtContinent = useSelector
    (( state ) => state.filtContinent );

  filtCo = _allCountries;
  if ( _filtContinent !== FILT_CONT_ALL ) 
    filtCo = _allCountries.filter(
      ( cou ) => cou.filtContinent === _filtContinent );
  
//  dispatch( setFiltCountries( filtCo ));
}

export default FilterByContinent;
