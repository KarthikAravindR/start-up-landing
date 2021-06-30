import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Startup from './Startup/pages/Startup'
import Toolbar from './shared/Toolbar/Toolbar'
import './App.css'

const App = (props) => {

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Route path="/" exact >
            <Toolbar />
            <Startup />
          </Route>
          {/* <Route path="/registration" exact >
            <Registration />
          </Route>
          <Route path="/gallery" exact >
            <Gallery />
          </Route>
          <Route path="/Training" exact >
            <Training />
          </Route> */}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}


export default App;
