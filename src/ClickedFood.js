import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import style from "./searchbar.module.css";

function ClickedFood() {
  let history = useHistory();

  const [FoodRecipie, setFoodRecipie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/summary?apiKey=693dabfd0bcd40daa0883c37610ec422`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodRecipie(data);
        console.log(data.summary);
      });
  }, [id]);

  return (
    <>
      <button onClick={() => history.push("/")} className={style.btnback}>
        Go Home Page
      </button>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          {FoodRecipie.title}
        </h1>

        <p
          style={{
            padding: "3rem",
            textAlign: "justify",
            fontSize: "1.4rem",
          }}
        >
          {FoodRecipie.summary}
        </p>
      </div>
    </>
  );
}

export default ClickedFood;
