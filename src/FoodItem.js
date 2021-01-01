import React from "react";
import style from "./searchbar.module.css";
import { Link } from "react-router-dom";

function FoodItem({ id, img, name }) {
  return (
    <div className={style.fooditembox}>
      <Link to={`/food/${id}/${img}`} className={style.foodlink}>
        <img className={style.imgtag} src={img} alt="" />
        <h1 className={style.foodname}>{name}</h1>
      </Link>
    </div>
  );
}

export default FoodItem;
