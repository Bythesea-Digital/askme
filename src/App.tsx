import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./features/Home/Home";
import { NewRoom } from "./features/NewRoom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Room from "./features/Room";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
