import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Hooks

//Components
import Main from "./views/Main";
import GeneralView from "./views/GeneralView";
import SearchCountry  from "./views/SearchCountry";
import Details from "./views/Details";



const App = () => {
    
  return (
  <BrowserRouter>
    <Switch>

      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/GeneralView" exact>
        <GeneralView />
      </Route>

      <Route path="/SearchCountry" exact>
        <SearchCountry />
      </Route>

      <Route path="/Details/:name" exact>
        <Details />
      </Route>

    </Switch>
  </BrowserRouter>
  );
}

export default App;
