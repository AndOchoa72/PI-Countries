// TODO: Reducer

import { GET_COUNTRIES } from './actions.js';

const initialState = {
  allCountries: [],
  allActivities: [],
};

const rootReducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
