// TODO: Reducer

import { GET_COUNTRY, GET_COUNTRIES,
  GET_ACTIVITY, GET_ACTIVITIES } from './actions.js';

const initialState = {
  aCountry: {},
  allCountries: [],
  anActivity: {},
  allActivities: [],
};

const rootReducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return { ...state, aCountry: action.payload };
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload };
    case GET_ACTIVITY:
      return { ...state, anActivity: action.payload };
    case GET_ACTIVITIES:
      return { ...state, allActivities: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
