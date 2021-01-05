import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeView from '../../views/HomeView';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeView}>
        <HomeView />
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App