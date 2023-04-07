// Todo: actions.js

import axios from 'axios';

export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export const getCountry = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/countries/${id}`
    );
    const aCountr = apiData.data;
    dispatch({ type: GET_COUNTRY, payload: aCountr });
  };
};

export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      'http://localhost:3001/countries'
    );
    const allCountr = apiData.data;
    dispatch({ type: GET_COUNTRIES, payload: allCountr });
  };
};

export const getActivity = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/activities/${id}`
    );
    const anActiv = apiData.data;
    dispatch({ type: GET_ACTIVITY, payload: anActiv });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      'http://localhost:3001/activities'
    );
    const allActiv = apiData.data;
    dispatch({ type: GET_ACTIVITIES, payload: allActiv });
  };
};
