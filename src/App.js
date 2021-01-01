import Headbar from "./Headbar";
import { useState } from "react";
import Displayfood from "./Displayfood";
import Searched from "./Searched";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClickedFood from "./ClickedFood";

function App() {
  const apiKey = "6b5bbbb59b7740e2a9db2109d8a66d50";
  const [foodname, setfoodname] = useState("");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Headbar setfoodname={setfoodname} />
          <Displayfood apiKey={apiKey} />
        </Route>
        <Route path="/results">
          <Searched
            apiKey={apiKey}
            foodname={foodname}
            setfoodname={setfoodname}
          />
        </Route>
        <Route exact path="/food/:id/:img">
          <ClickedFood setfoodname={setfoodname} apiKey={apiKey} />
        </Route>
        <Route exact path="/:anything">
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "4rem",
            }}
          >
            Incorrect URL
          </h1>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
