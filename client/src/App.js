import { Route, useLocation, Redirect, Switch } from 'react-router-dom';
import { Landing, CountriesView, CountryDetail,
  ActivitiesView, ActivityDetail, ActivForm }
  from './views/views.js';
import NavBar from './components/NavBar/NavBar.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries,  getActivities } from './redux/actions.js';

/*
Rutas:        Nombre    Funcion
/             Landing
/home         Countries (Lista Countries c/s Preview Activity)
/country/ccc  country   (Detalle Country c Preview Activities)
/activities   activmgr  (Lista Activities c/s Preview Countries + FormCreate)
/activity/nn  activity  (Detalle Activity c Preview Countries + FormEdit)

Downloaded  CountriesView
Filtered    CountryFilter
Searched    CountrySearch
Ordered     CountryOrder
Paginated   CountryPage

*/

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App usingEffect.');
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Henry PI Countries by Andres Ochoa</h1>
        {useLocation().pathname !== '/' && <NavBar />}
        <Switch>
          <Route
            exact path='/' render={() =>
            <Landing
            />}
          />
          <Route
            path='/home' render={() =>
            <CountriesView
            />}
          />
          <Route 
            path='/country/:coid' render={() =>
            <CountryDetail
            />}
          />
          <Route
            path='/activities' render={() =>
            <ActivitiesView
            />}
          />
          <Route
            path='/activity' render={() =>
            <ActivityDetail
            />}
          />
          <Route
            path='/form' render={() =>
            <ActivForm
            />}
          />
          <Redirect to="/home" />
        </Switch>
    </div>
  );
}

export default App;
