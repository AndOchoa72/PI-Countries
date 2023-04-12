// TODO: Reducer
import CountriesContinentsChg from '../components/AppFlow/FilterByContinent.jsx';

import { GET_COUNTRY, GET_COUNTRIES,
  GET_ACTIVITY, GET_ACTIVITIES,
  FILT_CONTINENTS, SET_SRCHTXT,
  SET_FILT_COUNTRIES, FILT_CONT_ALL } from './actions.js';

const initialState = {
  aCountry: {},
  allCountries: [],
  filtContinent: FILT_CONT_ALL,
  filtCountries: [],
  filtSearchName: '',
  srchdCountries: [],
  orderedCountries: [],
  anActivity: {},
  allActivities: [],
};


const rootReducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return { ...state,
        aCountry: action.payload};
    case GET_COUNTRIES:
    /*  CountriesContinentsChg(
          action.payload,
          state.filtContinent ); */
      return { 
        ...state,
        allCountries: action.payload,
        srchdCountries: action.payload};
    case GET_ACTIVITY:
      return { ...state, anActivity: action.payload };
    case GET_ACTIVITIES:
      return { ...state, allActivities: action.payload };

    case FILT_CONTINENTS:
    /*  CountriesContinentsChg(
        state.allCountries,
        action.payload ); */
      return { ...state, filtContinent: action.payload };
    case SET_FILT_COUNTRIES:
      return { ...state, filtCountries: action.payload };

    case SET_SRCHTXT:
      return { ...state, filtSearchName: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
