// Todo: actions.js

import axios from 'axios';

export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const SET_SRCHTXT = 'SET_SRCHTXT';
export const FILT_CONTINENTS = 'FILT_CONTINENTS';
export const SET_FILT_COUNTRIES = 'SET_FILT_COUNTRIES';
export const SET_SEARCHD_COUNTRIES = 'SET_SEARCHED_COUNTRIES';

export const FILT_CONT_ALL = 'All Continents';
export const FILT_CONT_AFRI = 'Africa';
export const FILT_CONT_ANTA = 'Antarctica';
export const FILT_CONT_ASIA = 'Asia';
export const FILT_CONT_EURO = 'Europe';
export const FILT_CONT_NAME = 'North America';
export const FILT_CONT_OCEA = 'Oceania';
export const FILT_CONT_SAME = 'South America';

export const getCountry = (id) => {
  console.log('Reading Country: '+ id);
  return async function (dispatch) {
//    console.log('get1Country:'+id);
    const apiData = await axios.get(
      `http://localhost:3001/countries/${id}`
    );
    const aCountr = apiData.data;
    return dispatch({ type: GET_COUNTRY, payload: aCountr });
  };
};

export const getCountries = () => {
  console.log('Reading Countries.');
  return async function (dispatch) {
    const apiData = await axios.get(
      'http://localhost:3001/countries'
    );
    const allCountr = apiData.data;
    return dispatch({ type: GET_COUNTRIES, payload: allCountr });
  };
};

export const getActivity = (id) => {
  console.log('Reading Activity: ' + id);
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/activities/${id}`
    );
    const anActiv = apiData.data;
    return dispatch({ type: GET_ACTIVITY, payload: anActiv });
  };
};

export const getActivities = () => {
  console.log('Reading Activities.');
  return async function (dispatch) {
    const apiData = await axios.get(
      'http://localhost:3001/activities'
    );
    const allActiv = apiData.data;
    return dispatch({ type: GET_ACTIVITIES, payload: allActiv });
  };
};

export const setFilterContinent = (payload) => {
  console.log(payload);
  return ({
    type: FILT_CONTINENTS,
    payload
  })
}

export const setSearchText = (payload) => {
  console.log('Searching text: ' + payload);
  return ({
    type: SET_SRCHTXT,
    payload
  })
};

export const setFiltCountries = (payload) => {
  console.log('FilteredCountries: ' + payload);
  return ({
    type: SET_FILT_COUNTRIES,
    payload
  })
};

export const setSearchedCountries = (payload) => {
  console.log('SearchedCountries: ' + payload);
  return ({
    type: SET_SEARCHD_COUNTRIES,
    payload
  })
};
