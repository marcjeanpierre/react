import './App.css';

import React from 'react';
import logo from './logo.svg';

// import { Route, Switch } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HeaderBar } from './Components/HeaderBar';
import { ListeRecipes } from './Components/ListeRecipes/index';
import { LoginLayouts } from './Layouts/LoginLayouts/index';

// Conversion du Hook en classù
function App() {
  return (
    <div className="App">
      <HeaderBar.Display logo={()=>{ return (<div> <img src={'url'} alt=""/> </div>) }} menu={()=>{ return (<div>  </div>) }}  name={ <div>  </div> } />
      <BrowserRouter>
        <Switch>

          <Route exact={true} path={'/'} render={()=>(
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <ListeRecipes.Display />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="/login"
                rel="nofowo"
              >
                Learn React
              </a>
            </header>
          )}  />
          <Route exact={true} path={'/login'} render={()=>(
            <header className="App-header">
              <LoginLayouts.Display />
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          )}  />

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
