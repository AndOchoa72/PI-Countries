import { Route, useLocation } from 'react-router-dom';
import { Home, Landing, Countries, Activities, ActivForm }
  from './views/views.js';
import NavBar from './components/NavBar/NavBar.jsx';
/*
Rutas:        Nombre    Funcion
/             Landing
/home         home     (Lista Countries c/s Preview Activity)
/country/arg  country  (Detalle Country c Preview Activities)
/activities   activmgr (Lista Activities c/s Preview Countries + FormCreate)
/activity/nn  activity (Detalle Activity c Preview Countries + FormEdit)
*/

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>PI Henry Countries by Andres Ochoa</h1>
        {useLocation().pathname !== '/' && <NavBar />}
        <Route exact path='/' component={Landing} />
        <Route
          path='/home' render={() =>
          <Home
          />}
        />
        <Route
          path='/country' render={() =>
          <Countries
          />}
        />
        <Route
          path='/activities' render={() =>
          <Activities
          />}
        />
        <Route
          path='/activity' render={() =>
          <ActivForm
          />}
        />
    </div>
  );
}

export default App;
