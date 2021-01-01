import React from "react";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import style from "./searchbar.module.css";
import { useHistory } from "react-router-dom";
import Searchbar from "./Searchbar";

function Searched({ apiKey, foodname, setfoodname }) {
  let history = useHistory();
  const [foodsearched, setfoodsearched] = useState({
    results: [],
  });
  useEffect(() => {
    const renderdata = async () => {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${foodname}`
      );
      console.log(req + "request log");
      const data = await req.json();
      console.log(data + "data log");
      setfoodsearched(data);
    };
    renderdata();
  }, [foodname, apiKey]);
  console.log(foodsearched.results);
  return (
    <>
      <Searchbar setfoodname={setfoodname} />
      <button onClick={() => history.push("/")} className={style.btnback}>
        Go Home Page
      </button>
      <h1 className={style.foodtag}>
        {foodname ? foodname : "Random Recipies"}
        <p className={style.resultcount}>
          {foodname !== "" &&
            foodsearched.results.length > 0 &&
            `Total Results Found ${foodsearched.results.length}`}
          {foodname.length > 1 &&
            foodsearched.results.length == 0 &&
            "No Results Found"}
        </p>
      </h1>
      <div className={style.boxfood}>
        {foodsearched.results.map((item) => {
          return (
            <FoodItem
              id={item.id}
              key={item.id}
              name={item.title}
              img={item.image}
            ></FoodItem>
          );
        })}
      </div>
    </>
  );
}

export default Searched;
