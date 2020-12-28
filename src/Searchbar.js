import React, { useState } from "react";
import styles from "./searchbar.module.css";
import { foodprovider } from "./App";
function Searchbar() {
  const [fooddata, setfooddata] = useState([]);
  const [foodname, setfoodname] = useState("");

  const searchHandle = (e) => {
    setfoodname(e.target.value);
  };
  const sentFoodname = ()=>{
      <foodprovider value ={foodname}></foodprovider>
  }

  return (
    <React.Fragment>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Foodz Hub</h1>
        <div className={styles.searchbarbox}>
          <button onClick={sentFoodname} className={styles.searchbtn}>
            Search
          </button>
          <input
            type="text"
            onChange={searchHandle}
            className={styles.searchbox}
          />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Searchbar;
