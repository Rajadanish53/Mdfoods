import React from "react";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import style from "./searchbar.module.css";
import { useHistory } from "react-router-dom";

function Searched({apiKey,foodname}) {
  let history = useHistory();
  const [foodsearched, setfoodsearched] = useState([]);
  useEffect(() => {
    const renderdata = async () => {
      const req = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${foodname}`
      );
      const data = await req.json();
      setfoodsearched(data.results);
    };
    renderdata();
    console.log(foodsearched);
  }, []);
  return (
    <>
      <button onClick={() => history.push("/")} className={style.btnback}>
        Go Home Page
      </button>
      <h1 className={style.foodtag}>
        {foodname ? foodname : "Random Recipies"}
      </h1>
      <div className={style.boxfood}>
        {foodsearched.map((item) => {
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
