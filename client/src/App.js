import { Route, useLocation } from 'react-router-dom';
import { Landing, Countries, Activities, ActivForm }
  from './views/views.js';
import NavBar from './components/NavBar/NavBar.jsx';
/*
Rutas:        Nombre    Funcion
/             Landing
/home         Countries (Lista Countries c/s Preview Activity)
/country/ccc  country   (Detalle Country c Preview Activities)
/activities   activmgr  (Lista Activities c/s Preview Countries + FormCreate)
/activity/nn  activity  (Detalle Activity c Preview Countries + FormEdit)
*/

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>PI Henry Countries by Andres Ochoa</h1>
        {useLocation().pathname !== '/' && <NavBar />}
        <Route
          exact path='/' render={() =>
          <Landing
          />}
        />
        <Route
          path='/home' render={() =>
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
