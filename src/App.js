import Headbar from "./Headbar";
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Displayfood from "./Displayfood"

export const foodinfo = React.createContext("d");
export const foodprovider = foodinfo.Provider;
export const foodconsumer = foodinfo.Consumer;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headbar />
        <Displayfood />
      </BrowserRouter>
    </div>
  );
}

export default App;
