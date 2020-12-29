import Headbar from "./Headbar";
import { useState } from "react";
import Displayfood from "./Displayfood";
import Searched from "./Searched";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FoodItem from "./FoodItem";
import ClickedFood from "./ClickedFood";

function App() {
  const apiKey = "693dabfd0bcd40daa0883c37610ec422"
  const [foodname, setfoodname] = useState("");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Headbar setfoodname={setfoodname} />
          <Displayfood apiKey={apiKey}/>
        </Route>
        <Route path="/results">
          <Searched apiKey={apiKey} foodname={foodname} />
        </Route>
        <Route exact path="/food/:id" component={ClickedFood} />
        <Route exact path="/:anything">
          <h1 style={{
            textAlign:"center",
            color:"red",
            fontSize:"4rem"
          }}>Incorrect URL</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
