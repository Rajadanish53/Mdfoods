import React from "react";
import style from "./searchbar.module.css";
import {useContext,useEffect,useState} from "react"
import {foodinfo} from "./App"
function Displayfood({name,img}) {
    const [foodnamer, setfoodnamer] = useState(foodinfo)
    const foods = useContext(foodinfo)
  return (
    <div className={style.boxfood}>
        <h1>nothing</h1>
      {/* <img
        className={style.imgtag}
        src={img}
        alt=""
      />
      <Link className={style.foodlink}><h1 className={style.foodname}>{name}</h1></Link> */}
    </div>
  );
}

export default Displayfood;
