import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./features/Home/Home";
import { NewRoom } from "./features/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
