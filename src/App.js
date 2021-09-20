import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Hooks

//Components
import Main from "./views/Main";
import GeneralView from "./views/GeneralView";
import SearchCountry  from "./views/SearchCountry";
import Details from "./views/Details";
import Weather from "./views/Weather";
import NotFound from "./views/NotFound";



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

      <Route path="/Weather/:capital" exact>
        <Weather />
      </Route>

      <Route path="*" exact>
        <NotFound />
      </Route>

    </Switch>
  </BrowserRouter>
  );
}

export default App;
